---
title: "Temperatura ventilador"
---

- **1º Script. Habilitar el PIN GPIO del ventilador en cada reinicio**

  ```bash
  #!/bin/bash
  ###########################################################################
  ### References:
  ### I/O Control:
  ### http://www.instructables.com/id/Control-Stuff-with-your-Raspberry-Pi-GPIO/?ALLSTEPS
  ### http://www.raspberrypi.org/forums/viewtopic.php?p=131069&sid=88282aaa50634ad7db83c3965625c033#p131069
  ###
  ###########################################################################
  ### Replace with your correct GPIO number
  for pin in 17; do
  gpio write $pin 0
  gpio export $pin out
  done
  exit 0
  ```

  Para hacer ejecutable este archivo, utilizamos este comando:

  ```bash
  chmod u+x OnReboot.sh
  ```

- **2º Script. Se encargará de controlar el puerto GPIO donde tienes conectado el ventilador, llamaremos a este archivo Thermostat.sh**

  ```bash
  #!/bin/bash
  ###########################################################################
  ### References:
  ### I/O Control:
  ### http://www.instructables.com/id/Control-Stuff-with-your-Raspberry-Pi-GPIO/?ALLSTEPS
  ### http://www.raspberrypi.org/forums/viewtopic.php?p=131069&sid=88282aaa50634ad7db83c3965625c033#p131069
  ###
  ### bash if/then
  ### http://www.thegeekstuff.com/2010/06/bash-if-statement-examples/
  ### http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-6.html
  ### http://www.dreamsyssoft.com/unix-shell-scripting/ifelse-tutorial.php
  ###
  ### bash sleep ()
  ### http://www.cyberciti.biz/faq/linux-unix-sleep-bash-scripting/
  ###########################################################################
  #
  SoCTemp="`sudo /opt/vc/bin/vcgencmd measure_temp | tr -d "=temp.'C"`"
  # SoCTemp=300 # Enable this line for debugging
  LowLimit=490
  HighLimit=510
  #
  echo "Low Limit :"$LowLimit
  echo "High Limit:"$HighLimit
  echo "SoC Temp  :"$SoCTemp
  ## echo "1" > /sys/class/gpio/gpio17/value
  ###########################################################################
  if [ $SoCTemp -le $HighLimit ]; then
     ### Turn on GPIO 21 off:
     echo "SoC is cool($SoCTemp), Turning off the fan in 20 seconds ..."
     sleep 20 ; echo "0" > /sys/class/gpio/gpio17/value
     echo "Done!"
     exit 0
  fi
  if [ $SoCTemp -ge $LowLimit ]; then
     ### Turn on GPIO 21 on:
     echo "SoC is getting hot ($SoCTemp), Turning on the fan now!"
     echo "1" > /sys/class/gpio/gpio17/value
     echo "Done!"
     exit 0
  fi
  ```

  > Asignar permisos de ejecución

  ```bash
  chmod u+x Thermostat.sh
  ```

- **Indicar al programador de tareas cron cuando utilizar cada script**

  ```bash
  @reboot /home/pi/OnReboot.sh &
  */1 * * * * /home/pi/Thermostat.sh &
  ```

Luego del siguiente reinicio, se ejecutará el archivo OnReboot.sh otorgando las permisologías y el archivo Thermostat.sh se ejecutará cada minuto en el background, controlando el encendido y apagado del ventilador.
