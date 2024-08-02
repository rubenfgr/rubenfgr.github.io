---
title: "Nmap"
---

- **Barrido de ping**

  ```sh
  nmap -sP 192.168.0.*
  nmap -sn 192.168.0.*
  ```

- **Escaneo de puertos**

  ```sh
  nmap -p 80, 21 192.168.0.*
  nmap -p 21-80 ejemplo.com
  nmap -p 21-23, 1000-2000 192.168.1.1-14
  ```

- **Escaneo ARP**

  ```sh
  nmap -sP -PR 192.168.*.*
  namp -sn --disable-arp-ping 192.168.0.*
  ```

- **Sondeo más agresivo**

  > NULL (-sN), FIN (-sF) y Xmas (-sX)
  > -T paranoid o 0, sneaky o 1, polite o 2, normal o 3, agressive o 4 e insane o 5
  > -T4 recomendado para red local

  - NULL

  ```sh
  nmap -v -sN -p 8080 server1.ejemplo.com
  nmap -sN -T5 192.168.1.4
  ```

  - FIN

  ```sh
  nmap -sF -T4 192.168.1.4-8
  nmap -sF -T2 192.168.1.6
  ```

  - Xmas

  ```sh
  nmap -sX -T2 -v2 -p 80 192.168.1.4
  ```

- **Scripts**

  - auth: ejecuta todos sus scripts disponibles para autenticación
  - default: ejecuta los scripts básicos por defecto de la herramienta
  - discovery: recupera información del target o víctima
  - external: script para utilizar recursos externos
  - intrusive: utiliza scripts que son considerados intrusivos para la víctima o target
  - malware: revisa si hay conexiones abiertas por códigos maliciosos o backdoors (puertas traseras)
  - safe: ejecuta scripts que no son intrusivos
  - vuln: descubre las vulnerabilidades más conocidas
  - all: ejecuta absolutamente todos los scripts con extensión NSE disponibles

  ```sh
  nmap -f -sS -sV --script auth 192.168.4.4
  ```

- **Descubrir vulnerabilidades**

  ```sh
  # SMB ms08-067
  nmap -p 445 --script smb-vuln-ms08-067 192.168.4.*
  # SSH fuerza bruta
  nmap --script ssh-brute.nse 192.168.41.14
  ```
