#!/bin/bash
cd $(dirname $0)
crtVersion=`cat $LAFTOOLS_ROOT/package.json | jq -r '.version'`
echo "Current version is $crtVersion"
# ./coscli.exe ls cos://pkg4laftools-1252929034