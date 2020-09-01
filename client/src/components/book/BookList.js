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
    const [ opendesc, setOpenDesc ] = useState(false);
    const [ openedit, setOpenEdit ] = useState(false);

    let currentKey;

    useEffect(() => {
        onMount();
    }, []);

    useEffect(() => {
        getCurrentBook(gotoslide);
    }, [gotoslide]);

    const index = Math.abs(gotoslide % slides.length);

    const onMount = async () => {
        await getBooks();

        currentKey = slides[index].key;
        await getCurrentBook(currentKey);
    }

    if(currentbook.length === 0) return <div>loading</div>;
    
    const { name, description } = currentbook[0];

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
                    <a  style={{marginRight: '8vw'}}
                        onClick={() => {
                            setGoToSlide(gotoslide - 1)
                            //getCurrentBook(slides[index].key)
                        }}
                    >
                        <NavigateBefore className="icon" />
                    </a>

                    <a className="image" onClick={handleOpenEditable}>
                        <BorderColor className="icon" style={{fontSize: '4vw'}} />
                        <p>EDIT</p>
                    </a>

                    <a  style={{marginLeft: '8vw'}}
                        onClick={() => {
                            setGoToSlide(gotoslide + 1)
                            //getCurrentBook(slides[index].key)
                        }}
                    >
                        <NavigateNext className="icon" />
                    </a>
                </div>

            </div>

            <div className="row">
                    <h2>{name} : {description}</h2>
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