import React, { useContext, useEffect, useState } from 'react';
import BookContext from '../../context/books/bookContext';
import Book from '../book/Book';
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";
import { DescriptiveModal, EditableModal} from '../modals/Modals';
import { 
    NavigateBefore,
    NavigateNext,
} from '@material-ui/icons';
import '../Styles.scss';

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
    const { books, currentbook, error, getBooks, getCurrentBook, updateBook } = bookContext;

    const [ gotoslide, setGoToSlide ] = useState(300);
    const [ opendesc, setOpenDesc ] = useState(false);
    const [ openedit, setOpenEdit ] = useState(false);

    let currentKey;

    useEffect(() => {
        onMount();
        getCurrentBook(slides[index].key);
    }, [gotoslide]);

    // In case of an empty input, we save the initial state of the book
    const [ initialbook, setInitialBook ] = useState(currentbook[0]);

    const index = Math.abs(gotoslide % slides.length);

    const onMount = async () => {
        await getBooks();

        currentKey = slides[index].key;
        await getCurrentBook(currentKey);
    }

    if(currentbook.length === 0) return <div>loading</div>;

    // Open modal
    const handleOpenDescriptive = () => {
        setOpenDesc(true);
    };

    const handleOpenEditable = () => {
        setOpenEdit(true);
    };

    // Close modal
    const handleCloseDescriptive = () => {
        setOpenDesc(false);
    };

    const handleCloseEditable = () => {
        setOpenEdit(false);
    };

    if(!books) return <p>There is no books to search for</p>

    return ( 
        <div className="container main">

            <div className="row carousel">
                <a style={{width: '100%', height: '100%'}} onClick={handleOpenDescriptive}>
                    <Carousel 
                        slides={slides} 
                        goToSlide={gotoslide}
                        offsetRadius={3}
                        animationConfig={config.gentle}
                    />
                </a>

                <DescriptiveModal
                    open={opendesc}
                    handleClose={handleCloseDescriptive}
                    book={currentbook}
                />
                
                <EditableModal 
                    open={openedit}
                    handleClose={handleCloseEditable}
                    book={currentbook}
                />

                <div
                    className="icons"
                >
                    <a  className="iconcontainer" 
                        onClick={() => {
                            setGoToSlide(gotoslide - 1)
                        }}
                    >
                        <NavigateBefore className="icon" />
                    </a>

                    <a className="imagecontainer" onClick={handleOpenEditable}>
                        <img className="image" />
                        <span className="text">EDIT</span>
                    </a>

                    <a  className="iconcontainer"
                        onClick={() => {
                            setGoToSlide(gotoslide + 1);
                        }}
                    >
                        <NavigateNext className="icon" />
                    </a>
                </div>

            </div>

            <div className="row">
                    <Book
                        book={currentbook}
                    />
            </div>

        </div>
     );
}
 
export default BookList;