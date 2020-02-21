FROM node:12
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
ARG BACKEND_URL
ENV REACT_APP_BACKEND_URL=${BACKEND_URL}
COPY . .
RUN npm run build

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=0 /usr/src/app/build /usr/share/nginx/html
COPY --from=0 /usr/src/app/nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
