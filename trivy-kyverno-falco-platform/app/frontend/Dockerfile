FROM node:18-alpine
WORKDIR /app
RUN npm install express axios --production
COPY . .
USER node
EXPOSE 3002
CMD ["node", "index.js"]