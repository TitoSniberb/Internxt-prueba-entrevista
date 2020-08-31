import React, { useContext, useState } from "react";
import Popup from "reactjs-popup";
import BookContext from '../../context/books/bookContext';
import '../Styles.scss';

export const DescriptiveModal = ({book}) => {

    const bookContext = useContext(BookContext);

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

export const EditableModal = () => {

    const [ book, setBook ] = useState({
        name: '',
        description: '',
    });

    const { name, description } = book;

    const handleChange = e => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        }) 
    };

    return (
        <Popup
            trigger={<button className="btn"> EDIT </button>}
            modal
            closeOnDocumentClick
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