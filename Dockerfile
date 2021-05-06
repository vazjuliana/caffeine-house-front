FROM nginx

#RUN npm install -g npm@latest
#RUN npm install

WORKDIR /usr/share/nginx/html

CMD ["tail", "-f", "/dev/null"]