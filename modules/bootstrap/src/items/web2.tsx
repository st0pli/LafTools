import { TypeRunItem } from "@/items";
import path from 'path'
import { API_SERVER_URL } from "@/web2share-copy/api";
import { isDevEnv } from "@/web2share-copy/env";
import { getAppBootstrapInternalDir } from "@/web2share-copy/appdir";

export let getLatestVersionResponse = async () => {
    await fetch(API_SERVER_URL + '/v3/release/latest', {

    })
}

export let job_runVersionCheck = async () => {
    // check version
}

let isDev = isDevEnv()
let item: TypeRunItem = {
    load: (dynamicMode: boolean) => {
        let bootstrapInternalDir = getAppBootstrapInternalDir();
        console.log("entrypoint", bootstrapInternalDir);

        let currentDIRName = __dirname;
        let defaultServerEntry = path.join(
            currentDIRName,
            "..",
            '..',
            "core",
            "server.js",
        );

        // start launching the server
        require(defaultServerEntry);

        job_runVersionCheck()
    },
}
export default item