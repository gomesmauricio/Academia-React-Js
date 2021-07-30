import { stat } from "fs";

function product (state, action){
    if(action.type === "TOOGLE_PRODUCT"){
        return {
            ...state,
            product: action.product
        }
    }
    return state
}

export default product