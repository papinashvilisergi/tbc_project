#!/bin/bash

docker compose down --remove-orphans --volumes
docker compose up -d --build
docker ps -a
docker compose logs django_backend
docker compose logs react_frontend
docker compose logs postgres


