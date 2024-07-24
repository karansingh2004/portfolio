FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# RUN npm run deploy

EXPOSE 3030

CMD ["npm", "run", "start"]
# CMD ["npm", "run", "deploy"]
