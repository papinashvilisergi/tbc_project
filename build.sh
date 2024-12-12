#!/bin/bash

# Take down the Docker environment
docker compose down --remove-orphans --volumes

# Build and start the Docker containers
docker compose up -d --build

# List all Docker containers
docker ps -a

# Logs for each service
docker compose logs django_backend
docker compose logs react_frontend
docker compose logs postgres
