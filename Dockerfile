# Stage 0, "build-stage", based on Node.js, to build and compile the frontend

FROM node:11.8.0 as build-stage
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN npm run build-prod -- --output-path=./dist/ --configuration $configuration


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
#Copy ci-dashboard-dist
COPY --from=build-stage /app/dist /usr/share/nginx/html
#Copy default nginx configuration
<<<<<<< HEAD
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
=======
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
>>>>>>> 45b072102d166b3ba1648d85936e2ba2354dc250
