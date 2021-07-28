# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app
RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent
RUN npm run build

CMD ["npm", "start"]