import { ADD_TO_INVENTORY, DELETE_FROM_INVENTORY } from '../constants/actionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case ADD_TO_INVENTORY:
			return [...state, action.payload];
		case DELETE_FROM_INVENTORY:
			const newState = state.filter(inventory => inventory.subSource !== action.payload);
			return newState;
		default:
			return state;
	}
};
