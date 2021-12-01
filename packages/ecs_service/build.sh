#!/usr/bin/bash

echo -n "ecs build!!"
docker build -t jhlee5391/http-server:latest .
docker push jhlee5391/http-server:latest