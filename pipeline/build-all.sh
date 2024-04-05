#!/bin/bash 
# this script is designated for building this whole project.  
# version will be retrieved from the file package.json

if [ "$TAG_MODE" = "true" ]; then
    export LAFTOOLS_ROOT=/home/runner/work/LafTools/LafTools-tag
    cp -a /home/runner/work/LafTools/LafTools /home/runner/work/LafTools/LafTools-tag
fi

chmod +x $LAFTOOLS_ROOT/pipeline/tools/get-web2-version.sh
crtVersion=`$LAFTOOLS_ROOT/pipeline/tools/get-web2-version.sh`

if [ -z $crtVersion ]; then
    echo "[E] crtVersion is required."
    exit 1
fi

echo "[I] crtVersion: $crtVersion"

echo "[I] preparing for dev copy files"
(
    cd $LAFTOOLS_ROOT/pipeline
    chmod +x ./dev-sync-copy-files.sh
    ./dev-sync-copy-files.sh
)

echo "[I] LafTools is located at $LAFTOOLS_ROOT"
cd $LAFTOOLS_ROOT
echo "[I] PWD: $(pwd)"
distDir=$LAFTOOLS_ROOT/dist

clean-bundle(){
    echo "[I] $(date) Working..."
    echo "[I] PWD: $(pwd)"
    echo "[I] Removing dist dir: $distDir"
    [ -d $distDir ] && rm -rf $distDir  

    # dist dir
    mkdir -p $distDir
    # pkg
    pkgDir=$distDir/pkg
    [ -d $pkgDir ] && rm -rf $pkgDir
    mkdir -p $pkgDir
    # docker
    dockerDir=$distDir/docker
    [ -d $dockerDir ] && rm -rf $dockerDir
    mkdir -p $dockerDir
}

build-bundle(){
    bundleMode=$1

    targetFile=./modules/web2/app/[lang]/[category]/info.tsx
    if [ ! -f $targetFile ]; then
        echo "[E] $targetFile is not found."
        exit 1
    fi

    echo "
import { AppInfoClz } from \"@/app/__CORE__/meta/ctypes\"


    export default {
    \"version\": \"$crtVersion\",
    \"releaseDate\": \"$(date +%Y-%m-%d)\",
    \"timestamp\": \"$(date +%s)\"
    } satisfies AppInfoClz
    " > $targetFile


    if [ -z jq ]; then
        echo "[E] jq is not installed, please install jq first."
        exit 1
    fi

    set +e
    source ./pipeline/env.sh
    mode=$1

    crossPlatformDir=$LAFTOOLS_ROOT/cross-platform
    if [ ! -d $crossPlatformDir ]; then
        echo "[I] downloading runtime nodejs"
        ./pipeline/fetch-runtime-nodejs.sh &> /dev/null
    else 
        echo "[I] runtime nodejs already exists in $crossPlatformDir, skip downloading."
    fi


    # building LafTools with dev commands
    build-cmd(){
        echo "[I] building cmd"

        echo "[I] built cmd"
    }

    build-core(){
        cd $LAFTOOLS_ROOT

        platformName=$1
        platformArch=$2
        platformGoFile=$3
        platformExt=bin
        argGOOS=$4
        osPatchDir=$LAFTOOLS_ROOT/os-patch/$platformName
        platformDistDir=$LAFTOOLS_ROOT/dist/os/$platformName/
        echo "--------- CORE $platformName BEGIN ---------"
        echo "[I] building be core"
        osScriptFile=$argGOOS
        if [ $platformName == "windows-x64" ] || [ $platformName == "windows-arm64" ]; then
            platformExt=exe
        fi
        
        mkdir -p $platformDistDir
        if [ $bundleMode != "no-nodejs" ]; then
            mkdir -p $platformDistDir/bin
        else
            [ -d $platformDistDir/bin ] && rm -rf $platformDistDir/bin
        fi
        echo "[I] building [$platformName]"
        # GOOS=$argGOOS GOARCH=$platformArch go build -o $platformDistDir/core.$platformExt core/app.go 

        echo "[I] copying os-patch..."

        if [ -d $osPatchDir ];then 
            cp -a $osPatchDir/* $platformDistDir
        fi

        echo "[I] copying resources and web..."

        # cp -a ./dist/resources $platformDistDir
        cp -a ./dist/web2 $platformDistDir/core

        cp -a ./pipeline/parcel/scripts/$osScriptFile/* $platformDistDir

        (
            echo "[I] copying bootstrap and scripts..."
            cd $LAFTOOLS_ROOT/modules/bootstrap
            npm i -S -D --verbose --force
            npm run build 
            mkdir -p $platformDistDir/boot
            cp -a $LAFTOOLS_ROOT/modules/bootstrap/dist/* $platformDistDir/boot/
        )

        # if [ $bundleMode != "no-nodejs" ]; then
        #     echo "[I] copying nodejs service..."
        #     cp -a ./cross-platform/$platformName/node-dir $platformDistDir/bin/node
        # fi
        echo "[I] built"
    }

    build-res(){
        cp -a ./resources/ ./dist/resources
        uglifyAllJSONInDir "./dist/resources"   
    }

    build-fe(){
        set -e
        echo "[I] building fe"
        (
            cd ./modules/web2
            # [ ! -d node_modules ] && npm install --production --verbose --force 
            # [ ! -d node_modules ] && npm install -S -D --force 
            [ -d node_modules ] && rm -rf node_modules
            rm -f *lock*
            [ ! -d node_modules ] && npm install --omit=dev --force 
            # [ ! -d node_modules ] && npm install -S -D --force 
            rm ./vite.config.ts
            rm -rf .next
            npm run build
            cd .next
            mkdir -p ./standalone/public
            cp -a ../public/* ./standalone/public/
            cp -a  ./static/ ./standalone/.next/static
            cd ..
            [ -d $LAFTOOLS_ROOT/dist/web2 ] && rm -rf $LAFTOOLS_ROOT/dist/web2
            cp -a ./.next/standalone/ $LAFTOOLS_ROOT/dist/web2
            echo "[I] fe bundle size: $(du -sh $LAFTOOLS_ROOT/dist/web2)"
        )
        echo "[I] built fe"
        set +e
    }

    build-be(){
        if [[ $mode = "linux" ]]; then
            build-core linux-x64 amd64 "core/app_unix.go" linux
            build-core linux-arm64 arm64 "core/app_unix.go" linux
        else
            build-core windows-x64 amd64 "core/app_windows.go" windows
            build-core windows-arm64 arm64 "core/app_windows.go" windows
            build-core linux-x64 amd64 "core/app_unix.go" linux
            build-core linux-arm64 arm64 "core/app_unix.go" linux
            build-core darwin-x64 amd64 "core/app_unix.go" darwin
            build-core darwin-arm64 arm64 "core/app_unix.go" darwin
        fi
    }

    build-extra(){
        echo "[I] building extra"
    }

    refining(){
        echo "[I] refining resources.."
        find ./pipeline -iname "*.bin" -exec chmod 755 {} \;
        find ./dist -iname "*.bin" -exec chmod 755 {} \;
        find ./dist -iname "*.sh" -exec chmod 755 {} \;
        find ./dist -iname "*.command" -exec chmod 755 {} \;
        find ./dist -iname "ph" -exec rm -f {} \;
    }

    package-for(){
        platformName=$1
        packageType=$2
        platformDistDir=$LAFTOOLS_ROOT/dist/os/$platformName/
        if [ -z $packageType ]; then
            packageType=tar.gz
        fi
        echo "[I] packaging for $platformName"
        (
            cd $platformDistDir
            fileName=
            subDirName=LafTools-${crtVersion}-$platformName-minimal
            subDir=./$subDirName
            if [ -d $subDir ]; then
                rm -rf $subDir
            fi
            mkdir -p $subDir
            cp -a ./* $subDir
            rm -rf $subDir/$subDirName 
            mkdir -p $subDir/info
            echo "$platformName" > $subDir/info/platform.txt
            echo "$crtVersion" > $subDir/info/version.txt
            echo "$(date +%Y-%m-%d)" > $subDir/info/releaseDate.txt
            if [ $packageType == "zip" ]; then
                fileName=LafTools-${crtVersion}-$platformName-minimal.zip
                zip -q -r $fileName $subDir/* &> /dev/null
            else
                fileName=LafTools-${crtVersion}-$platformName-minimal.tar.gz
                tar -zcf $fileName $subDir &> /dev/null
            fi
            rm -rf $subDir
            mv $fileName ../../pkg
            # do verify 
            cd ../../pkg
            echo "[I] verifying $fileName"
            if [ $packageType == "zip" ]; then
                unzip -l $fileName &> /dev/null
            else
                tar -ztf $fileName &> /dev/null
            fi
            echo "[I] file size: $(du -sh $fileName | awk '{print $1}')"
        )
    }
    package-all(){
        echo "[I] packaging all platforms"
        if [[ $mode = "linux" ]]; then
            package-for linux-x64
            package-for linux-arm64
        else
            package-for windows-x64 zip
            package-for windows-arm64 zip
            package-for linux-x64
            package-for linux-arm64
            package-for darwin-x64
            package-for darwin-arm64
        fi
        (
            cd $LAFTOOLS_ROOT/dist/pkg
            echo "[I] calculating sha256 for $fileName"
            sha256sum * > ./SHA256SUM.txt
        )
        echo "[I] packaged all platforms"
    }

    dockerize-laftools(){
        platformName=$1
        echo "[I] dockerizing laftools for $platformName"
        subDockerDir=$dockerDir/$platformName
        mkdir -p $subDockerDir
        (
            cd $subDockerDir
            cp ../../pkg/*$platformName-minimal.tar.gz ./linux.tar.gz
            cp $LAFTOOLS_ROOT/pipeline/parcel/docker/* ./
            rm -rf ./node-v20.12.0-$platformName
            curl https://cdn.npmmirror.com/binaries/node/v20.12.0/node-v20.12.0-$platformName.tar.gz -O
            tar -xzf node-v20.12.0-$platformName.tar.gz
            find . -iname "*.sh" -exec chmod 755 {} \;
            ls -ahlrt
            mv node-v20.12.0-$platformName node

            echo "[I] build docker image for $platformName"
            docker build -t codegentoolbox/laftools-$platformName:$crtVersion -f ./Dockerfile .
            docker build -t codegentoolbox/laftools-$platformName:latest -f ./Dockerfile .
            if [ $? -ne 0 ]; then
                echo "[E] docker build failed for $platformName"
                exit 1
            fi

            set -e
            echo "testing docker container for $platformName"
            cd $LAFTOOLS_ROOT/pipeline 
            chmod +x ./test-docker.sh codegentoolbox/laftools-$platformName:$crtVersion
            ./test-docker.sh 
            set +e

            if [ "$TAG_MODE" = "true" ]; then
                echo "[I] will test and push docker container for $platformName"
                echo "[I] pushing docker image for $platformName"
                docker push codegentoolbox/laftools-$platformName:$crtVersion
                docker push codegentoolbox/laftools-$platformName:latest
            fi
            if [ $platformName == "linux-x64" ]; then
                echo "[I] building other tag"
                docker build -t codegentoolbox/laftools-$platformName:devops -f ./Dockerfile .
                docker save codegentoolbox/laftools-$platformName:devops > $LAFTOOLS_ROOT/dkout.tmp 
                zip -r $LAFTOOLS_ROOT/pipeline-server.zip $LAFTOOLS_ROOT/pipeline/server
                gzip $LAFTOOLS_ROOT/dkout.tmp
                echo "[I] docker output file: $LAFTOOLS_ROOT/dkout.tmp.gz, size is $(du -sh $LAFTOOLS_ROOT/dkout.tmp.gz | awk '{print $1}')"
            fi
        )
    }

    do-test-all(){
        set -e
        cd $LAFTOOLS_ROOT/pipeline
        chmod +x ./test-all.sh
        ./test-all.sh
        if [ $? -ne 0 ]; then
            echo "[E] test failed."
            exit 1
        else 
            echo "[I] $(date) do-test-all PASSED"
            exit 0
        fi
        set +e
    }

    docker-all(){
        # check if docker command is available
        if [ -z $(which docker) ]; then
            echo "[E] docker command is not available, will ignore this part. To run it, please install docker first."
            return;
        fi
        dockerize-laftools linux-x64
        dockerize-laftools linux-arm64

        echo "[D] Docker Details"
        docker images
    }


    # [BEGIN]
    # build core and fe
    build-cmd
    build-res
    build-fe 
    build-be
    build-extra
    # refine resources
    refining
    # package as zip and tar.gz
    package-all
    do-test-all
    if [ $? -ne 0 ]; then
        echo "[E] do-test-all failed."
        exit 1
    else 
        echo "[I] $(date) do-test-all PASSED"
    fi
    # build docker images
    docker-all
    
    # [END]

    echo "[I] location: `pwd` and dist dir: $distDir"

}

clean-bundle
build-bundle "with-nodejs"
# build-bundle "no-nodejs"

echo "[I] $(date) Done."
