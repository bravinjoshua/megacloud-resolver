FROM node:20-alpine


RUN apk add \
    chromium \
    libstdc++ \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont


ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true


WORKDIR /app

COPY package*.json ./



RUN npm install

COPY . .



EXPOSE 3000



CMD ["npm", "start"]
