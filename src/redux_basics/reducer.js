import { Decrease_Count, Increase_Count } from "./constant";

const initialState = { count: 0 };

export const countData = (data = initialState, action) => {

    switch (action.type) {
        case Increase_Count:
            console.log(`${Increase_Count} ` + "reducer called", action)
            return { count: data.count + action.payload.count };

        case Decrease_Count:
            return { count: data.count - action.payload.count };

        default:
            return data

    }
}

