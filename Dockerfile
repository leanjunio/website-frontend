FROM node AS build
WORKDIR /app
COPY . .
RUN yarn build

FROM nginx:stable