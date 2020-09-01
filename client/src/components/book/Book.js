import React, { useContext, Fragment } from 'react';
import { DescriptiveModal, EditableModal } from '../modals/Modals';
import BookContext from '../../context/books/bookContext';
import '../Styles.scss';

const Book = ({book}) => {

    const { name, description } = book[0];
    
    return ( 
           <Fragment>
               <span className="title-main">
                    {name}
               </span>

               <span className="text-main">
                    {description}
               </span>
           </Fragment>
    );
}
 
export default Book;