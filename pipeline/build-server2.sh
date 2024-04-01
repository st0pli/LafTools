#!/bin/bash
set +e
cd $LAFTOOLS_ROOT/modules/server2
tar -czvf docker-dist.tar.gz .
ls -ahlrt
pwd