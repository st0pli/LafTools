# Last Updated: 2024/03/09
#!/bin/bash

source /home/appuser/Server2App-dist/env.sh

containerName=$1
crtVersion=$2

docker ps -a | grep $containerName | awk '{print $1}' | xargs -I {} docker stop {}
# docker ps -a | grep $containerName | awk '{print $1}' | xargs -I {} docker rm {}
docker run -e DB_USER=$DB_USER -e DB_PASSWORD=$DB_PASSWORD -e DB_HOST=$DB_HOST -e DB_PORT=$DB_PORT -e DB_DATABASE=$DB_DATABASE -e TYKEY=$TYKEY --name $containerName -d -p 0.0.0.0:2016:2016 -v /home/appuser/Server2App-dist/logs:/opt/logs:rw localbuild/server2-linux-x64:$crtVersion tail -f /dev/null 
timeout 60 docker logs -f $containerName

exit 0