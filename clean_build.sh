#!/bin/bash

#stop and remove all existing containers
docker-compose down -v

# Stop and remove all containers
docker stop $(docker ps -q)
docker rm $(docker ps -aq)
docker rmi $(docker images -q) --force
docker volume prune -f
docker network prune -f

# stop all containers
docker stop $(docker ps -aq)

# remove all containers
docker rm $(docker ps -aq)

# remove all images
docker rmi $(docker images -q)

# remove all volumes
docker volume rm $(docker volume ls -q)

# remove all networks
docker network rm $(docker network ls -q)

# remove evething(including containers, images, volumes and networks) that are not in use
docker system prune -a --volumes

# clearing the node_modules and package-lock.json
sudo rm -rf /react_frontend/node_modules /react_frontend/package-lock.json

npm cache clean --force && rm -rf node_modules && rm -rf /root/tbc_project/react_frontend/node_modules
