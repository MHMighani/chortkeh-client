import React from 'react';
import { connect } from 'react-redux';
import PieChart from './PieChart';
import LineChart from './LineChart';

const Charts = props => {
	if(!props.inventoryList.length){
		return null
	}
	return (
		<div className="chart-page">
			<PieChart
				allTodayPrices={props.allTodayPrices}
				inventoryList={props.inventoryList}
				labelTranslations={props.labelTranslations}
			/>
			<LineChart />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		allTodayPrices: state.allTodayPrices,
		inventoryList: state.inventoryList,
		labelTranslations: state.labelTranslations,
	};
};

export default connect(mapStateToProps, {})(Charts);
