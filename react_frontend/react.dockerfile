FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install -g npm@latest
RUN npm install
RUN npm install -g vite@4.x

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html
