#!/bin/bash

# Read port value from properties file
# port=$(grep 'port' ./config/startup.properties | cut -d'=' -f2)

# # Use port as parameter to start service
# ./core.bin server --root=$(pwd) --port=${port} --debug=false

cd core
HOSTNAME=127.0.0.1
./bin/node-dir/bin/node ./core/server.js
