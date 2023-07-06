---
title: "Consejos"
---

1. **NUNCA hacer commit directamente a ‘master’**
   Al trabajar directamente con la rama master estamos perdiendo una de las características más destacables del trabajo con Git, la capacidad de crear ramas instantáneamente.
   Buena practica: crear una nueva rama para cosa nueva en la que trabajar, de esta manera master (o develop) siempre estará lista para cambios menores, rápidos o hotfixes.

2. **NUNCA hacer git push –force**
   Esto sobreescribe toda la estructura y secuencia de commits en el repositorio central, tirando a la basura los commits de las demás personas.
   Para evitar que alguien haga un push –force. De ser un servicio estándar utilizar:
   Git config –system receive.denyNonFastForwards true

3. **NUNCA subir archivos binarios**
   Los archivos como imágenes, binarios compilados o incluso videos son mucho más grandes que los archivos de texto de nuestro código y si hacemos commits de ellos a nuestro repositorio central el tamaño de este se volverá muy grande y lo que se busca es tener un VCS distribuido rápido de clonar y navegar entre ramas.

4. **NUNCA usar git pull**
   Haciendo git pull no tenemos oportunidad de ver que clase de cambios estamos tratando de incorporar.
   La recomendación es usar git fetch periódicamente para actualizar solo la referencia a las ramas remotas, y darle una inspección rápida y decidir qué hacer.
   Para mantener el repositorio limpio, nuestros commits locales deben estar encima de los cambios de los demás, y para esto en lugar de git pull deberemos usar git pull –rebase. Así los conflictos serán resueltos commit por commit y no todo en uno.
   No es bueno hacer un rebase de un repositorio remoto, pero en local es bueno para mantener la historia local limpio.
   Lo recomendable es crear una nueva rama para agregar nueva funcionalidad a la aplicación. En local haces un rebase para ver un historial limpio y en remoto se hace un merge commit para implementar esta funcionalidad en la rama principal.

5. **NUNCA Usar Fast Forward**
   Con git merge no aseguramos un merge commit, estos solo son necesarios cuando ambas ramas a mezclar tienen nuevos commits.
   Sin un merge commit no podemos saber que commits representan una característica sobre la que se ha trabajado sin inspeccionar uno por uno los commits y sus mensajes.

   - Sin la opción de fast forward. Se respeta el historial de commits de la rama fusionada

   - Usando fast-forward. El historial se mezcla con la rama actual y no es posible diferenciar de donde provienen los commits

   >Recomendable usar "merge –no-ff"

   Importante: Aún así, con o sin FF el código no ser verá afectado.
