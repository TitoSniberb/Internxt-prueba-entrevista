import React, { useReducer } from 'react';
import BookContext from './bookContext';
import BookReducer from './bookReducer';
import { GET_BOOKS, PUT_BOOKS } from '../../types/index'

const BookState = props => {

    const initialState = {
        books: [],
    }

    const books = [
        {id: 1, name: 1984, description: "1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith," + 
            " a low ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother." +
            "'Big Brother' controls every aspect of people's lives."},

        {id: 2, name: "Sandokan: The tigers of mompracem", description: "The Tigers of Mompracem are a band of rebel pirates fighting for the defense" +
            " of tiny native kingdoms against the colonial powers of the Dutch and British empires. They are led by Sandokan, the indomitable " +
            "“Tiger of Malaysia”, and his faithful friend Yanez De Gomera, a Portuguese wanderer and adventurer."},

        {id: 3, name: "I am not a serial killer", description: "The book follows 15-year-old John Wayne Cleaver, a diagnosed sociopath who lives above" +
            " a mortuary owned by his mother and her twin sister, Margaret. His parents named him after actor John Wayne, but he notices that he " +
            "shares the name with serial killer John Wayne Gacy also."},

        {id: 4, name: "The Case of Charles Dexter Ward", description: "The novel, set in 1928, describes how Charles Dexter Ward becomes obsessed with his distant ancestor, Joseph Curwen, " + 
            "an alleged wizard with unsavory habits. Ward physically resembles Curwen, and attempts to duplicate his ancestor's Qabalistic and alchemical feats."},

        {id: 5, name: "Mr. Monster", description: "Monster is a young adult horror novel by Dan Wells, published in 2010 by Tor Books. It is the sequel to I Am Not a " +
            "Serial Killer and the second book in the John Wayne Cleaver series. The book focuses on the dual threats of the conflict between John and his darker side, which he calls 'Mr'."}
    ];

    const [ state, dispatch ] = useReducer(BookReducer, initialState);

    // Get the books
    const getBooks = () => {
        dispatch({
            type: GET_BOOKS,
            payload: books
        })
    }

    // Modificar libro
    const updateBooks = book => {
        dispatch({
            type: PUT_BOOKS,
            payload: book
        })
    }

    return ( 
        <BookContext.Provider
            value={{
                books: state.books,
                getBooks,
                updateBooks
            }}
        >
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookState;