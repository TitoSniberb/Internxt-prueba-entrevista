import React, { useContext, useEffect } from 'react';
import { DescriptiveModal, EditableModal } from '../modals/Modals';
import BookContext from '../../context/books/bookContext';
import '../Styles.scss';

const Book = ({book}) => {

    // Extract the necessary from the context
    const bookContext = useContext(BookContext);
    const { getCurrentBook } = bookContext;

    const { _id } = book;
    
    return ( 
        <div className="container">
            <DescriptiveModal
                book={book}
            />

            <button className="transparente" onClick={() => getCurrentBook(_id)}>
                <EditableModal 
                    book={book}
                />
            </button>
        </div>    
    );
}
 
export default Book;