import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getDayPrice } from '../actions';
import { connect } from 'react-redux';
import NoInventoryWarning from './NoInventoryWarning';
import Table from './table/Table';
import Charts from './charts/Charts';

import { getAssetsOfUserApi } from '../api/api';
import { loginApi } from '../api/api';
import AllInventoryValue from './AllInventoryValue';

class Inventory extends Component {
	async componentDidMount() {
		this.props.getDayPrice();

		const loginResponse = await loginApi();
		console.log(loginResponse);
	}

	renderContent = () => {
		const { inventoryList } = this.props;
		if (!inventoryList.length) {
			return <NoInventoryWarning />;
		} else {
			return <Table />;
		}
	};

	render() {
		return (
			<>
				<div id="inventory-page">
					{this.renderContent()}
					<Link id="addInventoryLink" to={process.env.PUBLIC_URL + '/addInventory'}>
						اضافه کردن دارایی
					</Link>
				</div>
				<Charts />
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		inventoryList: state.inventoryList,
	};
};

export default connect(mapStateToProps, { getDayPrice })(Inventory);
