FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9000
COPY entrypoint.sh ./
ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]