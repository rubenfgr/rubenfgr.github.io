---
title: "ALSA"
---

**ALSA** - Advanced Linux Sound Architecture es un componente del núcleo Linux destinado a sustituir a Open Sound System, licenciado bajo GNU General Public License

- **Forzar la recarga de Alsa**

  ```sh
  sudo alsa force-reload
  sudo reboot
  ```

- **Reinstalar el audio Alsa y Pulse**

  ```sh
  sudo apt-get eliminar alsa-base pulseaudio
  sudo apt-get instalar alsa-base pulseaudio
  sudo alsa force-reload
  sudo reboot
  ```

- **Cambiar el nombre del directorio de configuración de pulse para que el solo vuelva a generar**

  ```sh
  mv ~/.config/pulse ~/.config/old_pulse
  sudo reboot
  ```

- **Probar con alsamixer y comprobar que no este nada muteado**

  ```sh
  alsamixer
  ```

- **Guardar la configuración de alsamixer**

  ```sh
  sudo alsactl store
  ```

- **Editar el archivo despachador de voz con:**

  Cambiar RUN=yes por RUN=no

  ```sh
  sudo reboot
  ```
