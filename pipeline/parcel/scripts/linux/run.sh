#!/bin/bash

export HOSTNAME=0.0.0.0
export PORT=39899

if [ ! -f ./bin/node/bin/node ]; then
    echo "[I] skip downloading runtime"
else
    echo "[I] ERROR: runtime nodejs not found, please download it first! (Node.js v20+)"
    # echo "[I] downloading Nodejs environment [20.12.0] for Linux-x64..."
    # curl https://cdn.npmmirror.com/binaries/node/v20.12.0/node-v20.12.0-linux-x64.tar.gz -O
    # tar -xf node-v20.12.0-linux-x64.tar.gz
    # mv node-v20.12.0-linux-x64 ./bin/node
    # PATH=./bin/node/bin:$PATH
fi

node ./boot/entrypoint.js
