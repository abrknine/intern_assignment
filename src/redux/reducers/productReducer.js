import { ActionTypes } from "../constant/action_types"

// reducer always take the inital state and actions
 const initalstate={
    products:[
        {
        id:1,
        title:"Dipesh",
        category: "programmer",
    },
],
 };
export const productReducer =(state=initalstate, {type, payload})=> {
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return state;
            default:
                return state;
    }     
}