FROM node:18-alpine
WORKDIR /app
RUN npm install express --production && rm -rf /root/.npm
COPY . .
USER node
EXPOSE 3001
HEALTHCHECK --interval=30s CMD wget --no-verbose --tries=1 --spider http://localhost:3001/verify || exit 1
CMD ["node", "index.js"]