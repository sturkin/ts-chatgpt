FROM node:20-alpine
RUN apk add make
RUN mkdir -p /usr/src/app
WORKDIR /src/app
#RUN npm i
COPY ../ ./