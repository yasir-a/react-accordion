FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN yarn install

COPY . .

EXPOSE 4173

RUN yarn run build

CMD ["yarn", "run", "dev"]