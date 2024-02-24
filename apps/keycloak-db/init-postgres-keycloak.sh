#!/bin/bash

echo "Checking for Keycloak DB..."
psql -U dev -tc "SELECT 1 FROM pg_database WHERE datname = 'keycloak'" \
| grep -q 1

if [ $? -ne 0 ]; then
  echo "Initializing Keycloak DB for first time use."
  psql -U dev -c "CREATE DATABASE keycloak"
else
  echo "Keycloak database found."  
fi

echo "Setting up Keycloak User $KC_DB_USERNAME"
psql -U dev -c "CREATE USER $KC_DB_USERNAME WITH PASSWORD '$KC_DB_PASSWORD'"

echo "Granting privileges to $KC_DB_USERNAME User on Keycloak database"
psql -U dev -d keycloak <<EOF
-- Grant necessary privileges to the '$KC_DB_USERNAME' user on the 'keycloak' database
GRANT ALL PRIVILEGES ON DATABASE keycloak TO $KC_DB_USERNAME;
EOF
