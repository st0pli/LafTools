#!/bin/bash
npm run build
export NODE_ENV=production
cross-env NODE_ENV=production node dist/server.js