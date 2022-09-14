FROM node:18-alpine3.15 as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package*.json .
RUN npm install
COPY . .
RUN ng build

FROM nginx as runtime
COPY --from=build /app/dist/actuator-ui /usr/share/nginx/html