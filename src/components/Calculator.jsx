import React from 'react';
import { useSelector } from 'react-redux';
import numberWithCommas from '../NumberWithCommas';

const Calculator = ({ subSource, amount }) => {
	let todayPrice = 0,
		totalPrice = 0;

	const todayPrices = useSelector(state => state.allTodayPrices);
	if (subSource) {
		todayPrice = todayPrices[subSource]['Buy'];
	}

	totalPrice = todayPrice * amount;

	return (
		<div>
			<div>
				<span>قیمت روز</span>
				<span>{numberWithCommas(todayPrice)}</span>
			</div>
			<div>
				<div>
					<i className="fas fa-times" />
				</div>
			</div>
			<div>
				<span>تعداد</span>
				<span>{numberWithCommas(amount)}</span>
			</div>
			<div>
				<hr />
			</div>
			<div>
				<span>قیمت کل</span>
				<span >{numberWithCommas(totalPrice)}</span>
			</div>
		</div>
	);
};

export default Calculator;
