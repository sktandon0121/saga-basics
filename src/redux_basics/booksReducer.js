import { Add_Book, Remove_Book } from "./constant";

const initialState = [];

export const bookData = (data = initialState, action) => {
    switch (action.type) {
        case Add_Book:
            console.log("Add Book reducer called ", action);
            return [...data, action.payload];
        case Remove_Book:
            data.pop()
            console.log("Remove Book Reducer called ", data);
            return [...data];
        default:
            return data;
    }
}