import { TypeRunItem } from "../items";
import path from 'path'
import { API_SERVER_URL, core_sendAPIRequestInBE, getLAFRegion } from "../web2share-copy/api";
import { isDevEnv, isTestEnv } from "../web2share-copy/env";
import { getAppBootstrapImplDir, getAppBootstrapImplWeb2Dir, getAppBootstrapInternalDir, getAppBootstrapTempDir } from "../web2share-copy/appdir";
import { writeFileSync } from 'fs'
import { PkgInfo, readPkgInfoFromDir } from "../web2share-copy/pkginfo";
import { URL_RELEASE_GET_ALL, URL_RELEASE_GET_LATEST } from "../web2share-copy/server_urls";
import { PkgDownloadInfo, ReleaseLatestResponse, SysResponse } from "../web2share-copy/server_constants";
import { DLinkType, IsCurrentServerMode } from "../types";
import crypto from 'crypto';
import { logger } from "../utils/logger";
import fs from 'fs'
import stream from 'stream'
import { computeHash } from "utils/hash";
import compressUtils from "utils/compressUtils";
import shelljs from 'shelljs'
import { getCurrentBootConfigFileWithCurrentVer, getDLinkConfig } from "../fn";
let bootstrapInternalDir = getAppBootstrapInternalDir();
let bootStrapImplWeb2Dir = getAppBootstrapImplWeb2Dir()
let tempDir = getAppBootstrapTempDir()


let currentDIRName = __dirname;
export let getMinimalDIrPath = () => {
    return isDevEnv() || isTestEnv() ? path.join(
        currentDIRName,
        '..',
        '..',
        'testdata'
    ) : path.join(
        currentDIRName,
        '..',
        '..',
    )
}
let minimalDIRPath = getMinimalDIrPath()
logger.debug("minimalDIRPath", minimalDIRPath)
let pkgInfo = readPkgInfoFromDir(minimalDIRPath);
export let getLatestVersionResponse = async (): Promise<SysResponse<ReleaseLatestResponse>> => {
    let lang = process.env.APPLANG || 'en_US';
    // go to check
    // TODO: actually, lang is not required in backstaged jobs. If users wanna check release notes, the lang can be selected in the page rather than this job
    let r = await core_sendAPIRequestInBE({
        lang: lang,
        version: pkgInfo.version,
        platform: pkgInfo.platform,
        region: getLAFRegion(lang),
    }, URL_RELEASE_GET_LATEST, {})
    let json = await r.json()
    return json as SysResponse<ReleaseLatestResponse>
}

export let getRunScriptNameByPlatform = (platform: string) => {
    let pkgInfo = { platform }
    return pkgInfo.platform == 'windows-x64' || pkgInfo.platform == 'windows-arm64' ? 'run.bat' : 'run.sh'
}
export let getReleaseDateTxtInFolder = (folder: string): string[] => {
    return shelljs.find(folder).filter(x => {
        return x.indexOf('releaseDate.txt') !== -1
    })
}
export let extractTempFileAndConfirmIt = async (currentTempFile: string, latestInfo: PkgDownloadInfo) => {
    let version = latestInfo.version
    let currentPlatform = pkgInfo.platform
    let currentImplDir = bootStrapImplWeb2Dir
    let saveToWhere = path.join(bootStrapImplWeb2Dir, version)
    await compressUtils.compress(currentTempFile, saveToWhere)
    let releaseDateFile: string | null = null;
    // iterate all files in saveToWhere until got the runScript
    let runScriptFile: string | null = null;
    if (!runScriptFile) {
        throw new Error('runScriptFile not found')
    }
    let releaseDateTxtFileList = getReleaseDateTxtInFolder(saveToWhere)
    if (releaseDateTxtFileList.length == 0) {
        throw new Error('releaseDate.txt not found')
    }
    let finalLoadFilePath = path.join(
        releaseDateTxtFileList[0],
        '..',
        'boot',
        'items.js'
    )
    let currentBootConfig = getCurrentBootConfigFileWithCurrentVer();
    let newValDLink: DLinkType = {
        fromVersion: pkgInfo.version,
        toVersion: latestInfo.version,
        dateTime: new Date().getTime() + "",
        loadPath: finalLoadFilePath,
    }
    writeFileSync(currentBootConfig, JSON.stringify(newValDLink, null, 4))
}

export let downloadByPkgInfo = async (latestInfo: PkgDownloadInfo) => {
    logger.debug("downloadByPkgInfo: " + JSON.stringify(latestInfo))
    let currentPlatform = pkgInfo.platform
    let l_fileName = latestInfo.fileName
    let l_pkgURL = latestInfo.pkgURL
    let randomSTR = parseInt((Math.random() * 1000) + "")
    let l_version = latestInfo.version
    let sha256SumURL = latestInfo.sha256SumURL
    let currentTempFile = path.join(tempDir, Date.now() + "-" + randomSTR + '-' + l_fileName)
    logger.debug("currentTempFile", currentTempFile)
    // download l_pkgURL to currentTempFile by using fetch and fs
    let sha256Res = await fetch(sha256SumURL)
    let sha256Text = await sha256Res.text()
    logger.debug('sha256Text', sha256Text)
    // exact sha256 from sha256Text
    let expect_findSHA256Value: string | null = null;
    sha256Text.split('\n').every(line => {
        logger.debug('line: ', line)
        if (line.trim() == '') {
            return true;
        }
        let [sha256, fileName] = line.split('  ')
        sha256 = sha256.trim()
        fileName = fileName.trim()
        logger.debug(`sha256: ${sha256}, fileName: ${fileName}`)
        if (fileName == l_fileName) {
            // check sha256
            logger.debug('sha256:' + sha256)
            expect_findSHA256Value = sha256
            return false;
        }
        return true;
    })
    if (!expect_findSHA256Value) {
        throw new Error('sha256 not found')
    } else {
        logger.debug('expect sha256:' + expect_findSHA256Value)
    }
    let fetchRes = await fetch(l_pkgURL)
    logger.info(`fetch URL: ${fetchRes.url}, status: ${fetchRes.status}`)
    logger.info(`download to ${currentTempFile}`)
    if (!fetchRes.ok) {
        throw new Error('fetch failed')
    }
    let buffer = await fetchRes.arrayBuffer()
    writeFileSync(currentTempFile, Buffer.from(buffer))

    // do sha256 sum check for currentTempFile
    let actual_sha256Value = await computeHash(currentTempFile)
    logger.debug('actual sha256', actual_sha256Value)

    if (actual_sha256Value != expect_findSHA256Value) {
        logger.error('sha256 not match, expect: ' + expect_findSHA256Value + ', actual: ' + actual_sha256Value)
        throw new Error('sha256 not match')
    } else {
        logger.info('sha256 match')
    }

    return currentTempFile
}

export let job_runVersionCheck = async () => {
    if (IsCurrentServerMode()) {
        logger.debug('skip checking in online mode')
        return;
    }
    while (true) {
        logger.debug('job_runVersionCheck')
        try {
            let latestVerRes = await getLatestVersionResponse()
            if (latestVerRes && latestVerRes.content.anyUpdate) {
                let latestInfo = latestVerRes.content.updateInfo.latest
                // STEP-1: download the latest version
                let finalFile = await downloadByPkgInfo(latestInfo)
                // STEP-2: extract the file and confirm it
                await extractTempFileAndConfirmIt(finalFile, latestInfo)
                // everything is ok, nice!
                logger.info('update done')
            }
        } catch (e) {
            logger.error('contain version check error:' + e)
            // sleep 10 minutes since it's not a critical error
            await new Promise(resolve => setTimeout(resolve, 10 * 60 * 1000));
        }
        // sleep 5 minutes
        await new Promise(resolve => setTimeout(resolve, 10 * 60 * 1000));
    }
    // check version
}

let isDev = isDevEnv()
let item: TypeRunItem = {
    load: (dynamicMode: boolean) => {
        logger.debug("entrypoint", bootstrapInternalDir);

        let defaultServerEntry = path.join(
            minimalDIRPath,
            "core",
            "server.js",
        );

        // start launching the server
        require(defaultServerEntry);

        job_runVersionCheck()
    },
}
export default item