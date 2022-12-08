FROM node:16.14.0-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD npm start
