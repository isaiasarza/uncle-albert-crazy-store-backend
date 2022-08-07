FROM --platform=linux/amd64 node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY . .

#COPY /usr/src/app/dist ./dist

CMD ["node", "dist/main"]