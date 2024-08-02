---
title: WSL 2 Memory overflow
---

## Controlar el uso de memoria con WSL 2

1. Ir a C:\users\tu-usuario y crear un archivo .wslconfig

```sh
[wsl2]
memory=4GB # Limits VM memory in WSL 2 to 4 GB
processors=4 # Makes the WSL 2 VM use two virtual processors
```

2. Reiniciar el servicio abriendo PowerShell como administrador

```sh
Restart-Service LxssManager
```
