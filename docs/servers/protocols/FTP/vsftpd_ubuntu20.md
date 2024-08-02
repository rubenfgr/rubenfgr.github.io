---
title: 'Vsftpd Ubuntu 20.04'
---

## Instalación

`sudo apt install vsftpd`

---

## Iniciar y parar

```sh
sudo service vsftpd stop
sudo service vsftpd reload
sudo service vsftpd restart
sudo service vsftpd status
```

--- 

## Configuración /etc/vsftpd.conf

### Parámetros más importantes

- `write_enable=YES`. Habilitar la escritura
- `local_umask=022`. Nuevos permisos para los datos copiados al servidor. Por defecto es 077
- `ftpd_banner`. Habilitar un banner de inicio de sesión
- `chroot_list_enable=YES`. Los usuarios solo acceden dentro de su directorio /home/usuario
- `chroot_list_file=/etc/vsftpd.chroot_list`. Lista de usuarios con sus rutas predeterminadas (poner un nombre de usuario por línea)
- `anonymousenable=NO`. Deshabilita usuarios anónimos
- `anon_upload_enable=YES`. Habilitar/Deshabilitar subida de archivos por usuarios anónimos

## Agregar un usuario

`sudo adduser rubenfgr`

En este momento ya se puede acceder al servidor con el usuario y contraseña creado

## Otras configuraciones

### Habilitar FTPS

`ssl_enable=YES`

En este momento ya se puede acceder por SSL/TLS ya que en la instalación de vsftps, por defecto, genera los certificados RSA necesarios.

### Otras directivas para SSL/TLS

```sh
llow_anon_ssl=NO
force_local_data_ssl=YES
force_local_logins_ssl=YES
ssl_tlsv1_1=NO
ssl_tlsv1_2=YES
ssl_tlsv1_3=YES
ssl_tlsv1=NO
ssl_sslv2=NO
ssl_sslv3=NO
require_ssl_reuse=YES
ssl_ciphers=HIGH
```

## Puertos PASV (conexión de control)

Importante si se quieren habilitar los puertos en el cortafuegos

```sh
pasv_max_port=10000
pasv_min_port=9000
```

## Propietario y permisos

```sh
# Cambiar el propietario
sudo chown user:user directorio|fichero
sudo chown -R user:user directorio # recursivo
# Permisos
sudo chmod 777 directorio|fichero
sudo chmod 777 -R directorio # recursivo
```

## Ejemplo para el directorio /var/www/html

```sh
# Ajustamos propietario y grupo (habitualmente será www-data)
chown -R www-data:www-data /var/www/html/
# Ajustamos permisos en ficheros y directorios
find /var/www/html/ -type d -exec chmod 0755 {} \;   # rwxr-xr-x
find /var/www/html/ -type f -exec chmod 0644 {} \;   # rw-r--r--
```