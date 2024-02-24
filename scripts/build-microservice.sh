#!/bin/bash

# List of microservices passed as arguments
MICROSERVICES=()
NO_CACHE_FLAG=false

# Parse command-line arguments
for arg in "$@"; do
  if [ "$arg" == "--no-cache" ]; then
    NO_CACHE_FLAG=true
  else
    MICROSERVICES+=("$arg")
  fi
done

# Path to shared files
SHARED_FILES="shared/*"

if [ ${#MICROSERVICES[@]} -eq 0 ]; then
  echo "Microservice names not provided."
  exit 1
fi

for MICROSERVICE in "${MICROSERVICES[@]}"; do
  echo "Building microservice $MICROSERVICE"

  # Build microservice
  echo "Compiling $MICROSERVICE sources"
  nest build "$MICROSERVICE"

  # Copy shared files
  echo "Copying shared files to $MICROSERVICE build directory"
  cp -R $SHARED_FILES "dist/apps/$MICROSERVICE"

  # Copy npm package files
  echo "Copying package files to $MICROSERVICE build directory"
  cp package.json package-lock.json "dist/apps/$MICROSERVICE"

  # Copy Dockerfile
  echo "Copying Dockerfile to $MICROSERVICE build directory"
  cp "apps/$MICROSERVICE/Dockerfile" "dist/apps/$MICROSERVICE/."


  # Build Docker image with or without --no-cache
  echo "Building $MICROSERVICE Docker image"
  if [ "$NO_CACHE_FLAG" = true ]; then
    docker compose build --no-cache "$MICROSERVICE"
  else
    docker compose build "$MICROSERVICE"
  fi
done
