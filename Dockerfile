# Use a Node.js base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Build the application using Webpack
RUN npm run build

# Expose the port on which your application listens
EXPOSE $JSBUNDLE_HOST_PORT

# Start the application
CMD [ "npm", "start" ]
