---
title: "Eliminar GRUB"
---

1. ve a cmd con privilegios de administrador

2. abre diskpart y escribe "list disk" y selecciona el disco donde instalaste el sistema operativo escribiendo "sel disk x" donde x es el numero del disco que viste

3. escribe "list vol" y busca la particion de boot, generalmente es formato FAT32 y en la info aparece como system

4. selecciona el volumen donde este el boot escribiendo "sel vol x" donde x es el numero de volumen que viste

5. luego asignale una letra a ese volumen escribiendo "assign letter=X" donde x es la letra que le quieras asignar, luego escribes "exit" para salir de diskpart

6. ahora en cmd nuevamente escribes "cd /d X:" o simplemente "cd X:" donde x es la letra que hayas escogido en el paso anterior

7. escribe "ls", te mostrará una lista de las carpetas y archivos en ese volumen, deberian ser pocos

8. escribe "ls EFI", dentro de esta carpeta está el grub, luego escribe "cd EFI"

9. escribe "rmdir/s PhoenixOS" o simplemente "rmdir PhoenixOS" si estas en powershell. Luego escribe "y" cuando te salga una pregunta de confirmacion. Con eso deberias haber eliminado el boot de phoenix os
