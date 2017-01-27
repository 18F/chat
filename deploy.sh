#!/bin/bash

set -e
set -u

API=https://api.fr.cloud.gov
ORG=cloud-gov
SPACE=services

cf login -a $API -u $CF_USERNAME -p $CF_PASSWORD -o $ORG -s $SPACE
if cf app chat; then
  cf zero-downtime-push chat -f ./manifest.yml
else
  cf push -f ./manifest.yml
fi
