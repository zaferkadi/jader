# base image
FROM node:carbon as builder

# Create app directory
WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn

# Bundle app source
COPY . .

RUN yarn build

# base image
FROM nginx:alpine as app

WORKDIR /usr/share/nginx/html

COPY --from=builder /usr/src/app/build ./
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
