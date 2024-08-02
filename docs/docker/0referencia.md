---
title: "Referencia"
---

> Información sobre el servicio de Docker

`/var/run/docker.sock`

- **Correr HELLO-WORLD**

```sh
docker run hello-world
```

## IMAGENES

- **Ver las imagenes actuales en el host de docker**

```sh
docker images
```

- **Listar imagenes filtrando por atributos**

```sh
docker images -f dangling=true
```

- **Listar con filtrado y solo mostrar los ID**

```sh
docker images -f dangling=true -q
```

- **Eliminar todas las imagenes en el limbo**

```sh
docker images -f dangling=true -q | xargs docker rmi
```

- **Eliminar una imagen**

```sh
docker image rm -f "ID-imagen"
```

- **Eiminar varias imagenes**

```sh
docker rmi "nombre-imagen":"tag-imagen" ["nombre-imagen":"tag-imagen"]
```

### IMAGENES OFICIALES

- **Descargar una imagen oficial**

```sh
docker pull "nombre-imagen"
```

```sh
docker pull "nombre-imagen":"version"
```

### IMAGENES PERSONALIZADAS

- **Buenas practicas**

  - Efimeros (servicio destruible facilmente)
  - Un servicio por contenedor
  - Build context -" .dockerignore
  - Pocas capas
  - Multi linea \
  - Varios argumentos en una sola capa
  - No instalar paquetes innecesarios
  - Labels

- **Construir una imagen a través del Dockerfile (tag para poner nombre a la imagen al final para cojer el Dockerfile). Contenido del Dockerfile para apache+ubuntu**
  - **FROM** - S.O ó Imagen misma desde donde comenzar
  - **RUN** - Intrucciones que se pueden ejecutar en la terminal
  - **COPY/ADD** - Copiar archivos desde la maquina a la imagen. ADD se utiliza para utilizar una URL de origen, es decir, copia el contenido de esa URL al destino
  - **ENV** - Variables de entorno
  - **WORKDIR** - Directorios de trabajo
  - **EXPOSE** - Exponer puertos
  - **LABEL** - Etiquetas (metadata de la imagen, version, descripción, etc.)
  - **USER** - Usuario que ejecuta la tarea
  - **VOLUME** - Volúmenes
  - **CMD .dockerignore**

```sh
FROM ubuntu:latest

LABEL version=1.0
LABEL descripcion="This is an apache image"
LABEL vendor=yo

RUN apt-get update && apt-get upgrade && apt-get install apache2 -y

WORKDIR /var/www/html

COPY bootstrap .

ENV contenido prueba

RUN echo "$contenido" " /var/www/html/prueba.html

RUN echo "$(whoami)" " /var/www/html/user1.html

USER ricardo && chown ricardo /var/www/html

RUN echo "$(whoami)" " /var/www/html/user2.html

EXPOSE 81

CMD apachectl -DFOREGROUND
```

#### DOCKERFILE

- **Crear un script CMD para Dockerfile**

```bash
#!/bin/bash

echo "Iniciando container..."
apachectl -DFOREGROUND
```

### BUILD

- **Enviar datos al .dockerignore**

```sh
echo ""nombre-archivo-directorio" "" .dockerignore
```

- **Una vez creado el Dockerfile ejecutar por shell**

```sh
docker build --tag apache-centos[:"tag"]`
```

- **Build con un dockerfile con distinto nombre**

```sh
docker build -t test -f "nombre-dockerfile-personalizado"
```

- **Comprobar el historial de capas de una imagen**

```sh
docker history -H "nombre-imagen":"tag"
```

```sh
docker history -H "nombre-imagen":"tag" --no-trunc
```

## CONTAINERS

- **Correr un contenedor (-d en segundo plano)**

```sh
docker run -d "nombre-imagen"
```

```sh
docker run -d --name "nombre" "nombre-imagen"[:"tag"]
```

- **Correr un contenedor mapeando el puerto del PC anfitrion al contenedor**

`docker run -d --name "nombre" -p 80:80 "nombre-imagen"[:"tag"]`

- **Correr un contenedor mapeando el puerto del PC anfitrion al contenedor**

`docker run -d --restart unless-stopped redis --name "nombre" -p 80:80 "nombre-imagen"[:"tag"]`

- **Correr un contenedor agregando variables de entorno**

`docker run -dti -e "prueba1=4321" --name environment env`

- **Correr un contenedor y navegar a un directorio en el arranque**

```sh
docker run -d -w /"dir-name" "nombre-imagen"[:"tag"]
```

- **Ver los contenedores en ejecución**

`docker ps`

- **ver los contenedores en ejecución (incluidos los caidos)**

`docker ps -a`

- **ver los contenedores en ejecución (Solo ID)**

`docker ps -q`

- **Ver el último contenedor creado**

`docker ps -l`

- **Eliminar contenedores con --force y --volumes**

`docker rm -fv "nombre-contenedor" ["nombre-contenedor"...]`

- **Eliminar contenedores "exited"**

`docker rm -v $(docker ps -a -q -f status=exited)`

- **Eliminar todos los contenedores**

`docker ps -q | xargs docker rm -f`

`docker rm -fv $(docker ps -aq)`

- **Inspeccionar un contenedor**

`docker inspect "nombre-contenedor"|"ID-contenedor"`

- **Renombrar un contenedor en ejecución**

`dockerrename "nombre-actual" "nombre-nuevo"`

- **Detener un contenedor**

`docker stop "nombre-contenedor"|"ID-contenedor"`

- **Iniciar un contenedor**

`docker start "nombre-contenedor"|"ID-contenedor"`

- **Reiniciar (stop + start) un contenedor**

`docker restart "nombre-contenedor"|"ID-contenedor"`

- **Ingresar a la terminal de un contenedor -ti(terminal + interactivo)**

`docker exec -ti "nombre-contenedor"|"ID-contenedor" bash`

- **Ingresar a la terminal de un contenedor -u (usuario) -ti(terminal + interactivo)**

`docker exec -u "nombre-usuario" -ti "nombre-contenedor"|"ID-contenedor" bash`

- **Comprobar usuario y hostname dentro de la terminal del contenedor**

`whoami`
`hostname`

- **Ver el log de un contenedor en ejecución**

`docker logs -f "nombre-contenedor"`

- **Ver el consumo hardware de un contenedor**

`docker stats "nombre-contenedor"`

- **Limitar la RAM de un contenedor**

`docker run -d -m ""cantidad"[mb|gb]" --name "nombre-contenedor" "nombre-imagen"`

- **Limitar la CPU de un contenedor**

`docker run -d --cpuset-cpus "rango-cpus" --name "nombre-contenedor" "nombre-imagen"`

" rango-cpus = si tenemos 6 CPUs, 0-2 ocuparia: 0, 1 y 2; 3-5 ocuparía 3, 4 y 5

" Ver cantidad de CPUs `grep "model name" /proc/cpuinfo | wc -l`

- **Copiar archivos a un contenedor corriendo**

`docker cp "archivo|directorio-anfitrion nombre-contenedor:nombre-directorio"`

`docker cp "nombre-contenedor:nombre-directorio archivo|directorio-anfitrion"`

- **Guardar el estado de un contenedor en una imagen**

" El contenido dentro del volumen no se guarda con la imagen resultante de un commit

`docker commit "nombre-contenedor-run" "nombre-nueva-imagen"`

- **Sobreescribir el CMD de una imagen sin un Dockerfile**

" Pasar el cmd al final de la imagen al corer un contenedor con run (al final)

`docker run -d -p 8080:8080 centos python -m SimpleHTTPServer 8080`

- **Desctrucción de un contenedor automáticamente**

" --rm el contenedor es temporal y una vez que se salga de la sesión debe morir

`docker run --rm -ti --name "nombre-contenedor" "nombre-imagen" bash`

- **Comprobar el tamaño de los archivos/directorios de creación de la imagen**

`du -shc *`

## VOLUMES

- **Volúmenes de host - Caso práctico MySQL**

```
docker run -d --name my-db -p 3310:3306 -e "MYSQL_ROOT_PASSWORD=12345678" -v d:/1_RubenFGR/1_DevOps/1_Documentacion/Microservicios/Docker/Containers/mysql:/var/lib/mysql mariadb:latest
```

- **Volúmenes anónimos - Caso práctico MySQL**

```
docker run -d --name my-db -p 3310:3306 -e "MYSQL_ROOT_PASSWORD=12345678" -v /var/lib/mysql mariadb:latest
```

- **Crear un volumen**

```
docker volume create "nombre-volumen"
```

- **Eliminar un volumen**

```
docker volume rm "nombre-volumen"
```

- **Correr un contenedor asignando un volumen ya creado**

```
docker run -d --name my-db -p 3310:3306 -e "MYSQL_ROOT_PASSWORD=12345678" -v "my-create-volumen":/var/lib/mysql mariadb:latest
```

- **Ver volumes que no están referenciados por ningún contenedor**

```
docker volume ls -f dangling=true
```

- **Eliminar volumnes no referenciados**

```
docker volume ls -f dangling=true -q | xargs docker volume rm
```

- **Guardar datos de MongoDB**

```
docker run -d -p 27017:27017 -v "directorio/volume":/data/db mongo
```

- **Guardar datos de Jenkins**

```sh
docker run -d --name jenkins -p 8080:8080 -v /home/rubenfgr/jenkins/:/var/jenkins_home jenkins
# ver la contraseña
docker exec jenkins bash -c "cat /var/jenkins_home/secrets/initialAdminPassword"
```

- **Guardar logs de Nginx**

```sh
docker run -d --name my-nginx -p 80:80 -v /home/rubenfgr/nginx/:/var/log/nginx nginx
# Mostrar contenido de ficheros en tiempo real
tail -f nginx/error.log
```

- **Compartir volumen**

```sh
# crear un script
#!/bin/bash

while true; do
   echo ""p" $(date +%H:%M:%S) "/p"" "" /opt/index.html && \
   sleep 10
done

# Crear el Dockerfile
FROM centos

COPY start.sh /start.sh

RUN chmod +x /start.sh

CMD /start.sh

# Construir la imagen del generador
# Ejecutar los contenedores del generador y nginx con volumen compartido
docker run -v $PWD/common:/opt -d --name gen generador
docker run -d --name nginx -v $PWD/common:/usr/share/nginx/html -p 80:80 nginx
```

## DOCUMENT ROOT

- **Mostrar el directorio root**

```
docker info | grep -i root
```

- **Cambiar el Document Root de Docker**

`vim /lib/systemd/system/docker.service`

" Mover la carpeta de docker /var/lib/docker a "nueva-localización"

" Editar la linea **_ExecStart=/usr/bin/dockerd --data-root \"nueva-localización\"_**

" Notificar los cambios de un archivo de systemd

`systemctl daemon-reload`

" Reiniciar el servicio de docker para aplicar el cambio realizado

`systemctl restart docker`

## NETWORK

- **Mostrar la IP de docker**

  ```sh
  ip a | grep docker
  docker run -d nginx
  docker inspect "nombre-proceso-nginx"
  docker inspect "nombre-proceso-nginx" | less
  ```

- **Mostrar las redes de docker**

  ```sh
  docker network ls
  ```

- **Crear una nueva red**

  ```sh
  docker network create test-network
  # Personalizada
  docker network create -d bridge --subnet 172.20.10.0/24 --gateway 142.20.10.1 "nombre-red"
  ```

- **Crear un contenedor dentro de una red**

  ```sh
  docker run --network "docker-test-network" -d --name test3 "nombre-imagen"
  # Con IP personalizada
  docker run --network "docker-test-network" --ip "IP" -d --name test3 "nombre-imagen"
  ```

- **Hacer ping de un contenedor a otro en la misma subnet**

  ```sh
  docker exec "nombre-contenedor" bash -c "ping "IP""
  # Con nombre solo para redes creadas por nosotros, NO se puede desde "bridge" (por defecto)
  docker exec "nombre-contenedor" bash -c "ping "nombre-contenedor""
  ```

- **Conectar contenedores en distintas redes**

  ```sh
  docker network connect "nombre-red" "nombre-contenedor"
  ```

- **Desconectar contenedores en distintas redes**

  ```sh
  docker network disconnect "nombre-red" "nombre-contenedor"
  ```

- **Eliminar redes**

  ```sh
  # Se deben eliminar "antes" los contenedores de la misma
  docker network rm
  ```

- **Conectar un contenedor a la red host**

  ```sh
  docker run -d --network host --name cont5 -ti debian
  # Este contenedor tendrá los mismos parámetros de red que el host
  ```

- **Contenedores SIN red - none**

  ```sh
  docker run --network none --name cont -d -ti debian
  ```

- **Contenedor en red host con acceso solo desde "localhost**

  ```sh
  # Acceso desde localhost y IP local del host
  docker run -d -p 8080:80 nginx
  # Acceso sólo desde localhost
  docker run -d -p 127.0.0.1:8081:80 nginx
  ```

## DOCKER COMPOSE

- **Crear un archivo "docker-compose.yml**

  ```yml
  version: "3.8"
  services:
    web:
      image: nginx
      container_name: nginx1
      ports:
        - "8080:80"
      environment:
        - "MY_ENV=RUBENFGR"
      #env_file: common.env (rear un archivo de claves/valor)
      volumes:
        - "vol2:/usr/share/nginx/html"
      #volumes: (HOST)
      #- '$PWD/HTML:/usr/share/nginx/html'
      networks:
        - net-test
    web2:
      image: nginx
      container_name: nginx2
      ports:
        - "8081:80"
      networks:
        - net-test
  volumes:
    vol2:
  networks:
    net-test:
  ```

  ```sh
  # Iniciar el contenedor con docker-compose
  docker-compose up -d
  # Iniciar especificando el archivo
  docker-compose -f "my-file".yml up -d
  # Parar eliminar el contenedor creado
  docker-compose down
  ```

- **Build docker-compose**

  1. Crear un Dockerfile

  ```sh
  FROM debian

  RUN mkdir /opt/test
  ```

  2. Crear un docker-compose

  ```yml
  version: "3.8"
  services:
    web:
      container_name: my-web
      image: my-web-test
      build: .
      #build:
      #context: .
      #dockerfile: myDockerfile
  ```

  3. Correr docker-compose

  ```sh
  docker-compose build
  ```

- **Sobreescribir el CMD de un contenedor en compose**

  ```yml
  version: "3.8"
  services:
    web:
      image: debian
      command: python -m SimpleHTTPServer 8080
      ports:
        - "8080:8080"
  ```

- **Limitar los recursos**

  ```yml
  version: "3.8"
  services:
    web:
      container_name: my-nginx
      mem_limit: 20m
      cpuset: "0"
      image: nginx
  ```

- **Reinicio automático del contenedor**

  1. Crear el docker-compose

  ```yml
  version: "3.8"
  services:
    web:
      container_name: test
      image: restart-image
      build: .
      restart:
        always
        # unless-stopped # Reinicio a menos que se detenga manualmente
        # on-failure # Reinicio a pesar que falle internamente (error distinto de 0)
  ```

  ```sh
  docker run -d --restart always --name my-test -p 8080:80 nginx
  ```

  2. Crear el Dockerfile

  ```
  FROM debian

  COPY start.sh /start.sh

  RUN chmod +x /start.sh

  CMD /start.sh
  ```

  3. Crear el .sh

  ```sh
  #!/bin/bash

  echo "Estoy vivo"
  sleep 5s
  echo "Estoy detenido"
  # exit 1 (distinto de 0 para 'on-failure')
  ```

  4. Build, up and show logs & watch

  ```sh
  docker-compose -f "file".yml build
  docker-compose -f "file".yml up -d
  docker logs "container-name"
  watch docker ps
  ```

### Compose wordpress

```yml
version: "3.8"
services:
  db:
    container_name: my-mysql
    image: mysql:5.7
    volumes:
      - $PWD/data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: 12345678
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
    ports:
      - "3306:3306"
    networks:
      - my_net
  wordpress:
    container_name: wordpress
    volumes:
      - "#PWD/html:/var/www/html"
    depends_on: # Primero se debe crear el container db
      - db
    image: wordpress
    ports:
      - "80:80"
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
    networks:
      - my_net
networks:
  my_test:
```

### Compose Drupal

```yml
version: "3.8"
services:
  drupal:
    volumes:
      - drupal-html:/var/www/html
    image: drupal:8-apache
    ports:
      - 80:80
    networks:
      - net
  postgres:
    image: postgres:10
    environment:
      POSTGRES_PASSWORD: drupal
    volumes:
      - $PWD/data:/var/lib/postgresql/data
    networks:
      - net
  volumes:
    drupal-html:
  networks:
    net:
```

### Compose Prestashop

```yml
version: "3.8"

services:
  db:
    container_name: ps-mysql
    image: mysql:5.7
    volumes:
      - $PWD/data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: 12345678
      MYSQL_DATABASE: ps
      MYSQL_USER: ps
      MYSQL_PASSWORD: ps
    ports:
      - "3306-3306"
    networks:
      - my_net
  ps:
    container_name: ps-web
    volumes:
      - "$PWD/html:/var/www/html"
    depends_on:
      - db
    image: prestashop/prestashop
    ports:
      - "80:80"
    environment:
      DB_SERVER: db
      DB_USER: ps
      DB_PASSWD: ps
      DB_NAME: ps
    networks:
      - my_net
networks:
  my_net:
```

### Compose Joomla

```yml
version: "3.8"
services:
  joomla:
    image: joomla
    depends_on:
      - mysql
    ports:
      - 8080:80
    environment:
      JOOMLA_DB_HOST: mysql
      JOOMLA_DB_PASSWORD: example
  mysql:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: example
```

### Compose React E-Commerce

```yml
version: "3.8"

services:
  reaction:
    image: reactioncommerce/reaction
    depends_on:
      - mongo
    ports:
      - "3000:3000"
    environment:
      ROOT_URL: "http://localhost"
      MONGO_URL: "mongodb://mongo:27017/reaction"
    networks:
      - net
  mongo:
    image: mongo
    volumes:
      - $PWD/data:/data/db
    networks:
      - net
networks:
  net:
```

### Compose Guacamole

```yml
version: "3.8"
services:
  db:
    container_name: guacamole-db
    networks:
      - net
    image: mysql:5.7
    volumes:
      - ./conf/initdb.sql:/docker-entrypoint-initdb.d/initdb.sql
      - ./data:/var/lib/mysql
    env_file: .env
  daemon:
    container_name: guacamole-daemon
    networks:
      - net
    image: guacamole/guacd
    depends_on:
      - db
  web:
    container_name: guacamole-web
    networks:
      - net
    image: guacamole/guacamole
    env_file: .env
    depends_on:
      - daemon
  proxy:
    container_name: guacamole-proxy
    hostname: guacamole-proxy
    networks:
      - net
    image: nginx
    ports:
      - "80:80"
    restart: always
    volumes:
      - $PWD/conf/nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - web
networks:
  net:
    driver: bridge
```

### Compose Zabbix

```yml
version: '3.8'
services:
   zabbix:
      container_name: zabbix-web
      image: zabbix
      build: .
      volumes:
         - "$PWD/html:/usr/share/zabbix"
      ports:
         - "80:80"
      networks:
         - net
   db:
   container_name: zabbix-db
   image: mysql: 5.7
   environment:
      MYSQL_ROOT_PASSWORD: 123456
      MYSQL_USER: zabbix
      MYSQL_PASSWORD: zabbix
      MYSQL_DATABASE: zabbix
   volumes:
      - "$PWD/data:/var/lib/mysql"
      - "$PWD/conf/create.sql:/docker-entrypoint-initdb.d/zabbit.sql" # carga el sql al inicio del contenedor
   ports:
      - "3306:3306"
   networks:
      - net
networks:
   net:
```

### Container openssh-server

```sh
FROM debian

RUN yum -y install openssh-server sudo

RUN useradd guacamole && /user/bin/ssh-keygen -A

WORKDIR /home/guacamole

CMD /usr/sbin/sshd -D
```

### Docker Registry

- **Crear un registry local**

  1. Crear un directorio "registry"
  2. Correr un contenedor

  ```sh
  docker run -d -p 5000:5000 --name registry -v $PWD/data:/var/lib/registry registry:2
  ```

  3. Tagear una imagen existente

  ```sh
  docker tag "nombre-imagen-existente":"tag" "host":"puerto"/"nombre-imagen-registry":"tag-imagen-registry"
  # Example
  docker tag hello-world:latest localhost:5000/hello-world:1.0
  ```

  4. Eliminar imagenes

  ```sh
  docker rmi "nombre-imagen"
  ```

  5. Bajar la imagen desde el propio registry local

  ```sh
  docker pull "host":"port"/"imagen-name"
  # Example
  docker pull localhost:5000/hello-world
  ```

## Otros

### Bash

- **Simular archivos**

  `fallocate -l 10M /opt/file1`

### MySQL

- **Lanzar contenedor MySQL mapeando puerto, con nombre, root-pass, usuario y user-pass**
  `docker run -d -p 3306:3306 --name "nombre-bd" -e "MYSQL_ROOT_PASSWORD="pw"" -e "MYSQL_DATABASE="nombre-bd"" -e "MYSQL_USER="nombre-usuario"" -e "MYSQL_PASSWORD="password-usuario" "nombre-imagen"[:"tag"]`

## Errores

> Solución a resource temporarily unavailable

Culpable: La función TasksMax Systemd / Linux

- Prerrequisitos

systemd debe ser mayor o igual a 227 (versión 219 para RHEL)
El kernel de Linux debe ser superior o igual a 4.3 (versión 3.10 para RHEL)
La salida de systemctl status docker | grep Tasksincluye unLimit
Este problema fue resuelto por Docker EE 17.06.2-ee-7.

- Solución

```sh
sudo systemctl set-property docker.service TasksMax=infinity
sudo systemctl daemon-reload
sudo systemctl restart docker
```
