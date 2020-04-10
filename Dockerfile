FROM node:10.15-alpine

EXPOSE 3000 4000

RUN apk add --no-cache tini

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

ENTRYPOINT ["tini", "--"]

CMD ["npm", "start"]