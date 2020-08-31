import React, { useContext } from "react";
import Popup from "reactjs-popup";
import BookContext from '../../context/books/bookContext';
import '../Styles.scss';

const Modal = ({book}) => {
    
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

export default Modal;