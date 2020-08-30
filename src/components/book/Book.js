import React from 'react';
import './Styles.scss';

const Book = ({book}) => {

    const { name } = book;

    return ( 
        <div className="container">
            <h2 className="name">
                {name}
            </h2>

            <button
                className="btn"
            >EDIT</button>
        </div>    
    );
}
 
export default Book;