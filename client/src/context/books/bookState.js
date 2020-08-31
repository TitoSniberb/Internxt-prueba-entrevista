import React, { useReducer } from 'react';
import BookContext from './bookContext';
import BookReducer from './bookReducer';
import { 
    GET_BOOKS, 
    GET_CURRENT_BOOK, 
    PUT_BOOKS 
} from '../../types/index'
import axiosClient from '../../config/axios';

const BookState = props => {

    const initialState = {
        books: [],
        currentbook: null 
    }

    const [ state, dispatch ] = useReducer(BookReducer, initialState);

    // Get the books
    const getBooks = async () => {
        try {
            const res = await axiosClient.get('/api/books');
            dispatch({
                type: GET_BOOKS,
                payload: res.data.books
            });

        } catch (error) {
            console.log(error)
        }
    }

    // Get current book
    const getCurrentBook = bookId => {
        dispatch({
            type: GET_CURRENT_BOOK,
            payload: bookId
        })
    }

    // Modificar libro
    const updateBook = async book => {
        try {
            const res = await axiosClient.put(`/api/books/${book._id}`, book);
            dispatch({
                type: PUT_BOOKS,
                payload: res.data
            });
            
        } catch (error) {
            console.log(error)
        }
    }
    
    return ( 
        <BookContext.Provider
            value={{
                books: state.books,
                currentbook: state.currentbook,
                getBooks,
                getCurrentBook,
                updateBook
            }}
        >
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookState;