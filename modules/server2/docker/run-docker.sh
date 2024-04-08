# Last Updated: 2024/03/09
#!/bin/bash

source /home/appuser/Server2App-dist/env.sh

containerName=$1
crtVersion=$2

# TODO: health check before replacing container in case any error

killCP(){
    pContainerName=$1
    pListenPort=$2
    timeout 20 docker ps -a | grep $pContainerName | awk '{print $1}' | xargs -I {} docker stop {}
    docker ps -a | grep $pContainerName | awk '{print $1}' | xargs -I {} docker rm {}
}
runCP(){
    pContainerName=$1
    pListenPort=$2
    docker run -e APP_VERSION=$crtVersion -e DB_USER=$DB_USER -e DB_PASSWORD=$DB_PASSWORD -e DB_HOST=$DB_HOST -e DB_PORT=$DB_PORT -e DB_DATABASE=$DB_DATABASE -e TYKEY=$TYKEY --name $pContainerName -d -p 0.0.0.0:$pListenPort:2016 -v /home/appuser/Server2App-dist/logs:/opt/logs:rw localbuild/server2-linux-x64:$crtVersion
}
# test pre
preContainerName=${containerName}preinst
prePort=2019
killCP $preContainerName $prePort
runCP $preContainerName $prePort
sleep 15
curl 127.0.0.1:2016/v3/hello-world -I | grep "200 OK"
if [ $? -ne 0 ]; then
    echo "[PREINST FAILED] Failed to start container $preContainerName"
    exit 1
fi

# run current
port=2016
killCP $containerName $port
runCP $containerName $port
if [ $? -ne 0 ]; then
    echo "Failed to start container $containerName"
    exit 1
fi
timeout 60 docker logs -f $containerName

exit 0