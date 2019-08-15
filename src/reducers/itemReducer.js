import uuid from 'uuid';
import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING} from '../actions/types'
const initialState={
    items:[
    ],
    loading:false
}

 const itemReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                items:action.payload,
                loading:false
            };
        case ADD_ITEM:
            return {
                ...state,
            items:[...state.items,action.payload]
            }
        case DELETE_ITEM:
            //console.log(state.items);
            return{
                ...state,
                items:state.items.filter(item=>item._id!==action.payload)
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading:true
            }
            default:
                return state;
    }
}

export default itemReducer;