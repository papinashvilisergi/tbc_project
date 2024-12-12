# Stage 1: Build the React application
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install -g npm@latest
RUN npm install
RUN npm install -g vite@4.x

COPY . .

RUN npm run build

# Stage 2: Serve the production build using Nginx
FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
