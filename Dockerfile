FROM node:16-slim

WORKDIR /home/app

COPY package*.json /home/app/

RUN npm install

ADD . /home/app

RUN chmod +x ./entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]
