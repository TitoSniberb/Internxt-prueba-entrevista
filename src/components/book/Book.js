import React from 'react';
import Modal from '../modal/Modal';
import '../Styles.scss';

const Book = ({book}) => {

    const { name } = book;

    return ( 
        <div className="container">
            <Modal 
                className="bookName"
                book={book}
            />

            <button className="btn">
                EDIT
            </button>
        </div>    
    );
}
 
export default Book;