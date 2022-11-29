FROM node:latest

WORKDIR /backend

COPY package*.json ./

RUN npm install --force

COPY . .

EXPOSE 5000

CMD ["npm", "start"]