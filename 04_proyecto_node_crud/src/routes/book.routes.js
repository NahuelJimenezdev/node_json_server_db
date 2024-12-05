const express = require('express')
const router = express.Router()
const Book = require('../models/book.model')


// MIDDELEWARE
// TOMA UN SOLO LIBRO, Y ESA FUNCION LA UTILIZA EN OTRA LLAMADA
const getBook = async (req, res, next) => {
  let book;
  const { id } = req.params;

  // como estamos trbajando con mongo, queremos que este chequee que corresponde a un id valido
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).json(
      {
        message: 'El ID del libro no es válido'
      }
    )
  }

  try {
    book = await Book.findById(id);
    if(!book) {
      return res.status(404).json(
        {
          message: 'Libro no encontrado'
        }
      )
    }
  } catch (error) {
    return res.status(500).json(
      {
        message: error.message
      }
    )
  }

  res.book = book;
  next();

}


// OBTENER TODOS LOS LIBROS
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    console.log('GET ALL', books)
    if(books.length === 0) {
      return res.status(204).json([])
    }
    res.json(books)
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
})

// OBTENER UN LIBRO
router.get('/:id', getBook, async (req, res) => {
  res.json(res.book);
})

// CREAR UN NUEVO LIBRO (RECURSOS)
router.post('/', async (req, res) => {
  const { title, author, genre, publication_date } = req?.body
  if(!title || !author || !genre || !publication_date) {
    return res.status(400).json({ message: 'Falta información, los campos son obligatorios' })
  }

  const book = new Book(
    {
      title,
      author,
      genre,
      publication_date
    }
  )

  try {
    const newBook = await book.save()
    console.log(newBook)
    res.status(201).json(newBook)
  } catch (error) {
    res.status(400).json({ message: error.message})
  }
  
})

// ACTUALIZAR UN LIBRO
router.put('/:id', getBook, async (req, res) => {
  try {
    const book = res.book
    book.title = req.body.title || book.title
    book.author = req.body.author || book.author
    book.genre = req.body.genre || book.genre
    book.publication_date = req.body.publication_date || book.publication_date

    const updatedBook = await book.save()
    res.json(updatedBook)
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
})

// ACTUALIZAR UNA SECCIÓN DEL LIBRO
router.patch('/:id', getBook, async (req, res) => {

  if (!req.body.title && !req.body.author && !req.body.genre && !req.body.publication_date) {
    return res.status(400).json({ message: 'No puedes modificar el id del libro, debe haber al menos uno de estos campos: Título, Autor, Género o fecha de publicación' })
  }

  try {
    const book = res.book
    book.title = req.body.title || book.title
    book.author = req.body.author || book.author
    book.genre = req.body.genre || book.genre
    book.publication_date = req.body.publication_date || book.publication_date

    const updatedBook = await book.save()
    res.json(updatedBook)
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
})

// ELIMINAR UN LIBRO
router.delete('/:id', getBook, async (req, res) => {
  try {
    const book = res.book
    await res.book.deleteOne({
      _id: book._id
    })
    res.json({ message: 'Libro eliminado exitosamente' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router;