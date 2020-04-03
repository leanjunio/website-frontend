# Build phase
FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Run phase - deploy to internal NGINX
FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html