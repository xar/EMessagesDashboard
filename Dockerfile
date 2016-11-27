FROM node:latest

RUN mkdir -p /src/app

RUN npm install nodemon -g

WORKDIR /src/app
ADD package.json /src/app/package.json

RUN npm install

ADD . /src/app

EXPOSE 3000

WORKDIR /src/app
CMD npm run start
