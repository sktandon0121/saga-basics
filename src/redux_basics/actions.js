import { Decrease_Count, Increase_Count } from "./constant"

export const increaseCount = (data)=>{
    console.log("action called ",data);
    return {
        type : Increase_Count,
        payload: data
    }
}

export const decrementCount = (data) => {
    console.log("action decrement called ", data);

    return {
        type : Decrease_Count,
        payload : data
    }
}