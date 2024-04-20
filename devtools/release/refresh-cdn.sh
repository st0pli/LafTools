#!/bin/bash
export TXCOSID=$1
export TXCOSKEY=$2
if [ -z "$TXCOSID" ]; then
  echo "TXCOSID is required"
  exit 1
fi
if [ -z "$TXCOSKEY" ]; then
  echo "TXCOSKEY is required"
  exit 1
fi
npm i -S -D --force
node ./refresh-cdn-cache.js
node ./push-url-cache.js