
let initialState = [];

export const userData = (data = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_ASYNC':
            console.log("GET_USER_ASYNC reducer called ", action)
            return [...data]
        default:
            return data
    }
}