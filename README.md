# Proyecto de Álbum de Video de YouTube

Este proyecto es una aplicación web que permite gestionar una lista de videos de YouTube, incluyendo la posibilidad de añadir nuevos videos, ver su información y reproducirlos, así como eliminar aquellos que ya no son de interés.

## Herramientas

La aplicación utiliza las siguientes tecnologías:

- Vue3: un framework de JavaScript para construir interfaces de usuario.
- API de YouTube: una API pública proporcionada por Google que permite acceder a información sobre videos de YouTube, como su título, descripción, fecha de publicación, vistas, etc.
- Firebase: una plataforma de desarrollo de aplicaciones móviles y web que proporciona servicios como autenticación de usuarios, almacenamiento de datos en la nube, análisis, etc.

## Requerimientos

Node > 12

Este proyecto esta realizado con Vue3. 
* Terner previamente instalado el CLI de Vue3
```
npm install -g @vue/cli
``` 
[Documentación de Vue3](https://cli.vuejs.org/guide/installation.html)

## Instalación

Clonar el repositorio
```
https://github.com/carlos-figueroa-86/prueba-album-youtube.git
```

Instalar las dependencias
```
npm install
```

Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno, reemplazando los valores entre corchetes por tus propias credenciales:

```
#ApiKey de youtube
VUE_APP_API_KEY=''

# Credenciales de firebase
VUE_APP_FIREBASE_API_KEY=''
VUE_APP_FIREBASE_AUTH_DOMAIN=''
VUE_APP_FIREBASE_PROJECT_ID=''
VUE_APP_FIREBASE_STORAGE_BUCKET=''
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=''
VUE_APP_FIREBASE_APP_ID=''
VUE_APP_FIREBASE_MEASUREMENT_ID=''

# Nombre de la collection de firebase
VUE_APP_FIREBASE_NAME_COLLENTION=''
```

Inicia la aplicación en modo de desarrollo:
```
npm run serve
```

Abre tu navegador web y accede a la dirección: [http://localhost:8080](http://localhost:8080) para ver la aplicación en funcionamiento.

## Funcionalidades

La aplicación consta de tres funcionalidades principales:
- **Página principal**: muestra una lista de todos los videos almacenados en la base de datos de Firebase, así como un formulario para añadir nuevos videos.
- **Página de reproducción**: muestra información adicional sobre un video en particular, como su título, descripción. También incluye un reproductor de video para ver el contenido del video.
- **Eliminar video**: permite eliminar un video de la lista.

Para añadir un nuevo video, simplemente completa el formulario de la página principal con la URL del video de YouTube que deseas agregar. La aplicación utilizará la API de YouTube para obtener información sobre el video y almacenará los datos relevantes en la base de datos de Firebase.


![Lista de videos](https://db-album-youtuve.web.app/screenshot/capture-eliminar.png)
![Lista de videos](https://db-album-youtuve.web.app/screenshot/capture-evidencia-error.png)


Para ver más detalles sobre un video, haz clic en la imagen correspondiente de la lista de la página principal. Esto abrira un modal con el detalle correspondiente, donde podrás ver la información adicional y reproducir el video.

![Lista de videos](https://db-album-youtuve.web.app/screenshot/capture-description-video.png)

Si deseas eliminar un video de la lista, haz clic en el botón "Eliminar" del video a eliminar en la página de principal. La aplicación te pedirá confirmación antes de eliminar definitivamente el video de la base de datos de Firebase.

![Lista de videos](https://db-album-youtuve.web.app/screenshot/capture-eliminar.png)
