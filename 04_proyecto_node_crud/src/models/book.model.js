const mongoose = require("mongoose")

// se hace una instancia del objeto de mongoose
const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    genre: String,
    publication_date: String
  }
)

// lo vamos a exportar como un modelo de mongoose
module.exports = mongoose.model('book', bookSchema)