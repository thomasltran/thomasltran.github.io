# Use an official Node.js image as the base image for building
FROM node:latest AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the SvelteKit application
RUN yarn build

# Use a lightweight web server image to serve the static files
FROM nginx:alpine AS runner

# Copy the built files from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# The default port for the NGINX server
EXPOSE 80

# Start NGINX to serve the static files
CMD ["nginx", "-g", "daemon off;"]
