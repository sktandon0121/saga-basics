import { combineReducers } from "redux"
import { countData } from "./reducer"
import { bookData } from "./booksReducer"
import { userData } from "./userReducer"




export default combineReducers({
    countData,
    bookData,
    userData
})