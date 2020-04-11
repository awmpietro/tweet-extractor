FROM node:10.15-alpine

EXPOSE 3000 4000

RUN apk add --no-cache tini

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

ENTRYPOINT ["tini", "--"]

ENV API_KEY=
ENV API_SECRET=
ENV ACCESS_TOKEN=
ENV ACCESS_TOKEN_SECRET=
ENV REACT_APP_API_URL=http://localhost:4000/api

CMD ["npm", "start"]