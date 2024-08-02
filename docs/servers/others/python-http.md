---
title: "Python HTTP Server"
---

```sh
# Por defecto se una a todas las interfaces "0.0.0.0"
python -m http.server 8000
# A una interfaz determinada
python -m http.server 8000 --bind 127.0.0.1
# Server un directorio
python -m http.server 8000 --directory /tmp/
```
