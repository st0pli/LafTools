#!/bin/bash
# this script is designated for testing this whole project.
set -e
cd $LAFTOOLS_ROOT
testPkgDir=$LAFTOOLS_ROOT/test-pkg
if [ -d $testPkgDir ]; then
    rm -rf $testPkgDir
fi
mkdir $testPkgDir

echo "[I] $(date) Testing at $testPkgDir..."

# /home/runner/work/LafTools/LafTools-M-pre/dist/pkg/
chmod +x $LAFTOOLS_ROOT/pipeline/tools/get-web2-version.sh
crtVersion=`$LAFTOOLS_ROOT/pipeline/tools/get-web2-version.sh`
echo "[I] crtVersion: $crtVersion"

cp -a $LAFTOOLS_ROOT/dist/pkg/LafTools-$crtVersion-linux-x64-minimal.tar.gz LafTools-pkg.tar.gz
tar -xzf LafTools-pkg.tar.gz -C $testPkgDir

pwd 
ls