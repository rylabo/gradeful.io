FROM postgres:15.4

# Copy your custom initialization script into the container
COPY init-postgres-keycloak.sh /docker-entrypoint-initdb.d/

# Set execute permissions for the script
RUN chmod +x /docker-entrypoint-initdb.d/init-postgres-keycloak.sh 

# Run the init script
# ENTRYPOINT [ "/docker-entrypoint-initdb.d/entrypoint.sh" ]