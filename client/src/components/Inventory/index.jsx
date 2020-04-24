import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDayPrice } from '../../actions';
import { connect } from 'react-redux';
import NoInventoryWarning from '../NoInventoryWarning';
import Table from '../table/Table';
import Charts from '../charts/Charts';

import './style.scss';

const Inventory = ({getDayPrice,inventoryList}) => {
	useEffect(() => {
		getDayPrice();
	}, []);

	const renderContent = () => {
		if (!inventoryList.length) {
			return <NoInventoryWarning />;
		} else {
			return <Table />;
		}
	};

	return (
		<>
			<div id="inventory-page">
				{renderContent()}
				<Link className="button" id="addInventoryLink" to={process.env.PUBLIC_URL + '/addInventory'}>
					اضافه کردن دارایی
				</Link>
			</div>
			<Charts />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		inventoryList: state.inventoryList,
	};
};

export default connect(mapStateToProps, { getDayPrice })(Inventory);
