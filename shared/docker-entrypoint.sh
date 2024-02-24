#!/bin/sh

# Abort on any error (including if wait-for-it fails).
set -e

# Wait for broker
echo "Waiting on broker"
./wait-for-it.sh "$MESSAGE_BROKER"

# Wait for the dependency.
if [ -n "$DEPENDENT_ON" ]; then
  ./wait-for-it.sh "$DEPENDENT_ON:${DEPENDENCY_PORT:-3000}"
fi

# Run the main container command.
exec "$@"
