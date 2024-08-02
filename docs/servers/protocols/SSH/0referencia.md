---
title: "Referencia"
---

## Instalación de un servidor SSH

Habitualmente los equipos con alguna variedad de GNU/Linux traen un servidor ssh instalado, en el caso de los sistemas Debian y derivados el paquete que proporciona el servidor ssh se llama openssh-server. Podemos comprobar si ya está instalado mediante la instrucción:

```sh
dpkg -l |grep openssh-server
ii  openssh-server            ......
```

El fichero de configuración de este servicio se encuentra habitualmente en /etc/ssh/sshd_config y contiene las opciones de configuración.

Las opciones aplicadas las obtendríamos mediante:

```sh
grep -v '^$\|^#' /etc/ssh/sshd_config

ChallengeResponseAuthentication no
UsePAM yes
X11Forwarding yes
PrintMotd no
AcceptEnv LANG LC_*
Subsystem    sftp    /usr/lib/openssh/sftp-server
```

Sin embargo, en el caso de ssh hay muchas opciones que no vienen definidas y que se asume un valor por defecto, lo que puede resultar confuso. Sin embargo podemos utilizar la opción “-T: extended test mode” que comprueba la validez del fichero de configuración y muestra las opciones efectivas que se aplican (las que están habilitadas de forma explícita y las que tienen valores por defecto (en sistemas GNU/linux sshd sólo puede ejecutarlo un usuario privilegiado):

```sh
sshd -T
...
port 22
addressfamily any
listenaddress [::]:22
listenaddress 0.0.0.0:22
usepam yes
logingracetime 120
x11displayoffset 10
maxauthtries 6
maxsessions 10
clientaliveinterval 120
clientalivecountmax 3
streamlocalbindmask 0177
permitrootlogin without-password
ignorerhosts yes
ignoreuserknownhosts no
hostbasedauthentication no
hostbasedusesnamefrompacketonly no
pubkeyauthentication yes
kerberosauthentication no
kerberosorlocalpasswd yes
kerberosticketcleanup yes
gssapiauthentication no
gssapikeyexchange no
gssapicleanupcredentials yes
gssapistrictacceptorcheck yes
gssapistorecredentialsonrekey no
passwordauthentication yes
kbdinteractiveauthentication no
challengeresponseauthentication no
printmotd no
printlastlog yes
x11forwarding yes
x11uselocalhost yes
permittty yes
permituserrc yes
strictmodes yes
tcpkeepalive yes
permitemptypasswords no
permituserenvironment no
compression yes
gatewayports no
usedns no
allowtcpforwarding yes
allowagentforwarding yes
disableforwarding no
allowstreamlocalforwarding yes
streamlocalbindunlink no
useprivilegeseparation sandbox
fingerprinthash SHA256
pidfile /run/sshd.pid
xauthlocation /usr/bin/xauth
ciphers chacha20-poly1305@openssh.com,aes128-ctr, ...
macs umac-64-etm@openssh.com,umac-128-etm@openssh.com, ...
versionaddendum none
kexalgorithms curve25519-sha256,curve25519-sha256@libssh.org, ...
hostbasedacceptedkeytypes ecdsa-sha2-nistp256-cert-v01@openssh.com, ...
hostkeyalgorithms ecdsa-sha2-nistp256-cert-v01@openssh.com, ...
pubkeyacceptedkeytypes ecdsa-sha2-nistp256-cert-v01@openssh.com, ...
loglevel INFO
syslogfacility AUTH
authorizedkeysfile .ssh/authorized_keys .ssh/authorized_keys2
hostkey /etc/ssh/ssh_host_rsa_key
hostkey /etc/ssh/ssh_host_ecdsa_key
hostkey /etc/ssh/ssh_host_ed25519_key
acceptenv LANG
acceptenv LC_*
authenticationmethods any
subsystem sftp /usr/lib/openssh/sftp-server
maxstartups 10:30:100
permittunnel no
ipqos lowdelay throughput
rekeylimit 0 0
permitopen any
```

---

## Autenticación con usuario y contraseña

El método inicial de autenticación es utilizando los usuarios del sistema y las contraseñas que tienen almacenadas en el sistema. A SSH no le afecta la forma en la que el sistema almacena las contraseñas, entra en la forma en la que se almacenan las contraseñas (fichero, LDAP, etc.).

Las opciones de configuración que afectan en este caso son las siguientes:

```sh
passwordauthentication yes|no
challengeresponseauthentication yes|no
permitemptypasswords yes|no
```

Teóricamente challengeresponseauthentication es un mecanismo más complejo que permite preguntar al usuario otras cuestiones, no sólo la contraseña, pero en la práctica se suele preguntar la contraseña.

En sistemas GNU/Linux se añade la opción

`usepam yes`
Que permite utilizar el subsistema PAM como mecanismo de autenticación.

### Ejercicio simple de acceso con usuario/contraseña

Accedemos a un servidor remoto con:

```sh
ssh usuario@172.22.200.175
The authenticity of host '172.22.200.175 (172.22.200.175)' can't be established.
ECDSA key fingerprint is SHA256:Bsv9OS7Qf94ANguOiDLNPHn7J+XlwisWZydmfqa4QMo.
Are you sure you want to continue connecting (yes/no)?
```

Para verificar el servidor, en lugar de mostrarnos la clave pública completa, nos muestra la huella (fingerprint) de la clave pública del servidor, que no es más que un hash de la clave pública, en este caso utlizando SHA256. Podemos comprobar la correspondencia entre la clave pública y la huella mediante la instrucción:

ssh-keygen -l -E sha256 -f fichero_con_clave_publica
Podríamos hablar con detalle de la forma efectiva de verificar las claves públicas, pero en este momento aceptamos la clave que se nos ofrece y por tanto tecleamos “yes” y a continuación nos pide la contraseña de acceso, la introducimos y accedemos a una shell en el equipo remoto:

```sh
Warning: Permanently added '172.22.200.175' (ECDSA) to the list of known hosts.
usuario@172.22.200.175's password: **********
Last login: Fri Feb 16 17:34:41 2018 from 172.23.0.22
usuario@host:~$
```

### Ejecución remota

SSH permite ejecutar una orden remotamente de forma no interactiva, lo que resulta muy cómodo cuando hay que realizar tareas muy específicas en un equipo remoto. Por ejemplo:
`ssh usuario@172.22.200.175 sudo apt update`

También se pueden encadenar varias órdenes o ejecutar un script:
`ssh usuario@172.22.200.175 'sudo apt update && sudo apt upgrade'`

### Consideraciones acerca de root

Se puede restringir el acceso con el usuario root utilizando contraseña, aspecto importante desde el punto de vista de seguridad, por lo que hoy en día habitualmente se utiliza la opcion:

`PermitRootLogin without-password`

En caso de que quisiéramos permitir acceder con el usuario root y contraseña, deberíamos poner esta opción a “yes”.

### Otras opciones

No específicas del acceso con usuario y contraseña, pero adecuadas para empezar:

```sh
PrintLastLog yes|no
PrintMotd yes|no
Banner Ruta_a_fichero
```

---

### Autenticación con claves pública/privada con frase de paso

Aunque el mecanismo más fácil de entender al utilizar ssh es la autenticación del usuario mediante la contraseña en el equipo remoto, el mecanismo más “natural” y probablemente más habitual es la autenticación mediante un par de claves pública/privada.

### Creación de la clave privada

Para crear la clave privada utilizaremos la herramienta ssh-keygen, especificando el algoritmo que deseamos utilizar mediante el parámetro -t (dsa | ecdsa | ed25519 | rsa | rsa1), por ejemplo:

`ssh-keygen -t ecdsa`

Se creará un diálogo mediante el cual nos pedirá una frase de paso para proteger la clave privada, paso que ignoraremos de momento y explicaremos con detalle en la siguiente sección:

```sh
Generating public/private ecdsa key pair.
Enter file in which to save the key (/home/alberto/.ssh/id_ecdsa): [ENTER]
Enter passphrase (empty for no passphrase): [ENTER]
Enter same passphrase again: [ENTER]
Your identification has been saved in /home/alberto/.ssh/id_ecdsa.
Your public key has been saved in /home/alberto/.ssh/id_ecdsa.pub.
The key fingerprint is:
SHA256:QQ0bm3FBXKhLyWUfa7teeHgufwLPdK8nIu0UlMCJ6/M alberto@mut
The key's randomart image is:
+---[ECDSA 256]---+
|        =B==.    |
|       ..BO...   |
|       .=* .oo   |
|        *. .+    |
|       oS. ...   |
|        +   o+. .|
|         o .+*+..|
|          E.=== +|
|           +o++* |
+----[SHA256]-----+
```

En este caso hemos optado por dejar el nombre de la clave por defecto (~/.ssh/id_ecdsa). Si vamos al directorio ~/.ssh veremos que existen dos nuevos ficheros, que se corresponden con la clave pública y la privada:

```sh
-rw------- 1 alberto alberto   227 feb 18 09:16 id_ecdsa
-rw-r--r-- 1 alberto alberto   173 feb 18 09:16 id_ecdsa.pub
```

Lógicamente la clave privada se ha protegido en el sistema de forma que sólo el propietario puede leerla o modificarla, mientras que la pública puede leerla cualquier usuario y en general podrá estar accesible en cualquier sitio sin restricciones, ya que no es posible obtener la clave privada a partir de ella.

Vemos el contenido de estas claves (obviamente se muestran aquí a modo de ejemplo y se trata de claves que no se van a utilizar nunca en un entorno real):

```sh
~/.ssh/id_ecdsa
-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIN53r8/ghcQ94wjNPtvz0VvSFsuU7ePsPkriWPhpC137oAoGCCqGSM49
AwEHoUQDQgAEXJKU4yRlIdnKGG8qQA2PXpfCPVz9xpbB3TXOh9ymC9XtjgP3ZCwU
tdNnLTQNJm8PO4MHtFZBTxeFE39lD7WVYQ==
-----END EC PRIVATE KEY-----

~/.ssh/id_ecdsa.pub
ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAy\
NTYAAABBBFySlOMkZSHZyhhvKkANj16Xwj1c/caWwd01zofcpgvV7Y4D92QsFLXT\
Zy00DSZvDzuDB7RWQU8XhRN/ZQ+1lWE= alberto@mut
```

### Copia de la clave pública en el equipo remoto

Para que se pueda utilizar este mecanismo de autenticación es preciso que la clave pública del usuario se encuentre en la cuenta que éste posee en el equipo remoto, de forma más concreta, dentro del fichero ~/.ssh/authorized_keys, por lo que debemos utilizar algún método para ubicarla allí:

- Accedemos con contraseña y copiamos y pegamos la clave pública
- Accedemos con otra clave pública que hubiésemos copiado previamente y pegamos la nueva clave pública
- Utilizamos cualquier sistema en el arranque de la máquina que obtenga la clave pública y la ubique en su sitio (muy habitual en cloud computing)
- Utilizamos la herramienta ssh-copy-id
  Vamos a ver el último método:

```sh
ssh-copy-id -i ~/.ssh/id_ecdsa debian@172.22.200.175

/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/alberto/.ssh/id_ecdsa.pub"
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
debian@172.22.200.175's password:

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'debian@172.22.200.175'"
and check to make sure that only the key(s) you wanted were added.
```

Si accedemos al equipo remoto, podremos comprobar que la clave pública que hemos exportado se encuentra en el fichero ~/.ssh/authorized_keys.

### Clave privada con nombre no estándar

En el caso anterior hemos creado un par de claves con nombre estándar (id_ecdsa e id_ecdsa.pub), pero es posible definir cualquier nombre a la hora de crear el par de claves, por ejemplo:

```sh
ssh-keygen -t ed25519
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/debian/.ssh/id_ed25519): openwebinars
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in openwebinars.
Your public key has been saved in openwebinars.pub.
The key fingerprint is:
SHA256:HzEVg7wVelxLpuHrv+BUG8QG4bI0AsED7PnUvzFdlCI debian@asd
The key's randomart image is:
+--[ED25519 256]--+
|   ..oo. . .O++. |
|    . o.  E*oXo. |
|   . . o. B+*o=  |
|    o . .o.B +.  |
|     o  S.o...o  |
|      .  .+o.. o |
|          .++ .  |
|          .o o   |
|            . o. |
+----[SHA256]-----+
```

Procederíamos de igual forma que en el caso anterior, aunque ahora para utilizar la clave en cualquier sesión ssh, deberíamos indicarlo de forma explícita:

```sh
ssh -i ~/.ssh/openwebinars debian@172.22.200.175
```

### Utilización en cloud computing

Hoy en día es cada vez más habitual la utilización de máquinas virtuales en algún proveedor de nube de infraestructura pública o privada (AWS, Azure, OpenStack, etc.), en estos casos es imprescindible utilizar este mecanismo de clave pública/privada para acceder a estas máquinas virtuales.

### Generación de una clave pública a partir de la privada

Aunque habitualmente se generan ambas claves, en diferentes circunstancias puede ocurrir que tengamos la clave privada, pero no la correspondiente clave pública, en ese caso podemos utilizar ssh-keygen para obtenerla:

```sh
ssh-keygen -y -f clave >> clave.pub
```

Evidentemente si tenemos la clave pública y no la privada, no podemos hacer el proceso inverso.

### Utilización en procesos no interactivos

Puesto que teniendo acceso a la clave privada el acceso se puede realizar al equipo remoto sin ninguna intervención, este mecanismo es ideal para su utilización en procesos que no requieran intervención humana, como muchas conexiones que pueden realizarse entre diferentes equipos. La conexión es segura y autenticada, aunque es muy importante custodiar adecuadamente las claves privadas.

---

## Autenticación con claves pública/privada y frase de paso

La autenticación con clave privada tiene importantes ventajas respecto al acceso con contraseña, pero tiene el inconveniente de la custodia de la clave privada. Cualquier usuario que obtuviese nuestra clave privada podría entrar en nuestra cuenta de cualquier equipo en el que tuviésemos exportada la correspondiente clave pública. Para aumentar la seguridad en esta situación se utiliza una frase de paso para proteger la clave privada, frase que se introduce al crear la clave privada o que puede modificarse a posteriori. Vamos a crear una nueva clave, pero en este caso protegida con frase de paso:

```sh
ssh-keygen -t ecdsa
Generating public/private ecdsa key pair.
Enter file in which to save the key (/home/alberto/.ssh/id_ecdsa):
Enter passphrase (empty for no passphrase): <- Teclear frase de paso
Enter same passphrase again: <- Teclear frase de paso
Your identification has been saved in /home/alberto/.ssh/id_ecdsa.
Your public key has been saved in /home/alberto/.ssh/id_ecdsa.pub.
The key fingerprint is:
SHA256:mvCLrZMvdUDOorOkvd/1iosAZmhGS2fWPQmjAVMjjtk alberto@mut
The key's randomart image is:
+---[ECDSA 256]---+
| +o+ o           |
|ooo = = .        |
|o+E= = +         |
|+ = . + .        |
|o* ... .S        |
|=.+  o.o.        |
| +.o o+..        |
|. o.+= + .       |
|  .o==B....      |
+----[SHA256]-----+
```

De esta forma la clave privada no es útil a menos que se conozca la frase de paso.

Procedemos de igual forma que en el caso anterior, exportando la clave pública, aunque ahora cada vez que accedamos nos solicitará la frase de paso de la clave privada:

ssh -i ~/.ssh/id_ecdsa debian@172.22.200.175
Enter passphrase for key '/home/alberto/.ssh/id_ecdsa':
Hemos ganado en seguridad, pero hemos perdido en usabilidad, porque ahora tenemos que escribir la frase de paso cada vez que accedamos al equipo remoto y además no es válido para procesos no interactivos. Para solucionar este inconveniente usaremos ssh-agent en una sección posterior.

---

## SSH - Agent

Activar SSH-Agent

```sh
eval "$(ssh-agent -s)"
ssh-keygen -t rsa -m PEM -f <nombre-clave>
ssh-copy-id -i ~/.ssh/id_ecdsa debian@172.22.200.175
```

ssh-agent es un programa que permite almacenar las claves privadas de una sesión y es muy útil cuando usamos claves con frase de paso, ya que podemos añadir la clave privada al agente ssh y sólo tendremos que poner la frase de paso una vez, permitiendo utilizar ssh de forma transparente sin volver a introducir la frase de paso todo el tiempo que dure la sesión del usuario (realmente se puede limitar a una cantidad de tiempo menor si se desea).

ssh-agent se suele ejecutar automáticamente en las sesiones gráficas de los sistemas, como podemos verificar mediante:

```sh
env |grep SSH
...
SSH_AUTH_SOCK=/run/user/1001/keyring/ssh
SSH_AGENT_PID=2743
```

O a través de ps:

```sh
ps aux |grep ssh-agent
alberto   2743  .... ..... 0:00 /usr/bin/ssh-agent x-session-manager
```

De hecho, si tuviéramos alguna clave privada sin frase de paso se habría cargado automáticamente en el agente ssh y podríamos utilizarla de forma totalmente transparente.

### Añadir una clave privada a ssh-agent

Mediante la herramienta ssh-add podemos añadir una clave al agente ssh, por ejemplo:

```sh
ssh-add ~/.ssh/openwebinars
```

Si la clave está protegida por una frase de paso, se nos pedirá en ese momento, o se utilizará la aplicación ssh-askpass si se tratase de una aplicación gráfica u otra que no tuviese asociada una terminal.

Podemos ver las claves cargadas mediante:

`ssh-add -L`

Y sus huellas con:

`ssh-add -l`

ssh-agent permite que cualquier otra aplicación de la misma sesión utilice las claves privadas que almacena sin tener que volver a autenticarse, por lo que es importante controlar el uso de la sesión, bloqueándola cuando no se esté usando.

Se pueden eliminar claves ssh del agente mediante:

`ssh-add -d openwebinars`

O incluso eliminar todas las claves con:

`ssh-add -D`

### Ejecución de ssh-agent

En el caso de que utilicemos un sistema que no haya cargado automáticamente un agente ssh, podemos ejecutarlo directamente, habitualmente se haría abriendo una nueva shell:

`ssh-agent /bin/bash`

---

## Gestión de ficheros: authorized_keys y known_hosts

### Fichero ~/.ssh/authorized_keys

Se almacenan las claves públicas de los usuarios que pueden acceder a esta cuenta mediante clave pública/clave privada, el formato es:

`algoritmo clave_publica comentario`

Por ejemplo:

`ssh-rsa AAAAB3NzaC1yc2EAA...dPh alberto@mut`

Si queremos que utilizar un par de claves para acceder a un equipo, debemos asegurarnos de que exista la clave pública en este fichero y cuando ya dejemos de utilizarla debemos borrar la línea correspondiente.

### Fichero ~/.ssh/known_hosts

Se almacenan las claves públicas de todos los equipos remotos a los que nos hemos conectado y que hemos aceptado, el formato es:

`nombre_o_IP_equipo algoritmo clave_pública`

Actualmente es más habitual que no se guarde el nombre o dirección IP del equipo en claro, sino que se almacene el hash. Para encontrar un determinado equipo por nombre o dirección IP podemos utilizar la instrucción:

```sh
ssh-keygen -F 172.22.200.175
# Host 172.22.200.175 found: line 88
|1|lbA....9Lo= ecdsa-sha2-nistp256 AAAA.....ynTO90=
```

### Cambio de clave pública del servidor

Habitualmente se almacenan las claves públicas de los servidores a los que nos hemos conectado previamente en el fichero ~/.ssh/known_hosts, por lo que se verifica cada vez que se conecta que el servidor ofrece la misma clave pública. En caso de que no coincida veremos el siguiente mensaje:

```sh
ssh debian@172.22.200.175
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:J9CMWSbavkqECRI1KWhy8s/D7UVJWDiysAocAbo1F6k.
Please contact your system administrator.
Add correct host key in /home/alberto/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /home/alberto/.ssh/known_hosts:88
  remove with:
  ssh-keygen -f "/home/alberto/.ssh/known_hosts" -R 172.22.200.175
ECDSA host key for 172.22.200.175 has changed and you have requested strict checking.
Host key verification failed.
```

Es posible que se trate de una suplantación y por tanto un problema de seguridad, pero también es posible que se haya realizado un cambio en el servidor que haya implicado un cambio en las claves del servicio ssh o una situación muy habitual hoy en día: estamos reutilizando la misma IP para un nuevo servidor.

En caso de que estemos seguros de que no hay ningún problema de seguridad al acceder a ese equipo remoto, debemos eliminar la antigua clave asociada a la dirección IP (o al nombre), mediante la instrucción:

```sh
ssh-keygen -R 172.22.200.175
# Host 172.22.200.175 found: line 88
/home/alberto/.ssh/known_hosts updated.
Original contents retained as /home/alberto/.ssh/known_hosts.old
```

---

## Forwarding

Agent forwarding
Mediante esta técnica, es posible que el cliente ssh se comunique con un agente ssh que corre un una máquina remota y sin necesidad de poner las claves privadas en él, poder saltar a otro equipo remoto no accesible directamente. Es una técnica muy útil que permite no exponer directamente los servidores a los que realmente queremos acceder mediante ssh, sino que accedemos a ellos de forma transparente usando un equipo a modo de bastión.

Esta posibilidad debe estar habilitada en el servidor intermedio mediante la directiva:

`allowagentforwarding yes`

Que está habilitada por defecto.

En el cliente es necesario habilitar el parámetro:

`ForwardAgent yes`

X11 forwarding
A través de la técnica de X11 forwarding podemos ver en nuestra pantalla aplicaciones gráficas que se ejecutan a través de ssh en un equipo remoto (y viceversa).

Aunque en primer lugar tiene que estar permitido en el servidor a través de las directivas:

```sh
X11Forwarding yes
X11DisplayOffset 10
```

El cliente para conectarse y utilizar esta funcionalidad, deberá configurar adicionalmente la opción:

`ForwardX11 yes`

Al conectarnos por ssh podremos comprobar que está definida la variable DISPLAY con un valor definido a través de la variable X11DisplayOffset, por ejemplo:

`env |grep DISPLAY`

DISPLAY=localhost:10
Al ejecutar una aplicación en el equipo remoto sobre la conexión ssh nos aparecerá en nuestra pantalla.

### Configuración del cliente

Existe el fichero /etc/ssh/ssh_config en el que se especifican los parámetros de configuración generales que van a utilizar por defecto todos los clientes ssh que se ejecuten en esa máquina.

Los posibles parámetros que podemos definir en ese fichero se detallan en la página 5 del manual de ssh_config.

### Algunos parámetros significativos

SendEnv LANG LC\_\*
Mediante este parámetro se define en el equipo remoto los parámetros de localización del cliente, siempre que estos estén definidos allí. Por ejemplo, supongamos que la variable local sea LANG=es.ES.UTF-8, seguirá siendo en el equipo remoto siempre que exista, en caso contrario se pondrá la localización por defecto del sistema:

```sh
usuario@cliente:~$ echo $LANG
es_ES.UTF-8
usuario@cliente:~$ ssh root@servidor1

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
No mail.
Last login: Thu Feb 22 10:06:47 2018 from ...
root@servidor1:~# echo $LANG
en_US.UTF-8
```

### HashKnownHosts yes|no

Para ofuscar mediante un hash la IP o el nombre de los servidores de los que almacenamos las claves públicas en el fichero ~/.ssh/known_hosts

### GSSAPIAuthentication yes|no

Para habilitar este método de autenticación, en sistemas Debian viene habilitado, aunque sólo es necesario en los casos en los que se vaya a usar este método de autenticación.

### Carácter de escape

En algunas ocasiones podemos tener problemas con nuestra conexión ssh y que la shell remota no responda a las instrucciones que mandamos, en esos casos siempre se podrá cerrar la conexión mediante el carácter de escape que hayamos definido en nuestro cliente ssh, este caracter por defecto es “~”:

`EscapeChar ~`

Para ejecutarlo escribiríamos la secuencia “~.”

### ForwardAgent, ForwardX11

Explicados en la sección específica de forwarding

### GlobalKnownHostsFile fichero

Permite la utilización de un fichero known_hosts para todos los
usuarios de un equipo.

### NumberOfPasswordPrompts

Número de intentos de acceso con contraseña. Por defecto es 3

### StrictHostKeyChecking yes|ask|no

Parámetro muy importante, utiliza para la gestión de las claves públicas de los equipos remotos. La opción por defecto es “ask”, de manera que si no se ha almacenado previamente la clave pública se pregunta qué hacer. En el caso de ponerla en “yes”, se rechazará una conexión si no existe previamente la clave pública y en caso de optar por la opción “no”, no se hará ninguna verificación.

### UserKnownHostsFile fichero

Fichero known_hosts de usuario, por defecto ~/.ssh/known_hosts

### Configuración por usuario

Salvo algunos parámetros generales, es poco probable que la mayoría de los parámetros que se pueden definir para el cliente ssh sean útiles para todos los usuarios de un equipo, es mucho más habitual que un usuario defina un fichero de configuración con sus propios parámetros. Este fichero es ~/.ssh/config y los parámetros aquí definidos prevalecen sobre los generales.

Se pueden definir parámetros para todos los equipos remotos, pero es también muy útil agruparlos con el parámetro Host como en el siguiente ejemplo:

```sh
GSSAPIAuthentication no

Host 192.168.1.1
     User root
     Port 2022
     ForwardAgent yes
     Identityfile ~/.ssh/id_ecdsa
     StrictHostKeyChecking yes

Host *.example.com
     StrictHostKeyChecking no
     UserKnownHostsFile=/dev/null
     LogLevel QUIET
```

### Utilizar parámetros directamente

Independientemente de los parámetros que estén definidos en cualquiera de las opciones anteriores, también es posible utilizar parámetros de forma explícita en la propia línea de comandos, pasándolos mediante el modificador “-o”, por ejemplo:

`ssh -o "ForwardAgent yes" usuario@172.22.200.175`

## Configuración del servidor

Tal como vimos en la instalación y configuración elemental del servidor ssh, podemos ver las opciones de configuración que se aplican a nuestro servidor mediante:

`sshd -T |less`

Vamos a comentar algunas que pueden ser interesantes porque se modifican con cierta frecuencia.

### Port 22

Puerto tcp en el qu va a escuchar peticiones el servidor ssh, por defecto es el 22/tcp, pero puede cambiarse sin problema.

### AddressFamily any|inet|inet6

El protocolo o protocolos de red a utilizar, puede ser inet(IPv4), inet6 (IPv6) o any(ambos) que es la opción por defecto.

### ListenAddress

Si queremos especificar que se permitan conexiones sólo a través de una dirección IP concreta (IPv4/IPv6).

### logingracetime, maxauthtries y maxsessions

Para especificar el tiempo que se espera para que el usuario se acceda con éxito al sistema, el número máximo de veces que puede introducir la contraseña y el número máximo de sesiones en la misma conexión.

### loglevel y syslogfacility

Para controlar el nivel de detalle que mostrar en los logs del sistema, así como la “facility” a utilizar.

### hostkey

Fichero o ficheros que especifican la clave o claves privadas a utilizar por el servidor.

## Utilización de SCP

El cliente ssh incluye también el comando “scp” que permite copiar ficheros entre entre equipos mediante ssh y hacerlo de forma equivalente a la utilización local del clásico comando “cp”.

No es necesario que el equipo origen o destino sea el equipo desde el que se ejecuta scp, tanto origen como destino pueden ser equipos a los que pueda acceder el usuario utilizando ssh.

La sintaxis general de scp es:

`scp [[user@]host1:]file1 [[user@]host2:]file2`

### Transferir un fichero local a un equipo remoto

`scp /etc/resolv.conf usuario@172.22.200.175:resolv.conf.local`

El fichero remoto quedará como /home/usuario/resolv.conf.local ya que : indica el punto de acceso al equipo (/home/usuario/ en este caso)

### Transferir un fichero desde un equipo remoto a mi equipo local

`scp root@172.22.200.175:/etc/shadow .`

Que guardaría el fichero /etc/shadow del equipo remoto con el nombre shadow en el directorio en el que nos encontramos

### Transferir un fichero entre dos equipos remotos

`scp root@172.22.200.175:/etc/hosts root@172.22.200.176:/etc/hosts`

Esta opción es muy potente y permite crear sencillos scripts para unificar configuraciones, por ejemplo imaginemos que queremos tener la misma configuración DNS en un conjunto de servidores, podríamos hacerlo de forma sencilla y potente con ssh mediante el siguiente script:

```sh
#!/bin/bash

for i in `seq 1 100`; do
  scp root@servidor1:/etc/resolv.conf 192.168.1.$i:/etc/resolv.conf
done
```

### Bonus track

Si utilizamos pares de claves en las conexiones, scp autocompleta el fichero origen o destino utilizando el doble tabulador

## SFTP

Al igual que scp, sftp permite transferir ficheros entre equipos remotos a través de SSH, aunque su principal diferencia es que sftp permite utilizarlo de una forma interactiva, al igual que el tradicional ftp, incluyendo los mismos comandos que éste. scp es mucho más habitual utilizarlo desde línea de comandos, mientras que sftp se puede utilizar bien desde la línea de comandos o a través de uno de los múltiples clientes ftp que lo soportan.

Es importante no confundir sftp (ssh ftp) con ftps que es una extensión del protocolo ftp añadiendo ssl para el cifrado de la conexión.

## Túneles SSH

Esta técnica, también conocida como TCP forwarding o port forwarding, permite utilizar cualquier aplicación de forma segura a través de una conexión ssh (de ahí la utilización del término túnel).

### Local forwarding

Desde nuestra máquina queremos acceder a un servicio, pero este servicio o bien no es accesible (por ejemplo por un cortafuegos que lo impide), o no es seguro hacerlo desde nuestra máquina, pero tenemos acceso a otro equipo a través de ssh y desde ese equipo sí podemos acceder al servicio que queremos o es seguro hacerlo. Vamos a verlo con un ejemplo: queremos enviar un correo desde nuestro servidor de la empresa (puerto 25/tcp), pero estamos fuera y no queremos conectarnos de forma insegura, por lo que establecemos un túnel ssh de la siguiente forma:

`ssh -f -L 1025:smtp.example.com:25 remoto.example.com -N`

```sh
# Cerrar el proceso del tunel
kill <id-proceso>
```

Esto abrirá el puerto 1025/tcp en nuestra máquina que podremos utilizar de forma segura para enviar correo, ya que se pasará a través de ssh al equipo remoto.example.com y de ahí al servidor smtp.example.com.

### Remote forwarding

Supongamos el caso contrario, en el que queremos que una máquina remota utilice un servicio de nuestra máquina, pero o bien no es accesible de forma directa o bien no es seguro hacerlo, por lo que podríamos definir una conexión ssh para realizarlo como la siguiente:

`ssh -f -L 8080:localhost:80 remoto.example.com -N`

De esa manera desde el equipo remoto, quien acceda al puerto 8080/tcp estará accesiendo al puerto 80/tcp de nuestra máquina a través de un túnel ssh.

La directiva “GatewayPorts yes|no” limita el puerto 8080 del caso anterior a que se pueda acceder sólo desde el propio equipo remoto, o bien desde cualquier equipo.

### Forwarding dinámico

Mediante este mecanismo, lo que hacemos es crear un servidor SOCKS en nuestro equipo, que permite utilizar desde nuestra máquina cualquier cliente que soporte este mecanismo, en particular un navegador web. Definiríamos un servidor socks local que sale a través de un túnel ssh con un equipo remoto de la siguiente forma:

`ssh -D 8080 -f -C -q -N remote.example.com`
