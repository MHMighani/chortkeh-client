import React, { useState } from 'react';
import { connect } from 'react-redux';
import PieChart from './PieChart';
import ChartFilter from './ChartFilter';
import './style.scss';

const Charts = (props) => {
	const [chartFormat, setChartFormat] = useState('subSource');

	const getValuesAndLabels = () => {
		let inventoryObj = {};

		props.inventoryList.forEach((asset) => {
			let sourceName = props.labelTranslations[asset[chartFormat]];
			let assetValue = +props.allTodayPrices[asset.subSource].Buy * +asset.amount;
			if (sourceName in inventoryObj) {
				inventoryObj[sourceName] += assetValue;
			} else {
				inventoryObj[sourceName] = assetValue;
			}
		});

		const labels = Object.keys(inventoryObj);
		const values = Object.values(inventoryObj);

		return [labels, values];
	};

	const [labels, values] = getValuesAndLabels();

	if (!props.inventoryList.length) return null;

	return (
		<div className="chart-page">
			<ChartFilter chartFormatToggle={setChartFormat} />
			<div className="chart-container">
				<PieChart
					allTodayPrices={props.allTodayPrices}
					values={values}
					labels={labels}
					labelTranslations={props.labelTranslations}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		allTodayPrices: state.allTodayPrices,
		inventoryList: state.inventoryList,
		labelTranslations: state.labelTranslations,
	};
};

export default connect(mapStateToProps, {})(Charts);
