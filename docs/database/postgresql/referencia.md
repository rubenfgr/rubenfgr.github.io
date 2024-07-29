---
title: "Referencia"
---

## Configuración remota

- Comprobar ip y puerto de postgress

  ```sh
  sudo netstat -nlt | grep 5432
  ```

- Modificar el archivo postgresql.conf
- Modificar la linea:

  ```conf
  listen_addresses = 'localhost'
  listen_addresses = '\*'
  ```

## Terminal

- **Conexion a una base de datos**

  ```sh
  psql -d <nombre-bd> -U <usuario>
  ```

- **Crear backup**

  ```sh
  pg_dump -h localhost -p 5432 -U postgres -d test > backup.sql
  ```

- **Crear un backup remoto de un contenedor al host**

  ```sh
  docker exec -ti postgres_test bash -c "pg_dump -h localhost -p 5432 -U postgres -d test" > backup.sql
  ```
