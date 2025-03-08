# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy remaining project files
COPY . .

# Expose port for the server
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]

