import React, { useReducer } from 'react';
import BookContext from './bookContext';
import BookReducer from './bookReducer';
import { 
    GET_BOOKS, 
    GET_CURRENT_BOOK, 
    PUT_BOOKS ,
    VALIDATE_BOOK
} from '../../types/index'
import axiosClient from '../../config/axios';

const BookState = props => {

    const initialState = {
        books: [],
        currentbook: null,
        error: false
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
        try {
            dispatch({
                type: GET_CURRENT_BOOK,
                payload: bookId
            });

        } catch (error) {
            console.log(error)
        }
    }

    // Validate book
    const showError = bookId => {
        dispatch({
            type: VALIDATE_BOOK
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
                error: state.error,
                getBooks,
                getCurrentBook,
                updateBook,
                showError
            }}
        >
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookState;