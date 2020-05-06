import * as types from '../constants/actionTypes';
import { getPricesApi, getBitCoinPrice } from '../api/api';

export const getDayPrice = () => async dispatch => {
	const dayPrices = await getPricesApi();
    const bitCoinResponse = await getBitCoinPrice();
    const bitCoinPrice = parseInt(bitCoinResponse.USD.rate_float)
	const cryptoPrice = { Crypto: [{ Currency: 'BitCoin', Buy: bitCoinPrice }]};
    
	const allPrices = { ...dayPrices, ...cryptoPrice };
    
	dispatch({ type: types.GET_DAY_PRICE, payload: allPrices });
};

export const addToInventory = formValues => async dispatch => {
	dispatch({ type: types.ADD_TO_INVENTORY, payload: formValues });
};

export const deleteFromInventory = subSource => async dispatch => {
	dispatch({ type: types.DELETE_FROM_INVENTORY, payload: subSource });
};

export const addNewSource = formValues => async (dispatch,getState) => {
	const {allTodayPrices} = getState();
	if(formValues.newSourceName in allTodayPrices){
		return 1
	}
	dispatch({type: types.ADD_SOURCE, payload: formValues});
}