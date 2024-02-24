#!/bin/bash

# List of microservice directories
MICROSERVICES=("rest-proxy" "students" "groups" "classes" "attendance" "outcomes" "people")

# Loop through microservices and copy shared files
for microservice in "${MICROSERVICES[@]}"; do
  echo "Copying Dockerfiles for $microservice"
  cp "apps/$microservice/Dockerfile" "dist/apps/$microservice/."
done