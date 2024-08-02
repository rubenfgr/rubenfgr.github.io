---
title: "EMQX"
---

## SSL/TLS

### Letsencrypt - Ubuntu

1. **Instalar Certbot**

   ```sh
   sudo apt-get install certbot**
   ```

2. **Crear un certificado para el dominio a utilizar**

   ```sh
   sudo certbot certonly --standalone -d example.com -d emqx.example.com
   ```

3. **Verificar certificado con OpenSSL**

   ```sh
   openssl erify -CAfile /etc/letsencrypt/live/<DOMINIO>/chain.pem
   # Debería dar un 'OK'
   ```

- **Dashboard**

  Modificar "/etc/eqmttd/plugins/emq_dashboard.conf"

  ```sh
  dashboard.listener.https = 18084
  dashboard.listener.https.access.1 = permitir todos los
  dashboard.listener.https.acceptors = 2
  dashboard.listener.https.max_clients = 512
  dashboard.listener.https.access.1 = permitir todos
  ## sustituya el \$ dominio con su único
  dashboard.listener.https.keyfile = /etc/letsencrypt/live/$domain/privkey.pem
  dashboard.listener.https.certfile = /etc/letsencrypt/live/$domain/fullchain.pem
  ```

- **WSS**

  Modificar "/opt/emqx/etc/emqx.conf"

  ```sh
  listener.wss.external.keyfile = /etc/letsencrypt/live/$domain/privkey.pem
  listener.wss.external.certfile = /etc/letsencrypt/live/$domain/fullchain.pem
  ```

- **MQTT/SSL**

  Modificar "/opt/emqx/etc/emqx.conf"

  ```sh
  listener.ssl.external.keyfile = /etc/letsencrypt/live/$domain/privkey.pem
  listener.ssl.external.certfile = /etc/letsencrypt/live/$domaion/fullchain.pem
  ```

### Self-Signed

[https://www.emqx.io/blog/emqx-server-ssl-tls-secure-connection-configuration-guide](https://www.emqx.io/blog/emqx-server-ssl-tls-secure-connection-configuration-guide)

### Docker

- **Crear volumenes para las claves**

  ```sh
   # docker-compose
   service:
     emqx:
       volumes:
         - /etc/letsencrypt/live/$domain/privkey.pem:/opt/emqx/etc/certs/privkey.pem
         - /etc/letsencrypt/live/$domain/fullchain.pem:/opt/emqx/etc/certs/fullchain.pem
  ```
