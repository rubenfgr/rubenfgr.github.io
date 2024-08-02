---
title: "Alternatives"
---

Permite cambiar entre versiones de aplicaciones

- **Opciones**

```sh
alternatives [options] --remove name path

alternatives [options] --set name path

alternatives [options] --auto name

alternatives [options] --display name

alternatives [options] --config name
```

- **Ejemplos con versiones de Java**

```sh
update-alternatives --install /usr/bin/java java /usr/lib/jvm/<java-version>/bin/java
update-alternatives --install /usr/bin/java java /usr/lib/jvm/<java-version-2>/bin/java

update-alternatives --config java
```

> En este momento se puede seleccionar la versión de java deseada a través de su ID
