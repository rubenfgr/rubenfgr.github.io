---
title: "Referencia"
---

## Instalación

```sh
apt-get install apache2

# Comprobar los módulos de PHP e instalar
apt-cache search php | grep apache2
apt-get install libapache2-mod-php7.4

# Comprobar los módulos de MySQL e instalar
apt-cache search mysql-server
apt-get install mysql-server
apt-cache search mysql | grep php
apt-get install php7.4-mysql
```

---

## Modos (mpm)

- **mpm_prefork**. Más antiguo. Crea diferentes procesos independientes para manejar las diferentes peticiones. Trabajo seguro con PHP sin hilos. Consume muchos recursos (RAM y CPU)
- **mpm_worker**. Este módulo usa procesos y al mismo tiempo hace uso de threads (también llamados hilos), es decir, combina las técnicas de forking y threading. Sólo soporta módulos de Apache que sean thread-safe. El mod_php es incompatible, la alternativa es el mod php-fpm.
- **mpm_event**. Versión mejorada de worker y mejora el rendimiento durante las peticiones con Keep Alive. No es compatible con mod_php y se debe usar php-fpm.

---

## Peticiones al servidor

```sh
sudo apt-get install apache2-utils
# Ayuda
ab help
# Peticiones concurrentes (-c) + número de petciiones (-n) + host
ab -c 100 -n 1000 localhost
```

---

## Configuración

- Archivo de configuración

`/etc/apache2/apache2.conf`

- Comprobar la configuración en los archivos

```sh
apachectl configtest
```

- Iniciar, parar o reiniciar

```sh
service apache2 start
service apache2 stop
service apache2 restart
```

- Comprobar el puerto a la escucha

```sh
sudo netstat -putona | grep apache
```

- Host y puerto de escucha

```sh
# Editar el fichero ports.conf
Listen 80
Listen 8080
```

- Directorio raiz para servir los archivos

```sh
DocumentRoot /var/www/html
```

- Index del directorio

```sh
DirectoryIndex index.html test.html etc.html
```

---

## Directivas

> Listen
> DocumentRoot
> Include
> IncludeOptional

### Módulo Core

- **ServerRoot** No necesario. Directorio de configuraciónd de Apache
- **ServerName** www.example.local** Nombre de dominio para un VirtualHost. Se debe registrar en /etc/hosts
- **ServerAdmin "mail-admin@admin.local"**
- **ErrorLog "/var/log/httpd/error_log"**
- **KeepAlive on** Permite conexiones persistentes.
- **VirtualHost** Deshabilitar con "off"
- **Timeout 60** Tiempo de espera del servidor para cerrar conexión
- **ServerTokens Full** Nivel de detalle de la cabecera que el servidor envia al cliente

- **Módulo base mod_alias**

> - **Alias** Permite direccionar una carpeta que este fuera del arbol de directorios

- **Módulo base mod_userdir**

> - **UserDir** Permite servir páginas alojas dentro del directorio principal de cada usuario del sistema. Configuración habitual: **_/home/test/public_html_** accedido con **_http://localhost/~test_**

Las directivas permiten E.R, por ejemplo:

```sh
<Directory /var/www/html/te*>
    Options +Indexes # Si en la url no se especifica el recurso muestra un listado, con "-" sería "Forbidden"
    AllowOverride AuthConfig # Permite sobreescribir directivas con .htaccess
</Directory>
```

- **Archivos .htaccess**

Estos archivos se crean en los diretorios del sitio web.
Permiten directivas aplicables en el contexto .htaccess.
El servidor no necesita reiniciarse.

```sh
# Archivo .htaccess en /home/www/html/test/private
Require all denied
```

El conjunto de directivas aplicables se limita por "AllowOverride":

- **AllowOverride All**
- **AllowOverride AuthConfig**: solo autenticación y control de acceso como AuthUserFile o Require
- **AllowOverride AuthConfig Indexes**: permite combinar estas directivas

### La sección "Location"

Permite aplicar directivas a URLs con una forma específica

### Secciones "DiretoryMatch y LocationMatch"

Permiten poner **expresiones regulares** en vez de un diretorio o ruta a un recurso

---

## Variables de entorno

Referencia a variables de entorno en la configuración de apache

```sh
User ${APACHE_RUN_USER}
```

Archivo de variables de entorno de apache

**_/etc/apache2/envvars_**

---

## Virtual Host

**Configuración común para todos los virtualhost en local**

```conf
<VirtualHost *>
   DocumentRoot "C:\xampp\htdocs"
   ServerName localhost
</VirtualHost>
```

1. Crear un nuevo fichero "nombre-host.conf" en /etc/apache2/sites-available
2. Copiar el código:

   ```sh
    <VirtualHost *:8081> # También se puede especificar una IP concreta en caso de disponer de varias IPs. *:* o * (cualquier ip y cualquier puerto)

        ServerName wwww.test.local
        ServerAlias test.local www.test.local  # Para host virtuales basados en nombre
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/test

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

    </VirtualHost>
   ```

3. Si no es el puerto 80, se debe habilitar en ports.conf agregando:

   ```sh
   Listen 8081
   # O IP + Puerto
   Listen 192.168.0.200:8081
   ```

4. Crear un enlace simbólico y relativo del fichero creado a /etc/apache2/sites-enabled

   ```sh
   ln -rs /etc/apache2/sites-available/nombre-host.conf /etc/apache2/sites-enabled/nombre-host.conf
   ```

5. Habilitar el sitio (comandos para ubuntu)

   ```sh
   a2ensite
   # dehabilitar
   a2dissite
   # O también...
   a2ensite <nombre-host>
   ```

6. Reiniciar apache

   ```sh
   sudo service apache2 restart
   # O tambien...
   sudo apache2ctl restart
   # Comprobar la configuración
   sudo apache2ctl test
   ```

---

## Módulos

- **Directiva para cargar módulos (previamente compilados)**

  `LoadModule`

- **Instalar / Desinstalar módulos**

  ```sh
  apt-get install libapache2-mod-gnutls
  apt-get remove libapache2-mod-gnutls
  ```

- **Activar / Desactivar modulos (Debian y derivados)**

  `a2enmod / a2dismod + nombre-modulo`

  Los modulos tienen dos ficheros:

  - .conf para la configuración
  - .load para la carga del módulo

- **Comprobar módulos estáticos y dinámicos**

  `apache2ctl -M`

  - **Estáticos** Compilados en el core de Apache
  - **Dinámicos** Se puede añadir/eliminar

- **Directorio de los módulos disponibles**

  `etc/apache2/mods-available`

- Directorio para enlaces simbolicos a los módulos disponibles

  `etc/apache2/mods-enabled`

- Habilitar UTF-8

  `sudo vim /etc/apache2/conf-available/charset.conf`

> **Operaciones sobre módulos**

| Operacion    | Forma genérica                | Ejemplo                               |
| ------------ | ----------------------------- | ------------------------------------- |
| Instalar     | apt-get install nombre-modulo | apt-get install libapache2-mod-gnutls |
| Desinstalar  | apt-get remove nombre-modulo  | apt-get remove libapache2-mod-gnutls  |
| Habilitar    | a2enmod nombre-modulo-apache  | a2enmod ssl                           |
| Deshabilitar | a2dismod nombre-modulo-apache | a2dismod ssl                          |

> **Recargar apache para habiliar los módulo**s

```sh
/etc/init.d/apache2 restart
# O...
/etc/init.d/apache2 reload
```

---

## Tipos MIME

Multipurpose Internet Mail Extensions

Especifica cómo un programa debe transferir archivos de texto, imagen, audio, vídeo o cualquier archivo que no esté codificado en US-ASCII.
Se especifican en las cabeceras HTTP

Respuesta del servidor:

```sh
Content-Type: text/html, application/json
```

Petición del cliente:

```sh
Accept: text/html, application/json
# Aceptar cualquier tipo MIME
Accept: */*
```

- **Configuración de Apache para los tipos MIME**

  Módulo: **_mod_mime_** (activo por defecto)

  **Directivas interesantes de este módulo:**

  - **ForceType** Todos los archivos de un directorio se sirven con el tipo especificado. Valido en "Directory, Files, Location y .htaccess"

  ```sh
      ForceType image/png
  ```

  - **AddType** Especifica el tipo MIME que se debe usar para una o más extensiones.

  ```sh
  # Para extensiones .imagen a .png
      AddType image/png imagen
  ```

---

## Autenticación y autorización

Esquemas de autenticación HTTP:

- **Basic** Se envian usuario y clave codificados en BASE64. Recomendado SSL (HTTPS)
- **Digest** Se utilizan funciones Hash para enviar las credenciales de acceso

Proceso de autenticación

1. El servidor, cuando el cliente solicita un recurso, le pedirá al cliente web las credenciales de acceso
2. El cliente web recibe la petición y solicita al usuario las credenciales
3. El cliente web envía las credenciales al servidor y si los datos son correctos responderá con el recurso solicitado

### Autenticación

Módulos:

- **mod_auth_basic** Permite que el servidor solicite al cliente las credenciales con el método Basic
- **mod_auth_digest** Permite que el servidor solicite al cliente las credenciales con el método Digest

Los datos de los usuarios se pueden almacenar en:

- Base de datos. Módulos: **_mod_authn_dbd y mod_dbd_**
- Servicio de directorio LDAP. Módulos: **_mod_authnz_ldapd_**
- En archivo. Módulo: **_mod_authn_file_**

Modo de limitar los recursos

- Para usuarios concretos. Módulo: **_mod_authz_user_**
- Para grupos. Módulo: **_mod_authz_groupfile_**

#### Ejemplo con esquema Basic

Módulos: mod_auth_basic, mod_authn_file, mod_authz_user

1. Crear un archivo con usuarios y contraseñas

   ```sh
   htpasswd -c /etc/apache2/user_list admin
   # Nos solicitará la contraseña
   # Si el archivo esta creado con anterioridad el -c nos e utiliza
   ```

2. Configurar Apache para usar autenticación sobre un directorio. En una sección **_Directory_** o en un archivo **_.htaccess_**

   ```sh
   # Indicar el Directory donde se efecuara el control de acceso
   AuthType Basic
   AuthName "Debe introducir usuario y contraseña para seguir"
   AuthBasicProvider file
   AuthUserFile /etc/apache2/user_list
   Require user admin # otros usuarios separados por espacio
   # Require valid-user (para todos los usuarios existentes en la lista)
   ```

#### Autenticación mediante LDAP

Módulos: mod_ldap y mod_authnz_ldap

1. Habilitar los módulos

```sh
sudo a2enmod ldap
sudo a2enmod authnz_ldap
```

#### Existen otros módulos de autenticación: anon, dbd, dbm, file, socache

### Otras formas de limitar los recursos

```sh
# Denegar acceso a todo el mundo
Require all denied
# Aceptar acceso a todo el mundo
Require all granted
# Habiliar acceso a una IP Cliente concreta
Require ip 10.20.30.40
# Deshabilitar acceso ana IP Cliente concreta
Require not ip 10.20.30.40
# Rango de IPs
Require ip 10.20
```

Todos los casos anteriores devuelven el código de estado 403 (acceso no permitido o prohibido)

### Redirección

```sh
ServerName www.miejemplo.local
DocumentRoot /var/www/html/diretoriolimitado
Redirect /recursoantiguo http://www.miejemplo.local/recursonuevo
```

---

## SSL/TLS - HTTPS

Módulo: **mod_ssl**

Este módulo proporciona SSL y TLS. Esta basado en OpenSSL

1. Activar el módulo SSL

   ```sh
   a2enmod ssl
   ```

2. Crear un nuevo VirtualHost que contenga:

   ```sh
   SSLEngine on
   SSLCertificateFile /etc/ssl/certs/ssl-cert-snakeoil.pem
   SSLCertificateKeyFile /etc/ssl/private/ssl-cert-snakeoil.key
   ```

### Generar certificado digital autofirmado

1. Instalar OpenSSL

   ```sh
   sudo apt-get install openssl
   ```

2. Generar el certificado autofirmado junto a la clave privada

   ```sh
   make-ssl-cert /usr/share/ssl-cert/ssleay.cnf /etc/apache2/my-ssl/apache.pem
   ```

3. Modificar el VirtualHost para la nueva clave y certificado

   ```sh
   SSLEngine on
   SSLCertificateFile /etc/apache2/my-ssl/apache.pem
   SSLCertificateKeyFile /etc/apache2/my-ssl/apache.pem
   ```

### Generar certificados con OpenSSL

1. Generar la clave privada y el archivo de solicitud de certificado

   ```sh
   sudo openssl req -new -nodes -keyout test.key -out test.csr
   ```

2. Autofirmar el certificado

   ```sh
   sudo openssl x509 -in test.csr -out test.crt -req -signkey test.key -days 3650
   ```

3. Modificar el VirtualHost para la nueva clave y certificado

   ```sh
   SSLEngine on
   SSLCertificateFile /etc/apache2/my-ssl/test.crt
   SSLCertificateKeyFile /etc/apache2/my-ssl/test.key
   ```

---

## Log

### Log de apache en formato CLF

```sh
192.168.200.100  - [05/May/2011:17:19:18 +0200] "GET /index.html HTTP/1.1" 200 20
# - (campo sin valor)
```

### Comprobar logs en Linux

```sh
tail -f nombre-archivo-registro.log
```

| campos(especificadores) | definicion                                                                | Ejemplo                      |
| ----------------------- | ------------------------------------------------------------------------- | ---------------------------- |
| host (%h)               | Equipo cliente                                                            | 192.168.200.100              |
| ident (%l)              | Cuando el cliente ejecuta identd y la directiva IdentityCheck esta activa |                              |
| authuser (%u)           | URL requiere autenticación                                                |                              |
| date (%t)               | Formato: [dia/mes/año:hora:minuto:segundo zona]                           | [05/May/2011:17:19:18 +0200] |
| request (%r)            | Recurso solicitado                                                        | /index.html                  |
| status (%s O %\>s)      | código de estado devuelto                                                 | 200                          |
| bytes (%b)              | bytes devueltos al cliente                                                | 20                           |

### Directivas para archivos de registro

| Directiva   | Sintaxis                                                                                 | Uso                                                                                                                   |
| ----------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| TransferLog | TransferLog nombre-fichero \| tubería a programa de registro                             | 1º. LogFormat<br />2º.Archivo donde se guardarán los logs                                                             |
| LogFormat   | LogFormat format \| alias_logformat [alias_logformat]                                    | 1º LogFormat "%h %l %u %t %r" %>s %0" common<br />common = alias<br />Es habitual definir formatos de log globalmente |
| ErrorLog    | ErrorLog nombre-fichero                                                                  | ErrorLog logs/nombre-fichero.log                                                                                      |
| CustomLog   | CustomLog nombre-fichero \| tubería-programa-registro formato \| nickname [env opcional] | Custom logs/acceso-temporal.log "formato..."<br />CustomLog logs/acceso-temporal.log common                           |

### Rotar los archivos de log para controlar su tamaño en el tiempo

- **rotatelogs** Apache
- **logrotate** GNU/Linux

Ejemplos:

```sh
CustomLog "|/ruta_rotatelogs ruta_log_a_rotar numbero_segundos | tamaño máximo MB" alias_logformat

# Sufijo, MB máximos por archivo y Nº de archivos en disco
CustomLog "|/usr/bin/rotatelogs -n 10 /var/log/accesslog.%Y-%m-%d-%H_%M_%S 5M" common

# Apache >= 2.4
CustomLog "|$rotatelogs -n 10 /var/log/apache2/access.log 5M" common
```

### Encontrar rotatelogs en Linux o instalar en caso necesario

```sh
whereis rotatelogs
# A veces será necesario instalar....
sudo apt-get install apache2-utils
```

### Uso de logrotate (Linux)

- Configuración global: **/etc/logrotate.conf**
- Configuración específica: **/etc/logrotate.d/apache2**

```sh
# Comprobar la correcta configuración
/usr/sbin/logrotate -d /etc/logrotate.d/apache2

# Forzar la ejecución de logrotate
/usr/sbin/logrotate -f /etc/logrotate.conf

# Ejecutar logrotate con tareas cron
```

---

## Tomcat

### Instalación desde repositorio

1. Comprobar los paquetes existentes en el repositorio

   ```sh
    apt-cache search tomcat -n
   ```

2. Comprobar las dependencias de tomcat

   ```sh
   apt-cache depends tomcat9 tomcat9-common
   ```

3. **OPCIONAL**. Instalar el JDK (contiene entorno de desarrollo y ejecución)

   ```sh
    # Comprobar las dependencias del JDK por defecto
    apt-cache depends default-jdk-headless
    # Instalar el JDK
    sudo apt-get install default-jdk-headless
   ```

4. Instalar Tomcat. Se instalaran las dependencias necesarias (Ej. JRE)

   ```sh
   sudo apt-get install tomcat9 tomcat9-common tomcat9-admin tomcat9-docs
   ```

5. Comprobar donde se instala el JDK

   ```sh
   # Compruebo el nombre del paquete
   sudo dpkg -l | grep openjdk
   # Compruebo los directorios y ****ficheros**** del paquete
   sudo dpkg -L nombre-paquete
   ```

6. Compruebo rutas de instalación de Tomcat

   ```sh
   sudo dpkg -L <nombre-paquete-tomcat>
   # /var/lib/tomcat9 --> carpeta principal
   # /etc/tomcat9 --> carpeta de configuración
   # /var/log/tomcat9 --> logs del servidor
   # /var/lib/tomcat9/webapps --> aplicaciones web en formato expandido
   # /usr/share/tomcat/bin --> scripts de tomcat (iniciar, parar, configuración, etc)
   ```

7. Arrancar / Parar el servicio de tomcat

   ```sh
   sudo service tomcat9 start
   sudo service tomcat9 stop
   sudo service tomcat9 restart
   ```

8. Comprobar en \IP:\PUERTO que se esta ejecutando correctamente

### Instalación manual

1. Instalar el JDK compatible a la **versiónd** de tomcat que se utilizará

2. Ir al diretorio /opt y descargar el binario del core de tomcat

   ```sh
   sudo wget url-binarios-core-tomcat
   ```

3. Extraer los archivos

   ```sh
   sudo tar xfz fichero-descargado.gz
   ```

4. Cambiar los permisos del directorio al usuario deseado o dejar permisos root

   ```sh
   sudo chown -R usuario:grupo-usuario directorio
   ```

5. Ejercutar Tomcat

   ```sh
   sudo sh /opt/directorio-tomcat/bin/catalina.sh start
   ```

6. Comprobar su ejecución en \IP:\PUERTO
