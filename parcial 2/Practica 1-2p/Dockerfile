FROM node
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 2600
ENTRYPOINT ["npm","start"]