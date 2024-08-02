---
title: "LDAP"
---

> Ubuntu 20.04

## Instalación y configuración

```sh
# Instalación
sudo apt update & upgrade
sudo apt install slapd ldap-utils
# Configuración
sudo dpkg-reconfigure slapd
# ¿Desea omitir la configuración del servidor OpenLDAP? No
# Introduzca su nombre de dominio DNS: proyecto-empresa.local
# Nombre de la organización: proyecto-empresa.local
# Contraseña del administrador: admin
# Verificación de la contraseña: admin
# Motor de base de datos a utilizar: HDB
# ¿Desea que se borre la base de datos cuando se purgue el paquete slapd? No
# ¿Desea mover la base de datos antigua? Sí
# ¿Desea permitir el protocolo LDAPv2? Sí
```

## Ejecución, recarga, parada, estado.

```sh
sudo service slapd start # stop|reload|status|force-reload
```

## Administración

Los siguientes ficheros se pueden juntan en un único fichero con orden de preferencia para evitar fallos relacionales

- **Crear estructura (si se ha generado con el comando dpkg-reconfigure slapd no es necesario)**

```sh
# Crear un fichero .ldif y agregar
# Objetos raiz del dominio
dn: dc=dominioempresa-dw4,dc=local
objectClass: top
objectClass: dcObject
objectclass: organization
o: dominioempresa-dw4.local
dc: dominioempresa-dw4
description:  Raiz de dominio
```

- **Crear unidades organizacionales**

```sh
# crear un fichero .ldif y agregar
# Unidad organizacional "grupo"
dn: ou=grupo,dc=dominioempresa-dw4,dc=local
objectClass: organizationalUnit
ou: grupo
```

- **Crear grupos**

```sh
# crear un fichero .ldif y agregar
# Grupo "users"
dn: cn=users,ou=grupo,dc=dominioempresa-dw4,dc=local
objectClass: top
objectClass: posixGroup
gidNumber: 2000
cn: users
```

- **Crear usuarios**

```sh
# crear un fichero .ldif y agregar
# Usuario "usuarioTest"
# Mi Usuario
dn: uid=usuarioTest,cn=users,ou=grupo,dc=dominioempresa-dw4,dc=local
objectClass: inetOrgPerson
objectClass: posixAccount
cn: usuarioTest
sn: gr
loginShell: /bin/bash
uidNumber: 10001
gidNumber: 10001
homeDirectory: /home/usuarioTest
gecos: usuarioTest
userPassword: 123456
mail: usuarioTest@dominioempresa-dw4.local
```
