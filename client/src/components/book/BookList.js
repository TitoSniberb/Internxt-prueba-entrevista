import React, { useContext, useEffect, useState } from 'react';
import BookContext from '../../context/books/bookContext';
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";
import { DescriptiveModal, EditableModal, TransitionsModal } from '../modals/Modals';
import { 
    NavigateBefore,
    NavigateNext,
    BorderColor
} from '@material-ui/icons';
import '../styles.scss';

const BookList = () => {

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
    ]

    // Extract the necessary from the context
    const bookContext = useContext(BookContext);
    const { books, currentbook, getBooks, getCurrentBook } = bookContext;

    const [ gotoslide, setGoToSlide ] = useState(0);

    let currentKey;

    const [ open, setOpen ] = useState(false);

    const index = Math.abs(gotoslide % slides.length);

    const onMount = async () => {
        await getBooks();

        currentKey = slides[index].key;
        await getCurrentBook(currentKey);
    }

    useEffect(() => {
        onMount();
    }, []);

    // Open modal
    const handleOpen = () => {
        setOpen(true);
    };

    // Close modal
    const handleClose = () => {
        setOpen(false);
    };

    if(!books) return <p>There is no books to search for</p>

    return ( 
        <div className="container main">

            <div className="row carousel">
                <a style={{width: '100%', height: '100%'}} onClick={handleOpen}>
                    <Carousel 
                        slides={slides} 
                        goToSlide={gotoslide}
                        offsetRadius={3}
                        animationConfig={config.gentle}
                    />
                </a>
                
                <TransitionsModal
                    open={open}
                    handleClose={handleClose}
                />

                <div
                    className="icons"
                >
                    <a  style={{marginRight: '8vw'}}
                        onClick={() => {
                            setGoToSlide(gotoslide - 1)
                            getCurrentBook(slides[index].key)
                        }}
                    >
                        <NavigateBefore className="icon" />
                    </a>

                    <a className="image">
                        <BorderColor className="icon" style={{fontSize: '4vw'}} />
                        <p>EDIT</p>
                    </a>

                    <a  style={{marginLeft: '8vw'}}
                        onClick={() => {
                            setGoToSlide(gotoslide + 1)
                            getCurrentBook(slides[index].key)
                        }}
                    >
                        <NavigateNext className="icon" />
                    </a>
                </div>

            </div>

            <div className="row">
                    <h2>{}</h2>
            </div>

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