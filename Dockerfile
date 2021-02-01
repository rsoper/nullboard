FROM node:14
WORKDIR /usr/src/app
COPY ./app ./
RUN npm install
EXPOSE 80
CMD ["node", "app.js"]