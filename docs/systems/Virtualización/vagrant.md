---
title: "Vagrant"
---

> Aplicación para crear maquinas virtuales escrito en rubi.
>
> Funciona a base de boxes (SO)
>
> Boxes ya configurados: vagrantcloud
>
> Requiere adaptadores: virtualbox, vmware, etc.

## Comandos

- Iniciar un Vagrantfile

  ```sh
  vagrant init
  vagrant up
  ```

- Mostrar la configuración de todas las máquinas virtuales

  ```sh
  vagrant global-status
  ```

- Destruir una máquina virtual

  ```sh
  vagrant destroy <ID>
  ```

- Mostrar las boxes cacheadas

  ```sh
  vagrant box list
  ```

## WSL

```sh
export VAGRANT_WSL_ENABLE_WINDOWS_ACCESS="1"
export PATH="$PATH:/mnt/c/Program Files/Oracle/VirtualBox"
```
