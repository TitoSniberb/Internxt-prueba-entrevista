import { PUT_BOOKS, GET_CURRENT_BOOK, GET_BOOKS } from '../../types/index'

export default (state, action) => {
    switch(action.type) {

        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            }

        case GET_CURRENT_BOOK:
            return {
                ...state,
                book: state.books.filter(book => book.id === action.payload)
            }

        /* case PUT_BOOKS:
            return {
                ...state,
                book: state.book
            } */

        default:
            return state
    }
}