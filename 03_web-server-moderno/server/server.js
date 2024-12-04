// const express = require('express')
import express from 'express'
// const path = require('path')
import path from 'path' 

export const startServer = (options) => {
  const { port, public_path = 'public'} = options
  // console.log('port:', port)
  // console.log('public_path', public_path)

  const app = express()
  // Para poder usar middleware se usa la palabra use (express)
  // los middleware configuran nuestra applicación
  app.use(express.static(public_path)) // contenido estático que ponemos disponible

  app.get('*', (req, res) => {
    const indexPath = path.join(__dirname + `../../${public_path}/index.html`)
    res.sendFile(indexPath)
  })
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
  })
}
