FROM node:5.0

RUN mkdir -p /usr/src/app/sprout
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install

WORKDIR /usr/src/app/sprout
RUN npm install

WORKDIR /usr/src/app

EXPOSE 3420
