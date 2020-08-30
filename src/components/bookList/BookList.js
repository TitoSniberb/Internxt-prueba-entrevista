import React, { Fragment } from 'react';
import Book from '../book/Book';

const BookList = () => {

    const bookList = [
        {name: 1984, description: "1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith," + 
            " a low ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother." +
            "'Big Brother' controls every aspect of people's lives."},
        {name: "Sandokan: The tigers of mompracem", description: "The Tigers of Mompracem are a band of rebel pirates fighting for the defense" +
            " of tiny native kingdoms against the colonial powers of the Dutch and British empires. They are led by Sandokan, the indomitable " +
            "“Tiger of Malaysia”, and his faithful friend Yanez De Gomera, a Portuguese wanderer and adventurer."},
        {name: "I am not a serial killer", description: "The book follows 15-year-old John Wayne Cleaver, a diagnosed sociopath who lives above" +
            " a mortuary owned by his mother and her twin sister, Margaret. His parents named him after actor John Wayne, but he notices that he " +
            "shares the name with serial killer John Wayne Gacy also."}
    ];

    return ( 
        <Fragment>
            <ul>
                { bookList.length === 0 
                    ? <p>No hay ningun libro</p> 
                    : 
                    ( bookList.map(book => (
                        <Book 
                            book={book}
                        />
                        ))
                    ) 
                }
            </ul>
        </Fragment>
     );
}
 
export default BookList;