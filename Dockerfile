FROM node:22

WORKDIR /luaDev

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npm run dev"]