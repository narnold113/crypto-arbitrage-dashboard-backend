FROM node:17-bullseye-slim

ENV PG_HOST=localhost \
    PG_USER=nicolas \
    PG_PASSWORD=nicolas113112 \
    PG_PORT=5432 \
    PORT=5000

COPY . ./

CMD ["node", "./src/server.js"]