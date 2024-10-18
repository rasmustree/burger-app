# syntax=docker/dockerfile:1

# Use an official Node.js image
ARG NODE_VERSION=22.8.0
FROM node:${NODE_VERSION}-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies (using npm ci)
RUN npm ci --omit=dev

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that server.js will listen on (port 3000)
EXPOSE 3000

# Temporarily switch to root to install curl
USER root
RUN apk add --no-cache curl

# Switch back to the node user to run the application
USER node

# Run the application
CMD ["node", "server.js"]
