import React, { useContext, useEffect } from 'react';
import Book from './Book';
import BookContext from '../../context/books/bookContext';

const BookList = () => {

    // Extract the necessary from the context
    const bookContext = useContext(BookContext);
    const { books, getBooks } = bookContext;

    // Get books when the component loads
    useEffect(() => {
        getBooks();
    }, []);

    if(!books) return <p>No hay ningun libro actualmente registrado</p>

    return ( 
            <ul>
                { books.map(book => (
                    <Book 
                        book={book}
                    />
                    ))
                }
            </ul>
     );
}
 
export default BookList;