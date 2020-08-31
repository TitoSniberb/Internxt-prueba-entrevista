const Book = require('../models/Book');
const { validationResult } = require('express-validator');

// Add new book
exports.addBook = async (req, res) => {

    // Check if there is any error
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Extract name and description of the book
        const { name, description } = req.body;
        const bookAlreadyExists = await Book.findById(name);

        if(bookAlreadyExists) {
            return res.status(404).json({ msg: 'The book you are trying to add already exists.' });
        }

        // Add the book
        const book = new Book(req.body);
        await book.save();
        res.json({ book });

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

// Update a book
exports.updateBook = async (req, res) => {
    try {
        // Extract name and description of the book
        const { name, description } = req.body;

        // Find specific book
        let book = await Book.findById(req.params.id);
        if(!book) {
            return res.status(404).json({ msg: 'That book does not exist.' });
        }

        // Create new book
        const newBook = {};
        if(name) newBook.name = name;
        if(description) newBook.description = description;

        // Guardar la tarea
        book = await Book.findOneAndUpdate({ _id: req.params.id }, newBook, { new: true});
        
        res.json({ book });

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

