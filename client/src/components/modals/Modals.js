import React, { useContext, useState, useEffect } from "react";
import Popup from "reactjs-popup";
import BookContext from '../../context/books/bookContext';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import '../Styles.scss';

export const DescriptiveModal = ({open, handleClose, book}) => {

    const { name, description } = book[0];
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className='newmodal'
            open={open}
            onClose={handleClose}
            closeAfterTransition
        >
            <Fade in={open}>
                <div className='paper'>
                    <span className="title" id="transition-modal-title">{name}</span>
                    <span className="text" id="transition-modal-description">{description}</span>
                </div>
            </Fade>
        </Modal>
    );
}

export const EditableModal = ({open, handleClose, book}) => {

    // Extract the necessary from the context
    const bookContext = useContext(BookContext);
    const { error, updateBook, getBooks, showError } = bookContext;

    const [ newbook, setNewBook ] = useState({
        ...book[0]
    })
    const { _id, name, description } = newbook;

    const handleChange = e => {
        setNewBook({
            ...newbook,
            [e.target.name]: e.target.value
        });
    };
    
    // As useState is asnycrhonous, the last typed character will not save until the next
    // render, so useEffect is needed, also, we must first check if there is any entries
    // to prevent unwanted loops
    useEffect(() => {
        console.log('this is bok',book[0])
        
        // We make the validation
        if(Object.entries(newbook).length !== 0){
            if(name.trim().length === 0 || description.trim().length === 0){
                showError(_id);

            } else {
                updateBook(newbook);
                getBooks();
            }
        }
    }, [newbook]);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className='newmodal'
            open={open}
            onClose={handleClose}
            closeAfterTransition
        >
            <Fade in={open}>
                <div className="paper-edit">

                    <div className="row-name">
                        <span className="title-desc">Change the name</span>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className="input-name"
                            placeholder='Enter the new desired name of the book'
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="row-desc">
                        <span className="text-desc">Change the description</span>
                        <textarea
                            type="textarea"
                            name="description"
                            value={description}
                            className="input-desc"
                            placeholder='Enter the new desired description of the book'
                            onChange={handleChange}
                        />
                    </div>

                </div>
            </Fade>
        </Modal>
    );
}