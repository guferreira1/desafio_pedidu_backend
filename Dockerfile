FROM node:alpine

WORKDIR /usr/server

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]