# Dockerfile for server1 (File upload server)
FROM node:16
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
