FROM node:lastest
WORKDIR /usr/src/graphqlApp
COPY package.json /usr/src/graphqlApp
RUN npm install
COPY . /usr/src/graphqlApp
EXPOSE 4000
CMD npm start
