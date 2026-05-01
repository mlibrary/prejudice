FROM node:25@sha256:c69f4e0640e5b065f2694579793e4309f1e0e49868b0f2fea29c44d9c0dc2caf
RUN mkdir -p /app/build
WORKDIR /app
COPY ./package.json ./package-lock.json /app/
RUN npm install && npm cache clean --force

COPY . /app

CMD tail -f /dev/null
