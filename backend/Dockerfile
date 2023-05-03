FROM alpine:latest

WORKDIR .

RUN echo "fs.inotify.max_user_watches=524288" >> /etc/sysctl.conf &&  sysctl -p

RUN echo "fs.inotify.max_user_instances=1024" >> /etc/sysctl.conf &&  sysctl -p


RUN apk update && apk add nodejs npm

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm","start"]
