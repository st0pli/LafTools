#!/bin/bash
set -e
version=`jq '.version' $LAFTOOLS_ROOT/package.json -r` 
tagName=$version
git tag $tagName
echo "ok, tag it"
read -p "Do you want to push the tag $tagName to the remote repository? (y/n)" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # git push origin $tagName
    echo "push now"
fi