# bigger image faster though ngl 4s on 0.1 cpu

FROM ghcr.io/puppeteer/puppeteer:latest

# Using the default Puppeteer user for security
USER pptruser

# Set environment variables to reduce caching overhead
ENV XDG_CONFIG_HOME=/tmp/.chromium
ENV XDG_CACHE_HOME=/tmp/.chromium

# Set working directory
WORKDIR /app

# Copy application files
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci ----omit=dev

# Copy the rest of the app files
COPY . .
# Expose the application port
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]



# smaller docker image slower though ngl  8s on 0.1 cpu 512ram


# FROM node:18-alpine


# RUN apk add \
#     chromium \
#     libstdc++ \
#     nss \
#     freetype \
#     harfbuzz \
#     ca-certificates \
#     ttf-freefont


# ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true


# WORKDIR /app

# COPY package*.json ./



# RUN npm install

# COPY . .



# EXPOSE 3000



# CMD ["npm", "start"]
