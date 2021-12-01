#!/usr/bin/bash

echo "cloudfront deploy"
aws s3 cp index.html s3://junhyung-test-web --acl public-read