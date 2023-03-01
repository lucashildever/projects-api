FROM node:16.17.1

WORKDIR /projects-api/

COPY ./ ./

RUN npm install

CMD npm start