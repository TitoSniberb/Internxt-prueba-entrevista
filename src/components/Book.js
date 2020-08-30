import React, { Fragment } from 'react';

const Book = ({book}) => {

    const { name, description } = book;

    return ( 
        <div>
            <h2>
                {name}
            </h2>

            <button
            
            >EDIT</button>
        </div>    
    );
}
 
export default Book;