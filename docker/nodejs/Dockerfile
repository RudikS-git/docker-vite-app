FROM node:16-alpine3.15

ARG APP_ENV
ARG DOCKER_NODE_PORT
ENV APP_ENV $APP_ENV
ENV DOCKER_NODE_PORT $DOCKER_NODE_PORT

RUN apk add jq

COPY entrypoint.sh entrypoint.sh

WORKDIR /app

EXPOSE ${DOCKER_NODE_PORT}

ENTRYPOINT /bin/sh /entrypoint.sh ${APP_ENV}
