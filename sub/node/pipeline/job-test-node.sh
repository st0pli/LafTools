#!/bin/bash

# shutdown sub process when exit


captureDir=$CODEGEN_GO_ROOT/sub/node/time-consumer
rm -rf $captureDir 

cd $(dirname $0)
ts-node -T $CODEGEN_GO_ROOT/sub/node/src/index.ts  --max-old-space-size=20  --max-old-space-size --autoExitSeconds=20 --captureIn=$captureDir & 

trap 'kill $(jobs -p)' EXIT
sleep 3
echo "{}" > $captureDir/2.job
read -p ""