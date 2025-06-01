FROM node:latest
WORKDIR /link_up_app
COPY package.json /link_up_app
RUN npm install
COPY . /link_up_app

EXPOSE 3000