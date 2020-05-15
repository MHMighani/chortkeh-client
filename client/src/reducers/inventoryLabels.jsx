import { ADD_SOURCE } from '../constants/actionTypes';

export const inventoryLabels = (state = {}, action) => {
	let labels = {
		Gold: ['Gold 18', '1 Emami', '1 Old Azadi', '1/2 Azadi', '1/4 Azadi'],
		Currency: ['US Dollar', 'Euro', 'British Pound', 'Canadian Dollar'],
		Crypto: ['BitCoin'],
		others: [],
	};

	switch (action.type) {
		case ADD_SOURCE:
			return { ...state, others: [...state.others, action.payload.newSourceName] };
		default:
			let newState = { ...state, ...labels };
			newState.others = state.others ? state.others : [];
			return newState;
	}
};

export const labelTranslations = (state = {}, action) => {
	const translations = {
		Gold: 'طلا',
		'Gold 18': 'طلا گرمی ۱۸ عیار',
		'1 Emami': 'تمام سکه',
		'1 Old Azadi': 'تمام سکه طرح قدیم',
		'1/2 Azadi': 'نیم سکه',
		'1/4 Azadi': 'ربع سکه',
		Currency: 'ارز',
		'US Dollar': 'دلار آمریکا',
		Euro: 'یورو',
		'British Pound': 'پوند انگلیس',
		'Canadian Dollar': 'دلار کانادا',
		Crypto: 'ارز دیجیتال',
		BitCoin: 'بیت کوین',
		others: 'دیگر منابع',
	};

	switch (action.type) {
		case ADD_SOURCE:
			const newSource = action.payload.newSourceName;

			return { ...state, [newSource]: newSource };
		default:
			return { ...state, ...translations };
	}
};
