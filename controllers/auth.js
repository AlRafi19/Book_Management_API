const express = require("express");
const Book = require("../models/book");

// Retrieve all books
exports.getAllBooks = async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Retrieve a specific book by ID
  exports.getBookById = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ error: 'Book not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Create a new book
  exports.createBook = async (req, res) => {
    try {
      const book = new Book(req.body);
      await book.save();
      res.status(201).json(book);
    } catch (err) {
      res.status(400).json({ error: 'Invalid data' });
    }
  };
  
  // Update a book by ID
  exports.updateBookById = async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ error: 'Book not found' });
      }
    } catch (err) {
      res.status(400).json({ error: 'Invalid data' });
    }
  };
  
  // Delete a book by ID
  exports.deleteBookById = async (req, res) => {
    try {
      const book = await Book.findByIdAndRemove(req.params.id);
      if (book) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: 'Book not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };