FROM node:18-alpine
WORKDIR /backend
COPY . .
RUN yarn install --production
CMD ["node", "/backend/index.js"]