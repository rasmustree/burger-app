# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.8.0
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the rest of the app into the container
COPY . .

# Expose the port
EXPOSE 8078

# Start the application
CMD ["node", "kitchenview.js"]
