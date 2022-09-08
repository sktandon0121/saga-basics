import { Add_Book, Remove_Book } from "./constant";


export const AddBook =(data)=>{
    console.log("add a new book action ",data);

    return {
        type : Add_Book,
        payload : data
    }
}


export const RemoveBook = (data) => {
    console.log("remove book action called ", data)

    return {
        type : Remove_Book,
        payload: data
    }
}