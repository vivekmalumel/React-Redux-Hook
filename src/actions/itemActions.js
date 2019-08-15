import {GET_ITEMS,ADD_ITEM,DELETE_ITEM} from '../actions/types'

export const getItems=()=>{
    return{
        type:GET_ITEMS
    }
}
export const deleteItem=(itemId)=>{
    console.log("Hello");
    return{
        type:DELETE_ITEM,
        payload:itemId
    }
}

export const addItem=(item)=>{
    return{
        type:ADD_ITEM,
        payload:item
    }
}