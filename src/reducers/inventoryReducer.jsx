import {ADD_TO_INVENTORY}  from '../constants/actionTypes'

export default (state=[],action) => {
    switch(action.type){
        case ADD_TO_INVENTORY:
            return [...state,action.payload]
        default:
            return state    
    }
}