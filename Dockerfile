# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage

# Set working directory as /app, create the directory and all preceding steps will be inside it
WORKDIR /app

# Copy all files that start with package and end with .json to the app folder
COPY package*.json /app/

# Install all dependencies
RUN npm install

# Copy all source code to /app
COPY ./ /app/

# build React app
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with NGINX
FROM nginx:1.15

COPY --from=build-stage /app/dist/ /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf