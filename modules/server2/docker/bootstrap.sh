#!/bin/bash
cd /opt/app
echo "running server2"
pm2 start 'npm run start' --name 'myserver2'
pm2 logs myserver2