#Step 1
FROM node:19-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build:prod

#Step 2
FROM nginx:1.21.0-alpine as production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]