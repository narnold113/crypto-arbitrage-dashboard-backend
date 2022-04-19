FROM node:17-bullseye-slim

COPY . ./

RUN npm install

CMD ["node", "./src/server.js"]