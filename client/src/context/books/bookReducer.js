import { PUT_BOOKS, GET_CURRENT_BOOK, GET_BOOKS, VALIDATE_BOOK } from '../../types/index'

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
                currentbook: state.books.filter( book => book._id === action.payload )
            }

        case PUT_BOOKS:
            return {
                ...state,
                books: state.books.map( book => book._id === action.payload._id ?
                    action.payload : book ),
                error: false
            }
            
        case VALIDATE_BOOK:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}