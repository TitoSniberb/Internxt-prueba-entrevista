import React, { useContext } from 'react';
import { DescriptiveModal } from '../modals/Modals';
import BookContext from '../../context/books/bookContext';
import '../Styles.scss';

const Book = ({book}) => {

    // Extract the necessary from the context
    const bookContext = useContext(BookContext);
    const { getCurrentBook } = bookContext;

    const handleOnClick = id => {
        getCurrentBook(id);
    }

    return ( 
        <div className="container">
            <DescriptiveModal
                book={book}
                className="bookName"
            />

            <button 
                className="btn"
                onClick={() => handleOnClick(book.id)}
            >
                EDIT
            </button>
        </div>    
    );
}
 
export default Book;