# Installs Node.js image
FROM node:16.13.1-alpine3.14

WORKDIR /app/src

COPY ["package.json", "package-lock.json", ".env", "./"]

RUN npm install

CMD npm run dev