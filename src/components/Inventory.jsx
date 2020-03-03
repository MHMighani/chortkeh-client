import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getDayPrice, deleteFromInventory } from '../actions';
import { connect } from 'react-redux';
import numberWithCommas from '../NumberWithCommas';
import NoInventoryWarning from './NoInventoryWarning';

const InventoryTableHead = () => {
	const tableBody = (
		<thead>
			<tr>
				<th></th>
				<th scope="col">قیمت کل</th>
				<th scope="col">قیمت روز</th>
				<th scope="col">تعداد</th>
				<th scope="col">منبع</th>
				<th scope="col">#</th>
			</tr>
		</thead>
	);
	return tableBody;
};

const InventoryTableBody = ({
	inventoryList,
	allTodayPrices,
	labelTranslations,
	allInventoryValue,
	deleteFromInventory,
}) => {
	const tableBody = inventoryList.map((inventory, index) => {
		return (
			<tr key={index}>
				<td>
					<button className="btn btn-danger" onClick={()=>deleteFromInventory(inventory.subSource)}>Delete</button>
					
				</td>
				<td>
					{numberWithCommas(
						parseInt(inventory.amount) * allTodayPrices[labelTranslations[inventory.subSource]]['Buy']
					)}
				</td>
				<td>{numberWithCommas(allTodayPrices[labelTranslations[inventory.subSource]]['Buy'])}</td>
				<td>{numberWithCommas(inventory.amount)}</td>
				<td>{inventory.subSource}</td>
				<th scope="row">{index + 1}</th>
			</tr>
		);
	});

	return (
		<tbody>
			{tableBody}
			<tr>
				<td>{numberWithCommas(allInventoryValue)}</td>
				<td>ارزش کل</td>
				<td colSpan="3"></td>
			</tr>
		</tbody>
	);
};

class Inventory extends Component {
	componentDidMount() {
		this.props.getDayPrice();
	}

	getAllInventoryValue = inventoryList => {
		let price = 0;
		const translations = this.props.labelTranslations;

		const allTodayPrice = this.props.allTodayPrices;
		inventoryList.forEach(inventory => {
			const subSource = translations[inventory.subSource];
			const todayPrice = allTodayPrice[subSource]['Buy'];
			const amount = parseInt(inventory.amount);
			price += todayPrice * amount;
		});
		return price;
	};

	renderContent = () => {
		const { inventoryList } = this.props;
		if (!inventoryList.length) {
			return <NoInventoryWarning />;
		} else {
			return (
				<div className="container mt-5">
					<table className="table table-striped border">
						<InventoryTableHead />
						<InventoryTableBody
							inventoryList={inventoryList}
							allTodayPrices={this.props.allTodayPrices}
							labelTranslations={this.props.labelTranslations}
							allInventoryValue={this.getAllInventoryValue(inventoryList)}
							deleteFromInventory={this.props.deleteFromInventory}
						/>
					</table>
				</div>
			);
		}
	};

	render() {
		return (
			<div className="container mt-5">
				{this.renderContent()}
				<Link to={process.env.PUBLIC_URL + '/addInventory'} className="btn btn-primary my-2">
					اضافه کردن دارایی
				</Link>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		inventoryList: state.inventoryReducer,
		allTodayPrices: state.allTodayPrices,
		labelTranslations: state.labelTranslations,
	};
};

export default connect(mapStateToProps, { deleteFromInventory, getDayPrice })(Inventory);
