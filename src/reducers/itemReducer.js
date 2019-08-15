import uuid from 'uuid';
import {GET_ITEMS,ADD_ITEM,DELETE_ITEM} from '../actions/types'
const initialState={
    items:[
        {id:uuid(),name:"Eggs"},
        {id:uuid(),name:"Milk"},
        {id:uuid(),name:"Curd"},
        {id:uuid(),name:"Water"},
        {id:uuid(),name:"Steak"},
        {id:uuid(),name:"Oil"}
    ]
}

 const itemReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            };
        case ADD_ITEM:
            return {
                ...state,
            items:[...state.items,action.payload]
            }
        case DELETE_ITEM:
            console.log(state.items);
            return{
                ...state,
                items:state.items.filter(item=>item.id!==action.payload)
            }
            default:
                return state;
    }
}

export default itemReducer;