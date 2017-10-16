#!/bin/bash

if [ $UID != 0 ]; then
    echo "Run as root"
    exit
fi

docker-compose up -d
docker exec -it secret-santa /bin/bash
docker-compose down
