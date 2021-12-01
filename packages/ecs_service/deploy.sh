#!/usr/bin/bash

echo -n "ecs build!!"
aws ecs register-task-definition --cli-input-json file://task.json
aws ecs update-service --cluster http-ecs-cluster --service http-ecs-service --task-definition http-server