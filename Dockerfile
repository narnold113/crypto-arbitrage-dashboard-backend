FROM node:17-bullseye-slim

COPY . ./

CMD ["node", "./src/server.js"]