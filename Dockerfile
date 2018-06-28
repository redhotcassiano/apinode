FROM ubuntu
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN apt update apt install nvm apt install git 
COPY . /usr/src/app
CMD [ “npm”, “start” ]