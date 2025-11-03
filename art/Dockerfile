FROM node:24.4.1-alpine3.22

ENV IS_IN_DOCKER=1

RUN npm install -g npm@11.6.0

WORKDIR /app/

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN npm run build
