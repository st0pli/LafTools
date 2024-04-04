#!/bin/bash
cd $(dirname $0)
set -e
cd dist
crtVersion=`cat $LAFTOOLS_ROOT/package.json | jq -r '.version'`
echo "Current version is $crtVersion"
# CN: PKG_UPLOAD_CN_HOST
# US: PKG_UPLOAD_US_HOST

uploadToCos(){
    platformName=$1
    fileName=LafTools-$crtVersion-$platformName-minimal.tar.gz
    echo "Uploading $fileName to COS"
    ./coscli.exe upload $fileName cos://$TXCOSBUCKET/$crtVersion/$fileName
    echo "Uploaded $fileName to COS"
}

uploadToCos darwin-x64
uploadToCos darwin-arm64
uploadToCos linux-x64
uploadToCos linux-arm64
uploadToCos windows-x64
uploadToCos windows-arm64
