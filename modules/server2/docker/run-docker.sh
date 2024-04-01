# Last Updated: 2024/03/09
#!/bin/bash

source /home/appuser/Server2App-dist/env.sh

crtVersion=$1
containerName=$2
if [ -z $crtVersion ]; then
    echo "[E] crtVersion is required."
    exit 1
fi

echo "[I] crtVersion: $crtVersion"

docker ps -a | grep $containerName | awk '{print $1}' | xargs -I {} docker stop {}
docker ps -a | grep $containerName | awk '{print $1}' | xargs -I {} docker rm {}
docker run -e DB_USER=$DB_USER -e DB_PASSWORD=$DB_PASSWORD -e DB_HOST=$DB_HOST -e DB_PORT=$DB_PORT -e DB_DATABASE=$DB_DATABASE -e TYKEY=$TYKEY --name $containerName -d -p 0.0.0.0:2016:2016 localbuild/server2-linux-x64:devops 
timeout 60 docker logs -f $containerName

exit 0