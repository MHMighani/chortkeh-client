import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getDayPrice } from '../actions';
import { connect } from 'react-redux';
import NoInventoryWarning from './NoInventoryWarning';
import Table from './table/Table';

class Inventory extends Component {
	componentDidMount() {
		this.props.getDayPrice();
	}

	renderContent = () => {
		const { inventoryList } = this.props;
		if (!inventoryList.length) {
			return <NoInventoryWarning />;
		} else {
			return (
				<div className="container mt-5">
					<Table />
				</div>
			);
		}
	};

	render() {
		return (
			<div>
				{this.renderContent()}
				<Link to={process.env.PUBLIC_URL + '/addInventory'}>اضافه کردن دارایی</Link>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		inventoryList: state.inventoryList,
	};
};

export default connect(mapStateToProps, { getDayPrice })(Inventory);
