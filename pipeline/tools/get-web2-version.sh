#!/bin/bash
cd $LAFTOOLS_ROOT
node -pe 'require("./package.json").version'