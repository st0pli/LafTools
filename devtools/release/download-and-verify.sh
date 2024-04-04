#!/bin/bash
cd $(dirname $0)
crtVersion=`cat $LAFTOOLS_ROOT/package.json | jq -r '.version'`
echo "Current version is $crtVersion"
rm -rf binary
mkdir -p binary
cd binary
# PKG_DOWNLOAD_CN_HOST=https://download.laftools.cn
# PKG_DOWNLOAD_US_HOST=https://download.laftools.cn

# ./coscli.exe ls cos://pkg4laftools-1252929034