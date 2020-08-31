import { PUT_BOOKS, GET_BOOKS } from '../../types/index'

export default (state, action) => {
    switch(action.type) {

        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            }

        case PUT_BOOKS:
            return {
                ...state
            }

        default:
            return state
    }
}