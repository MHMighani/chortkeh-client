import axios from 'axios';

export const getPricesApi = async () => {
	const url = 'https://currency.jafari.pw/json';

	const response = await axios.get(url);

	let prices = response.data;

	for (let item of prices['Item']) {
		item['Buy'] = item['Rate'];
		delete item['Rate'];
	}

	return prices;
};

export const getBitCoinPrice = async () => {
	const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

	const response = await axios.get(url);

	return response.data.bpi;
};
