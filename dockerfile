FROM node:14-alpine

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9001

CMD npm start