FROM node:23-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@latest

RUN npm install

RUN npm cache clean --force

RUN npm install -g next

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]