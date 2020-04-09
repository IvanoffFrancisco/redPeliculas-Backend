FROM node:12

COPY . /app

WORKDIR /app

RUN npm install

CMD ["npm","start"]