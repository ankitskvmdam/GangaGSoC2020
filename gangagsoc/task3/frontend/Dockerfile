FROM node:10.16.3-alpine as node-build-env
LABEL maintainer="Ank"
WORKDIR /app
ADD package.json /app
ADD package-lock.json /app
RUN cd /app && npm install
ADD . ./
RUN npm run build

FROM nginx:alpine
LABEL maintainer="Ank"
COPY --from=node-build-env /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
