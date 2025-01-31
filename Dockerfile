FROM ghcr.io/puppeteer/puppeteer:latest

# Using the default Puppeteer user for security
USER root

# Set environment variables to reduce caching overhead
ENV XDG_CONFIG_HOME=/tmp/.chromium
ENV XDG_CACHE_HOME=/tmp/.chromium

# Set working directory
WORKDIR /app

# Copy application files
COPY package.json package-lock.json ./



# Copy the rest of the app files
COPY . .

# Expose the application port
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
