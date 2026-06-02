FROM node:26@sha256:e3ffe0cbaeebdcddbfe1ee7bca9b564a92863a8386d5b99a3d72677b3667b61d
RUN mkdir -p /app/build
WORKDIR /app
COPY ./package.json ./package-lock.json /app/
RUN npm install && npm cache clean --force

COPY . /app

CMD tail -f /dev/null
