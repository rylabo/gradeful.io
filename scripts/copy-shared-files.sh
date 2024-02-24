#!/bin/bash

# List of microservice directories
MICROSERVICES=("rest-proxy" "students" "groups" "classes" "attendance" "outcomes" "people")

# Path to shared files
SHARED_FILES="shared/*"

# Loop through microservices and copy shared files
for microservice in "${MICROSERVICES[@]}"; do
  echo "Copying shared files to $microservice"
  cp -R $SHARED_FILES "dist/apps/$microservice"
done