---
title: "Docker en ARM"
---

## Docker & docker-compose

Algunas imagenes deben ser construidas bajo una distribución base para la arquitectura ARM

- Instalación

```sh
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker pi
docker run hello-world
sudo apt-get install -y libffi-dev libssl-dev
sudo apt-get install -y python3 python3-pip
sudo apt-get remove python-configparser
sudo pip3 -v install docker-compose
```
