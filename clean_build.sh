#!/bin/bash

# Stop and remove only the containers related to this project
docker-compose down -v --remove-orphans

# Remove images, containers, and volumes only for this project
docker images | grep 'tbc_project' | awk '{print $3}' | xargs docker rmi -f
docker ps -a | grep 'tbc_project' | awk '{print $1}' | xargs docker rm -f

# Remove only named volumes related to this project
docker volume rm tbc_project_postgres_data
docker volume prune -f

# Remove unused Docker system files (optional but useful)
docker system prune -a --volumes -f

# Clear the React node_modules and cache
sudo rm -rf /root/tbc_project/react_frontend/node_modules /root/tbc_project/react_frontend/package-lock.json
npm cache clean --force

# Run the build script (do not call clean_build.sh again to avoid infinite loops)
#./build.sh
