---
title: "Referencia"
---

## Conexión

- **Conectar a la base de datos con usuario + dirección + pw**

  ```sh
    mysql -u <nombre-usuario> -h <IP-servidor-mysql> -p<pw> --port <puerto>
  ```

---

## Consola MySQL

- **Mostrar las bases de datos existentes**

  ```sql
  show databases;
  ```

- **Cambiar contraseña root**

  ```sql
  ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'yourpasswd';
  ```

---

## Backups

- **Crear backups de una db**

  ```sh
  mysqldump -u root -h 127.0.0.1 -p12345678 db_schema > dump.sql
  ```

- **Importar un backup a un schema existente**

  ```sh
  mysql -u root -h 127.0.0.1 -p schema_existente < dump.sql
  ```
