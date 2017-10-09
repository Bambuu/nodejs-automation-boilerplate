#!/usr/bin/env bash

# CHANGE IP HERE!!!
PRODUCTION_HOST=111.111.111.111
STAGING_HOST=222.222.222.222

# install rsync, and trust the host
function prepareRsync {
	sudo apt -qq install --yes rsync
	sudo ssh-keyscan ${PRODUCTION_HOST} >> ~/.ssh/known_hosts
	sudo ssh-keyscan ${STAGING_HOST} >> ~/.ssh/known_hosts
}

if [ "${CIRCLE_BRANCH}" == "develop" ]; then
	echo "Deploying to develop"
	prepareRsync
	rsync --recursive --verbose --update --omit-dir-times ./build/* circlecibot@${STAGING_HOST}:/var/www/frontend --delete
elif [ "${CIRCLE_BRANCH}" == "master" ]; then
	echo "Deploying to master"
	prepareRsync
	rsync --recursive --verbose --update --omit-dir-times ./build/* circlecibot@${PRODUCTION_HOST}:/var/www/frontend --delete
else
	echo "Not deploying, because on branch ${CIRCLE_BRANCH}"
fi
