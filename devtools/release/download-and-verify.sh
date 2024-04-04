#!/bin/bash
set -e
cd $(dirname $0)
crtVersion=`cat $LAFTOOLS_ROOT/package.json | jq -r '.version'`
echo "Current version is $crtVersion"
rm -rf dist
mkdir -p dist
cd dist

curl $PKG_DOWNLOAD_US_HOST/$crtVersion/SHA256SUM.txt -O    

# CN: PKG_DOWNLOAD_CN_HOST
# US: PKG_DOWNLOAD_US_HOST
downloadToBinaryAndVerify(){
    platformName=$1
    curl $PKG_DOWNLOAD_US_HOST/$crtVersion/LafTools-$crtVersion-$platformName-minimal.tar.gz -O    
}

downloadToBinaryAndVerify darwin-x64
downloadToBinaryAndVerify darwin-arm64
downloadToBinaryAndVerify linux-x64
downloadToBinaryAndVerify linux-arm64
downloadToBinaryAndVerify windows-x64
downloadToBinaryAndVerify windows-arm64


# ./coscli.exe ls cos://$TXCOSBUCKET