#!/bin/bash

# Generate a random code verifier (43+ characters)
code_verifier=$(openssl rand -base64 32 | tr -d '+/' | head -c 43)

# Create a code challenge using SHA-256 and Base64-URL encoding
code_challenge=$(echo -n "$code_verifier" | openssl dgst -sha256 -binary | openssl enc -base64 | tr '+/' '-_' | tr -d '=')

# Print the code verifier, code challenge, and response
echo "Code Verifier: $code_verifier"
echo "Code Challenge: $code_challenge"

# Replace with your OAuth 2.0 authorization flow logic here
