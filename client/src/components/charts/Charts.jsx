import React from 'react';
import { connect } from 'react-redux';
import PieChart from './PieChart';
import './style.scss';

const Charts = props => {
	if (!props.inventoryList.length) {
		return null;
	}
	return (
		<div className="chart-page">
			<div className="chart-container">
				<PieChart
					allTodayPrices={props.allTodayPrices}
					inventoryList={props.inventoryList}
					labelTranslations={props.labelTranslations}
				/>
			</div>
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
