# Use Node.js base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose the development port
EXPOSE 3000

# Run the development server
CMD ["npm", "run", "dev"]
