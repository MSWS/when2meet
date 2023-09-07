FROM node:20-slim

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install --only-production

COPY . .

USER node
CMD ["npm", "run", "start"]