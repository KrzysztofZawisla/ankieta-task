FROM node:latest AS builder
WORKDIR /home/app
COPY . /home/app
RUN yarn && yarn run build
FROM nginx:latest
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
COPY --from=builder /home/app/nginx.conf /etc/nginx/conf.d/default.conf 
COPY --from=builder /home/app/dist /usr/share/nginx/html
