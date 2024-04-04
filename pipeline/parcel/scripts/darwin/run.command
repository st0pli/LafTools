#!/bin/bash

export HOSTNAME=127.0.0.1
export PORT=39899




if [ ! -f ./bin/node/bin/node ]; then
    echo "[I] skip downloading runtime"
else
    curl https://cdn.npmmirror.com/binaries/node/v20.12.0/node-v20.12.0-linux-x64.tar.gz -O
    tar -xf node-v20.12.0-linux-x64.tar.gz
    mv node-v20.12.0-linux-x64 ./bin/node
    PATH=./bin/node/bin:$PATH
fi

node ./core/server.js
