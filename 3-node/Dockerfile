FROM node:9-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:9-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 8080

CMD ["npm", "start"]