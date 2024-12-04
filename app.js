// 01
// primera prueba con nodeJs
// console.log("Hola Mundo");  

//  02
// importanción desde importaciones/functios.js
// import { getAuthor, getTitle } from './01_importanciones/functions.js'; 

// console.log(getTitle());
// console.log(getAuthor('Sergi code'));

// 03
// instalamos el paquete de dotenv para poder variables de entorno en desarrollo
// instalamos el paquete de env-var para poder hacer el tipado y pintar lo que necesitamos detallar
// import { config } from "dotenv";
// import env from "env-var";

// config()
// const PORT  = env.get('PORT').required().asPortNumber();
// console.log(`El servidor esta corriendo por el puerto: ${PORT}`);

// console.log(process.env.PORT);
// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASS);

// 04
// contenido 02_web-server

// const { envs } = require('./02_web-server/config/env')
// const { startServer } = require('./02_web-server/server/server')

// const main = () => {
//   startServer({
//     port: envs.PORT,
//     public_path: envs.PUBLIC_PATH,
//   })
// }

// 05
// contenido 03_web-server-moderno
import { envs } from './03_web-server-moderno/config/env.js'
// a diferencia de lo forma antigua, aqui hay que agregar el tipo de archico en este caso es .js
import { startServer } from './03_web-server-moderno/server/server.js'
// a diferencia de lo forma antigua, aqui hay que agregar el tipo de archico en este caso es .js

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  })
}

// funcion agnóstica autoconvocada
// agnóstica por que no tiene nombre
// Autoconvocada porque la ejecutamos con los parentesis

(async () => {
  main()
})()
