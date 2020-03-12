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
		<div id="calculator" className="form-section">
			<div className="price-wrapper">
				<span>قیمت روز</span>
				<span>{numberWithCommas(todayPrice)}</span>
			</div>
			<div className="price-wrapper">
				<div>
					<i className="fas fa-times" />
				</div>
			</div>
			<div className="price-wrapper">
				<span>تعداد</span>
				<span>{numberWithCommas(amount)}</span>
			</div>
			<div className="price-wrapper">
				<hr />
			</div>
			<div className="price-wrapper">
				<span>قیمت کل</span>
				<span >{numberWithCommas(totalPrice)}</span>
			</div>
		</div>
	);
};

export default Calculator;
