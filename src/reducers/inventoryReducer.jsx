import { ADD_TO_INVENTORY, DELETE_FROM_INVENTORY } from '../constants/actionTypes';
import _ from 'lodash'

export default (state = [], action) => {
	switch (action.type) {
		case ADD_TO_INVENTORY:
            const duplicatedInventory = state.find(inventory=>inventory.subSource===action.payload.subSource)
            if(duplicatedInventory){
                const newState = state.map(inventory=>{
                    return {...inventory,"amount":action.payload.amount}
                })
                return newState
            }
			return [...state, action.payload];
		case DELETE_FROM_INVENTORY:
			const newState = state.filter(inventory => inventory.subSource !== action.payload);
			return newState;
		default:
			return state;
	}
};
