const express = require("express");

const router = express.Router();

const bookControllers = require('../controllers/auth');

// Retrieve all books
router.get('/books', bookControllers.getAllBooks);

// Retrieve a specific book by ID
router.get('/books/:id', bookControllers.getBookById);

// Create a new book
router.post('/books', bookControllers.createBook);

// Update a book by ID
router.put('/books/:id', bookControllers.updateBookById);

// Delete a book by ID
router.delete('/books/:id', bookControllers.deleteBookById);

module.exports = router;