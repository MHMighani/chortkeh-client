import { GET_DAY_PRICE, ADD_SOURCE } from '../constants/actionTypes';
import _ from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_DAY_PRICE:
			const currencyPrices = _.keyBy(action.payload['Currency'], 'Currency');
			const goldPrices = {
				..._.keyBy(action.payload['Gold'], 'Coin'),
				..._.keyBy(action.payload['Item'], 'Name'),
			};
			let cryptoPrices = _.keyBy(action.payload['Crypto'], 'Currency');

			// converting bitcoin price from Dollar to Toman
			cryptoPrices['BitCoin']['Buy'] = cryptoPrices['BitCoin']['Buy'] * currencyPrices['US Dollar']['Buy'];

			let allPrices = { ...state, ...currencyPrices, ...goldPrices, ...cryptoPrices };
			

			return allPrices;
		case ADD_SOURCE:
			return {
				...state,
				...{ [action.payload.newSourceName]: { Buy: parseInt(action.payload.newSourceValue) } },
			};
		default:
			return state;
	}
};
