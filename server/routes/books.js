// Routes for books
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { check } = require('express-validator');

// Add a new book api/books
router.post('/',
    [
        check('name', 'The name of the book is mandatory.').not().isEmpty(),
        check('description', 'The description of the book is mandatory.').not().isEmpty()
    ],
    bookController.addBook
);

// Get all books
router.get('/',
    bookController.getBooks
);

// Modify a book api/books
router.put('/:id',
    [
        check('name', 'The name of the book is mandatory.').not().isEmpty()
    ],
    bookController.updateBook
);

module.exports = router;