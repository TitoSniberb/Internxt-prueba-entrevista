// Routes for books
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { check } = require('express-validator');

// Modify a book api/books
router.put('/:id', () => {
    [
        check('name', 'The name of the book is mandatory.').not().isEmty()
    ],
    bookController.updateBook
});

module.exports = router;