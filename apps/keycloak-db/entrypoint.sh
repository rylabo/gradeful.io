#!/bin/bash

# Function to check if PostgreSQL is ready
wait_for_postgres() {
    local max_attempts=10
    local interval=5
    local attempt=0

    until pg_isready -h localhost -p 5432 -U postgres -d postgres || [ $attempt -eq $max_attempts ]; do
        echo "Waiting for PostgreSQL to become ready..."
        sleep $interval
        attempt=$((attempt+1))
    done
}

# Run the PostgreSQL readiness check function
wait_for_postgres

# Execute the custom initialization script
/docker-entrypoint-initdb.d/init-postgres-keycloak.sh
