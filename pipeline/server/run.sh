# Last Updated: 2024/03/09
#!/bin/bash

crtVersion=$1
defaultLocale=$2
portMapTo=$3
distName=$4
containerName=$5
LAF_REGION=$6
if [ -z $crtVersion ]; then
    echo "[E] crtVersion is required."
    exit 1
fi

echo "[I] crtVersion: $crtVersion"
echo "[I] defaultLocale: $defaultLocale"
echo "[I] portMapTo: $portMapTo"

cd ~/$distName
# ctn=$(ls | wc -l)
# if [ $ctn -gt 5 ]; then
#     ls -rt  | grep dkout | head -n 1  | xargs -I {} rm {}
# fi

version=$1
runtimeDir=/home/$(whoami)/runtime
if [ ! -d "$runtimeDir" ]; then
  mkdir -p $runtimeDir
fi
if [ ! -d "$runtimeDir/pre-release" ]; then
  mkdir -p $runtimeDir/pre-release
fi
targetReleaseDIR=$runtimeDir/release
if [ $containerName = "laft-pre-inst" ]; then
  targetReleaseDIR=$runtimeDir/release-p
fi
if [ ! -d "$targetReleaseDIR" ]; then
  mkdir -p $targetReleaseDIR
fi

if [ -z "$version" ]; then
    echo "Please provide a version"
    exit 1
fi

targetPkg=$(ls -t ~/$distName | grep dkout | grep $version | head -n 1)
if [ -z "$targetPkg" ]; then
    echo "No package found for version $version"
    exit 1
fi

cp $targetPkg $runtimeDir/pre-release
if [ "" != "$targetReleaseDIR" ]; then
  rm -rf $targetReleaseDIR/*
fi
mv $runtimeDir/pre-release/* $targetReleaseDIR

cd $targetReleaseDIR
mv $targetPkg m.tmp.gz
gunzip ./m.tmp.gz
docker load -i ./m.tmp
docker ps -a | grep $containerName | awk '{print $1}' | xargs -I {} docker stop {}
docker ps -a | grep $containerName | awk '{print $1}' | xargs -I {} docker rm {}
docker run -e ONLINEMODE=true -e LAFREGION=$LAFREGION -e APPLANG=$defaultLocale --name $containerName -d -p 0.0.0.0:$portMapTo:39899 codegentoolbox/laftools-linux-x64:devops 
timeout 10 docker logs -f $containerName

exit 0