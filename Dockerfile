ARG arch=
FROM ${arch}nginx:1.18.0-alpine
COPY ./app /usr/share/nginx/html