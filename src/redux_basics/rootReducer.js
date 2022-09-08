import { combineReducers } from "redux"
import { countData } from "./reducer"
import { bookData } from "./booksReducer"




export default combineReducers({
    countData,
    bookData
})