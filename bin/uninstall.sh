#!/bin/bash

source ./install.config.sh

for DESTINATION in "${POSSIBLE_DESTINATIONS[@]}"
do
    rm -rf $DESTINATION/$DIR_NAME
done