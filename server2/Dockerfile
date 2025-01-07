# Dockerfile for server2 (File uploader client)
FROM node:16
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3002
CMD ["npm", "start"]
