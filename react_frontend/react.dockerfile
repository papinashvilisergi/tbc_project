# Use Node.js 16 as base image (since Vite requires Node.js 16)
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY ./package*.json /app/

# Install dependencies and add structured-clone polyfill
RUN npm cache clean --force && rm -rf node_modules && npm install

# Ensure 'structured-clone' polyfill is installed
#RUN npm install structured-clone

# Ensure the 'src' directory exists and create an index.js file if not present
RUN mkdir -p /app/src && echo "import 'structured-clone';" > /app/src/index.js

# Copy the rest of the React app into the container
COPY ./ /app

# Expose the port that Vite uses
EXPOSE 8080

# Set the default command to start the React development server
CMD ["npm", "run", "dev", "--", "--port", "8080"]
