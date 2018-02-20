#!/bin/bash

source ./install.config.sh

for DESTINATION in "${POSSIBLE_DESTINATIONS[@]}"
do
    if [ -d $DESTINATION ]
    then
        cp -r $THEME_ROOT_DIR $DESTINATION/$DIR_NAME
    fi
done