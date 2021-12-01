#!/usr/bin/bash

echo -n "lambda deploy"
aws lambda update-function-code --function-name lambda-svc --zip-file fileb://index.zip