// require('dotenv').config();
// const { get } = require('env-var');

// aqui estamos mostrando la forma actualizada de importar los archicos a nuestro proyecto
// al visualizar los dos tipos de llamado de archivos son ambas validas pero no son compatibles, ya que uno maneja modulos y la otra es comun

import env from 'dotenv'
import envvar from 'env-var'

env.config();

export const envs = {
  PORT: envvar.get('PORT').required().asPortNumber(),
  PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}
