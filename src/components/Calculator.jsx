import React from 'react';
import { useSelector } from 'react-redux';
import numberWithCommas from '../NumberWithCommas';

const Calculator = ({ subSource, amount }) => {
	let todayPrice = 0,
		totalPrice = 0;

	const labelTranslations = useSelector(state => state.labelTranslations);
	const todayPrices = useSelector(state => state.allTodayPrices);
	subSource = labelTranslations[subSource];
	if (subSource) {
		todayPrice = todayPrices[subSource]['Buy'];
	}

	totalPrice = todayPrice * amount;

	return (
		<div className="col">
			<div className="row">
				<span className="col-sm-6" style={{whiteSpace:"nowrap"}}>قیمت روز</span>
				<span className="col-sm-6">{numberWithCommas(todayPrice)}</span>
			</div>
			<div className="row">
				<div className="col-sm-12 d-flex justify-content-center" style={{ margin: '1rem 0' }}>
					<i className="fas fa-times" />
				</div>
			</div>
			<div className="row cal-result-label">
				<span className="col-sm-6">تعداد</span>
				<span className="col-sm-6">{amount}</span>
			</div>
			<div className="row">
				<hr className="col-sm-12" />
			</div>
			<div className="row cal-result-label">
				<span className="col-sm-6" style={{whiteSpace:"nowrap"}}>قیمت کل</span>
				<span className="col-sm-6">{numberWithCommas(totalPrice)}</span>
			</div>
		</div>
	);
};

export default Calculator;
