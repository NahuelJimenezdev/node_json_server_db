# Web server en NodeJs

## Descripción del documento
```markdown
# Node JSON Server DB

Este proyecto es un paso a paso del aprendizaje del autor sobre la creación de un servidor en Node.js utilizando `json-server` y la integración de una base de datos JSON. El repositorio incluye la configuración de un servidor web básico con Express y el uso de `json-server` para manejar datos en formato JSON.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para crear servidores web en Node.js.
- **Mongoose**: Biblioteca para modelar datos en MongoDB.
- **json-server**: Herramienta para crear un servidor REST API basado en un archivo JSON.
- **dotenv**: Paquete para manejar variables de entorno.
- **env-var**: Paquete para validar y tipar variables de entorno.
- **Body-parser**: Middleware para manejar datos en el cuerpo de las solicitudes.


## Estructura del Proyecto

- **`00_primeros_pasos/`**: Contiene la configuración inicial y ejemplos básicos de Node.js.
- **`01_json-server/`**: Implementación de `json-server` para crear una API REST.
- **`02_web-server/`**: Configuración de un servidor Express que interactúa con `json-server`.
- **`03_web-server-moderno/`**: Implementación de un servidor Express moderno utilizando módulos ES6.
- **`04_proyecto_node_crud/`**: Proyecto CRUD para gestionar libros utilizando Express y MongoDB.
  - **`src/app.js`**: Archivo principal que inicia el servidor y conecta a la base de datos.
  - **`src/models/book.model.js`**: Modelo de Mongoose para los libros.
  - **`src/routes/book.routes.js`**: Rutas para manejar las operaciones CRUD de los libros.
- **`public/`**: Archivos estáticos servidos por el servidor, incluyendo HTML, CSS y JavaScript.
- **`.env`**: Archivo de configuración para variables de entorno.
- **`.gitignore`**: Archivos y carpetas que deben ser ignorados por Git.
- **`docker-compose.yml`**: Configuración para ejecutar el proyecto en un contenedor Docker.

```
## Instalación

Para ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/NahuelJimenezdev/node_json_server_db.git```
2.  Instala las dependencias:
    
    ```bash
    npm install
    ```
    
3.  Inicia el servidor:
    
    ```bash
    npm start
    
    ```
    

El servidor estará corriendo en el puerto configurado, por defecto `3000`.

## Contribuciones

Este repositorio está en constante evolución, ya que es parte de un curso en curso. Se agregarán más secciones conforme avance el aprendizaje del autor.

## Licencia

Este proyecto no tiene una licencia definida aún.

```

Este `README.md` está basado en la estructura y los comentarios presentes en tu repositorio. Puedes ir actualizándolo a medida que avances con más secciones y características. 😊

```