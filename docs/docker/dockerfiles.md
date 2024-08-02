---
title: "Dockerfiles"
---

## Apache PHP TLS SSL

```sh
# Archivos
Dockerfile
docker.csr # Solicitud de firma de certificado
docker.key # Clave privada del certificado
no-subir.txt # Fichero ignorado por .dockerignore
.dockerignore
/web # Directorio con los ficheros de la página web
```

- Dockerfile

  ```sh
  FROM centos:7

  ENV a a

  RUN \
  yum -y install \
  httpd \
  php \
  php-cli \
  php-common \
  mod_ssl \
  openssl

  RUN echo "<?php phpinfo(); ?>" > /var/www/html/hola.php

  COPY docker.key /docker.key
  COPY docker.csr /docker.csr
  COPY ssl.conf /etc/httpd/conf.d/default.conf
  COPY startbootstrap-grayscale-gh-pages /var/www/html

  EXPOSE 443

  CMD apachectl -DFOREGROUND
  ```

- dockerignore

  ```sh
  no-subir.txt
  ```

- SSL Conf

  ```conf
  <VirtualHost *:443>
  ServerName localhost
  DocumentRoot /var/www/html
  SSLEngine on
  SSLCertificateFile /docker.csr
  SSLCertificateKeyFile /docker.key
  </VirtualHost>
  ```

- docker.csr

  ```sh
  # Tu solicitud de certificado .csr
  ```

- docker.key

  ```sh
  # Tu clave privada del certificado
  ```

## Crear usuario

```sh
FROM centos

ENV prueba 1234

RUN useradd ricardo
```

## Buenas prácticas

```sh
FROM nginx

ENV dir /usr/share/nginx/html/test.txt

RUN \
  echo "1" >> $dir && \
  echo "2" >> $dir && \
  echo "3" >> $dir
```

## CentOS systemd

```sh
FROM centos:latest
ENV container docker
RUN (cd /lib/systemd/system/sysinit.target.wants/; for i in *; do [ $i == \
systemd-tmpfiles-setup.service ] || rm -f $i; done); \
rm -f /lib/systemd/system/multi-user.target.wants/*;\
rm -f /etc/systemd/system/*.wants/*;\
rm -f /lib/systemd/system/local-fs.target.wants/*; \
rm -f /lib/systemd/system/sockets.target.wants/*udev*; \
rm -f /lib/systemd/system/sockets.target.wants/*initctl*; \
rm -f /lib/systemd/system/basic.target.wants/*;\
rm -f /lib/systemd/system/anaconda.target.wants/*;
VOLUME [ "/sys/fs/cgroup" ]
CMD ["/usr/sbin/init"]
```

## Dockerfile FULL

```sh
# Archivos
Dockerfile
/web # Tus ficheros de la página web
```

```sh
FROM nginx

RUN useradd ruperto

COPY startbootstrap /usr/share/nginx/html

ENV archivo docker

WORKDIR /usr/share/neginx/html

RUN echo "$archivo" > /usr/share/nginx/html/env.html

EXPOSE 90

LABEL version=1

USER ruperto

RUN echo "Yo soy $(whoami)" > /tmp/yo.html

USER root

RUN cp /tmp/yo.html /usr/share/nginx/html/docker.html

VOLUME /var/log/nginx

CMD nginx -g 'daemon off;'
```

## Dockerfile FULL 2

```sh
# Archivos
Dockerfile
run.sh
/web
```

- Dockerfile

  ```sh
  FROM ubuntu:latest

  LABEL version=1.0
  LABEL descripcion="This is an apache image"
  LABEL vendor=yo

  RUN apt-get update

  RUN apt-get install apache2 -y

  WORKDIR /var/www/html

  COPY bootstrap .

  ENV contenido prueba

  RUN echo "$contenido" > /var/www/html/prueba.html

  RUN echo "$(whoami)" > /var/www/html/user1.html

  RUN useradd ruperto

  RUN chown ruperto /mnt -R

  USER ruperto

  RUN echo "$(whoami)" > /mnt/user2.html

  USER root

  RUN cp /mnt/user2.html /var/www/html/

  COPY run.sh /run.sh

  CMD sh /run.sh

  ```

- run.sh

  ```sh
  #!/bin/bash

  echo "Iniciando container..."
  echo "INICIADO!!" > /var/www/html/ini.html
  apachectl -DFOREGROUND
  ```

## Escenarios múltiples

```sh
FROM maven:latest as builder

COPY app /app # app Java

RUN cd /app && mvn package

FROM openjdk:8-alpine

COPY --from=builder /app/target/jb-hello-world-maven-0.1.0.jar /opt/app.jar

CMD java -jar /opt/app.jar
```

```sh
FROM centos as test

RUN fallocate -l 10M /opt/file1

RUN fallocate -l 10M /opt/file2

RUN fallocate -l 10M /opt/file3

FROM alpine

COPY --from=test /opt/file3 /opt/myfile
```

## NGINX PHP FPM

```sh
# Archivos/directorios
/bin
    start.sh
/conf
    nginx.conf
    nginx.repo
Dockerfile
index.php
```

- start.sh

```sh
#!/bin/bash

# Starts php process in background

/usr/sbin/php-fpm -c /etc/php/fpm

# Starts nginx daemon

nginx -g 'daemon off;'
```

- nginx.conf

```sh
server {
  listen       80;
  server_name  localhost;
  root         /var/www/html;
  index        index.php;
  access_log   /var/log/nginx/nginx-access.log;
  error_log    /var/log/nginx/nginx-error.log;

   gzip on;
   gzip_static on;
   gzip_disable "msie6";
   gzip_http_version 1.1;
   gzip_vary on;
   gzip_comp_level 6;
   gzip_proxied any;
   gzip_buffers 16 8k;
   gzip_types
     text/plain
     text/css
     text/x-js
     text/javascript
     application/json
     application/x-javascript
     application/javascript;


  location = /favicon.ico {
    log_not_found off;
    access_log off;
  }

  location = /robots.txt {
    allow all;
    log_not_found off;
    access_log off;
  }

  location / {

    try_files $uri $uri/ /index.php?$args;

  }

  location ~ \.php$ {

    try_files $uri =404;
    include /etc/nginx/fastcgi_params;
    fastcgi_pass 127.0.0.1:9000;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    fastcgi_param PATH_INFO $fastcgi_script_name;
    fastcgi_intercept_errors on;

  }
}
```

- nginx.repo

```sh
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1
```

- Dockerfile

```sh
FROM centos:7

COPY ./conf/nginx.repo /etc/yum.repos.d/nginx.repo

RUN                                                                          \
  yum -y install nginx --enablerepo=nginx                                 && \
  yum -y install https://centos7.iuscommunity.org/ius-release.rpm         && \
  yum -y install                                                             \
    php71u-fpm                                                               \
    php71u-cli                                                               \
    php71u-mysqlnd                                                           \
    php71u-soap                                                              \
    php71u-xml                                                               \
    php71u-zip                                                               \
    php71u-json                                                              \
    php71u-mcrypt                                                            \
    php71u-mbstring                                                          \
    php71u-zip                                                               \
    php71u-gd                                                                \
     --enablerepo=ius && yum clean all

EXPOSE 80 443

VOLUME /var/www/html /var/log/nginx /var/log/php-fpm /var/lib/php-fpm

COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./bin/start.sh /start.sh

COPY index.php /var/www/html/index.php

RUN chmod +x /start.sh

CMD /start.sh
```

- index.php

```sh
<?php phpinfo(); ?>
```
