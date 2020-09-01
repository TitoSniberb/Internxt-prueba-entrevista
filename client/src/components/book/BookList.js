import React, { useContext, useEffect, useState } from 'react';
import BookContext from '../../context/books/bookContext';
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";

const BookList = () => {

    const [ gotoslide, setGoToSlide ] = useState(0)
    const slides = [
        {
            key: "5f4d261ec4ed3d4f043ccd18",
            content: <img src={require('../../assets/images/1984.jpg')} alt="Book cover" />
        },
        {
            key: "5f4d2bcadcd81309080a6256",
            content: <img src={require('../../assets/images/I am not a serial killer.jpg')} alt="Book cover" />
        },
        {
            key: "5f4d2bf5dcd81309080a6258",
            content: <img src={require('../../assets/images/mr monster.jpg')} alt="Book cover" />
        },
        {
            key: "5f4d2b5a361cab25e038c397",
            content: <img src={require('../../assets/images/Sandokan.jpg')} alt="Book cover" />
        },
        {
            key: "5f4d2be0dcd81309080a6257",
            content: <img src={require('../../assets/images/The case of Charles Dexter Ward.jpg')} alt="Book cover" />
        }
    ].map((slide, index) => {
        return {...slide, onClick: () => {
            getCurrentBook(slide.key);
        }}
    });

    // Extract the necessary from the context
    const bookContext = useContext(BookContext);
    const { books, currentbook, getBooks, getCurrentBook } = bookContext;

    const [ newbook, setNewBook ] = useState({
        name: '',
        description: ''
    });
    const { name, description } = newbook;

    // Get books when the component loads
    useEffect(() => {
        getBooks();
    }, [getBooks]);

    if(!books) return <p>There is no books to search for</p>

    return ( 
        <div className="container main">

            <div className="carousel">
                <Carousel 
                    slides={slides} 
                    goToSlide={gotoslide}
                    offsetRadius={3}
                    animationConfig={config.gentle}
                />
            </div>

            <div
                style={{
                    margin: "0 auto",
                    marginTop: "2rem",
                    width: "50%",
                    display: "flex",
                    justifyContent: "space-around"
                }}
            >
                <div>
                    <button
                        onClick={() => setGoToSlide(gotoslide - 1)}
                    >Left Arrow</button>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <button
                        onClick={() => setGoToSlide(gotoslide + 1)}
                    >Right Arrow</button>
                </div>
            </div>

            <div className="row">
                    {currentbook ? <h2> {name} </h2> : <h2>Click on a book to show it's info!</h2>} 
            </div>

                {/* <div style={{
                    margin: "0 auto",
                    marginTop: "2rem",
                    width: "50%",
                    display: "flex",
                    justifyContent: "space-around"
                    }}
                >

                </div> */}

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