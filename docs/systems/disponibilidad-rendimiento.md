---
title: "Alta disponibilidad y rendimiento"
---

Referencia: [http://www.revistasbolivianas.org.bo/scielo.php?script=sci_arttext&pid=S1234-12342014000100004&lng=es&nrm=iso](http://www.revistasbolivianas.org.bo/scielo.php?script=sci_arttext&pid=S1234-12342014000100004&lng=es&nrm=iso)

## Alta disponibilidad

La alta disponibilidad permite que un servicio funcione correctamente ante un fallo software o hardware.
Se puede implementar mediante dos configuraciones:

- **Hardware**: uso de sistemas redundantes de alimentación, discos duros (RAID), de red, etc. Si algo falla el sistema seguirá funcionando y el dispositivo defectuso se cambia en caliente.
- **Software**: varios servidores denominados "nodos" conectados entre sí de manera que, ante un fallo hardware/software, el servicio o servicios ofrecidos por el nodo fallido son retomados por otro nodo del clúster.

![http://www.revistasbolivianas.org.bo/img/revistas/jit/n14/a04_figura03.gif](http://www.revistasbolivianas.org.bo/img/revistas/jit/n14/a04_figura03.gif)

---

## Alto rendimiento

El alto rendimiento permite distribuir la carga de un servicio entre varios equipos.
Un cluster de alto rendimiento esta compuesto por nodos, y cada nodo se encarga de realizar una serie de tareas que se van distribuyendo dependiendo de diversos factores: equipos activos, rendimiento, etc.

**Características importantes:**

- Evita la saturación de la máquina
- Recursos gestionados de manera inteligente repartiendo tareas entre los nodos para impedir la sobrecarga
- Mayor capacidad de gestión
- Escalabilidad
- Ampliación

![http://www.revistasbolivianas.org.bo/img/revistas/jit/n14/a04_figura04.gif](http://www.revistasbolivianas.org.bo/img/revistas/jit/n14/a04_figura04.gif)

---

## Herramientas

**De servicios**

La alta disponibilidad de servicios suele ir acompañada de ciertos complementos para un correcto funcionamiento como pueden ser: direccionamiento IP, reglas de firewall, copias de seguridad, etc. Por ejemplo, un servicio de "directorio activo" donde deben acceder todos los usuarios de la red.

**De datos**

La alta disponibilidad de datos es fundamental y suele estar integrada con la de servicios. Debe disponer de varias localizaciones de los datos consiguiendo consistencia e integridad.

| Nombre                       | Alta disponibilidad | Alto rendimiento | Características | Licencia    | URL                                                     |
| ---------------------------- | ------------------- | ---------------- | --------------- | ----------- | ------------------------------------------------------- |
| DRBD                         | X                   | X                | Datos           | GPLv2       | https://linbit.com/drbd/                                |
| FreeNAS                      | X                   | X                | NAS             | BSD         | www.freenas.org                                         |
| Openfiler                    | X                   | X                | SAN-NAS         | GPLv2       | www.openfiler.org                                       |
| NAS Lite-2                   | X                   | X                | NAS             | Propietario | www.serverelements.com/naslite-2-usb.php                |
| Mdadm                        | X                   | X                | RAID            | GPLv2       | http://neil.brown.name/blog/mdadm                       |
| MySQL Replication            | X                   |                  | Base de datos   | GPLv2       | http://dev.mysql.com/doc/refman/5.0/es/replication.html |
| Slony-l                      | X                   |                  | Base de datos   | BSD         | www.slony.info                                          |
| HA-OSCAR                     | X                   |                  | Servicio        | GPL         | http://xcr.cenit.latech.edu/ha-oscar/                   |
| Linux-HA                     | X                   |                  | Servicio        | GPL         | www.missioncriticallinux.com/projects/kimberlite/       |
| Kimberlite                   | X                   |                  | Servicio        | GPL         | www.missioncriticallinux.com/projects/kimberlite/       |
| LifeKeeper                   | X                   |                  | Servicio        | Propietario | www.steeleye.com                                        |
| HP Serviceguard              | X                   |                  | Servicio        | Propietario | https://docs.hp.com/es/5991-1233/ch05s09.html           |
| RedHat Cluster Server        | X                   | X                | Servicio        | Propietario | www.redhat.com/cluster_suite/                           |
| Veritas Cluster Server       | X                   |                  | Servicio        | Propietario | www.symantec.com/es/mx/business/cluster-server          |
| KeepAlived                   | X                   |                  | Servicio        | GPL         | www.keepalived.org                                      |
| Linux Virtual Server         |                     | X                | Servicio        | GPL         | www.linuxvirtualserver.org                              |
| Linux Virtual Server Manager |                     | X                | Servicio        | GPL         | www.linuxvirtualserver.org                              |
| UltraMonkey                  | X                   | X                | Servicio        | GPL         | www.ultramonkey.org                                     |
| Bind9                        |                     | X                |
