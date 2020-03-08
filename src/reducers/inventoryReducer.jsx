import { ADD_TO_INVENTORY, DELETE_FROM_INVENTORY } from '../constants/actionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case ADD_TO_INVENTORY:
			const duplicateInventory = state.find(inventory => inventory.subSource === action.payload.subSource);

			if (duplicateInventory) {
				return state.map(inventory => {
					if (inventory.subSource === duplicateInventory.subSource) {
						return { ...inventory, amount: action.payload.amount };
					}
					return inventory;
				});
			}
			return [...state, action.payload];
		case DELETE_FROM_INVENTORY:
			const newState = state.filter(inventory => inventory.subSource !== action.payload);
			return newState;
		default:
			return state;
	}
};
