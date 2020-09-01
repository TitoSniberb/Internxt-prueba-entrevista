import React, { useContext, useEffect, Fragment } from 'react';
import Book from './Book';
import BookContext from '../../context/books/bookContext';
import Carousel from 'react-spring-3d-carousel';

const BookList = () => {

    const slides = [
        {
            key: 1,
            content: <img src={require('../../assets/images/1984.jpg')} />
        },
        {
            key: 2,
            content: <img src={require('../../assets/images/I am not a serial killer.jpg')} />
        },
        {
            key: 3,
            content: <img src={require('../../assets/images/mr monster.jpg')} />
        },
        {
            key: 4,
            content: <img src={require('../../assets/images/Sandokan.jpg')} />
        },
        {
            key: 5,
            content: <img src={require('../../assets/images/The case of Charles Dexter Ward.jpg')} />
        }
    ];

    // Extract the necessary from the context
    const bookContext = useContext(BookContext);
    const { books, getBooks } = bookContext;

    // Get books when the component loads
    useEffect(() => {
        getBooks();
    }, [getBooks]);

    if(!books) return <p>There is no books to search for</p>

    return ( 
        <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
            <Carousel 
                slides={slides} 
                goToSlide={0}
                offsetRadius={2}
            />

            {/* <ul>
                { books.map(book => (
                    <Book
                        key={book._id}
                        book={book}
                    />
                    ))
                }
            </ul> */}
        </div>
            
     );
}
 
export default BookList;