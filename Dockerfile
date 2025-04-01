# Use the official Node.js image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the Next.js app
RUN npm run build

# Multi-stage build for a smaller final image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the built app from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Set environment variable to change Next.js port
ENV PORT=3030

# Expose the desired port
EXPOSE 3030

# Start the app in production mode
CMD ["npm", "run", "start"]
