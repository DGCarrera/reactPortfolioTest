#!/bin/bash

rm -rf private-client

npm run build

pm2 start 'npm run start'
