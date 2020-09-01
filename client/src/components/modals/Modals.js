import React, { useContext, useState, useEffect } from "react";
import Popup from "reactjs-popup";
import BookContext from '../../context/books/bookContext';
import '../Styles.scss';

export const DescriptiveModal = ({book}) => {

    // Object destructuring to get name and desc
    const { name, description } = book;
    
    return (
        <Popup
            trigger={<h2 className="bookName"> {name} </h2>}
            modal
            closeOnDocumentClick
        >
            <div className="container modal">
                <h2 className="bookName description">{name}</h2>
                <p>{description}</p>
            </div>
        </Popup>
    )   
}

export const EditableModal = ({book}) => {

    // Extract the necessary from the context
    const bookContext = useContext(BookContext);
    const { error, updateBook, showError } = bookContext;

    const [ newbook, setNewBook ] = useState({})
    const { _id, name, description } = newbook;

    // In case of an empty input, we save the initial state of the book
    const [ initialbook, setInitialBook ] = useState({})

    const handleChange = e => {
        setNewBook({
            ...newbook,
            [e.target.name]: e.target.value
        });
    };

    // As useState is asnycrhonous, the last character typed will not save until the next
    //  render, so useEffect is needed, also, we must first check if there is any entries
    // to prevent unwanted loops
    useEffect(() => {
        // We make the validation
        if(Object.entries(newbook).length !== 0){

            if(name.trim().length === 0 || description.trim().length === 0){
                showError(_id);

            } else updateBook(newbook);
        }

    }, [newbook]);

    // On modal open (for more info take a look into: https://react-popup.elazizi.com/component-api/)
    const onOpen = book => {
        setNewBook(book);
        setInitialBook(book);
    }

    // If the user closes the modal with empty inputs, the DB updates with the initial state of the book
    const onClose = () => {
        if(error) updateBook(initialbook)
    }

    return (
        <Popup
            trigger={<button className="btn"> EDIT </button>}
            modal
            closeOnDocumentClick
            onOpen={() => onOpen(book)}
            onClose={onClose}
        >
            <div className="contenedor">
                <div className="row">
                    <h2 className="label">Change the name</h2>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        className="input-text"
                        placeholder='Enter the new desired name of the book'
                        autoComplete="off"
                        onChange={handleChange}
                    />
                </div>
                
                <div className="row">
                    <h2 className="label">Change the description</h2>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        className="input-text"
                        contentEditable={true}
                        placeholder='Enter the new desired description of the book'
                        onChange={handleChange}
                    />
                </div>
            </div>
        </Popup>
    )   
}