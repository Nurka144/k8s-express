FROM node:17-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001

CMD npm run start





