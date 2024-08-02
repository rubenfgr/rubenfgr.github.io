---
title: "Tar Gz Zip"
---

- **Archivos .tar.gz**

  ```sh
  # Comprimir:
  tar -czvf empaquetado.tar.gz /carpeta/a/empaquetar/
  # Descomprimir:
  tar -xzvf archivo.tar.gz
  ```

- **Archivos .tar**

  ```sh
  # Empaquetar:
  tar -cvf paquete.tar /dir/a/comprimir/
  # Desempaquetar:
  tar -xvf paquete.tar
  ```

- **Archivos .gz**

  ```sh
  # Comprimir:
  gzip -9 index.php
  # Descomprimir:
  gzip -d index.php.gz
  ```

- **Archivos .zip**

  ```sh
  # Comprimir:
  zip archivo.zip carpeta
  # Descomprimir:
  unzip archivo.zip
  ```
