import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getDayPrice } from '../actions';
import { connect } from 'react-redux';
import numberWithCommas from '../NumberWithCommas';

const InventoryTableHead = () => {
	const tableBody = (
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">منبع</th>
				<th scope="col">تعداد</th>
				<th scope="col">قیمت روز</th>
				<th scope="col">قیمت کل</th>
			</tr>
		</thead>
	);
	return tableBody;
};

const InventoryTableBody = ({ inventoryList, allTodayPrices, labelTranslations,allInventoryValue }) => {
	const tableBody = inventoryList.map((inventory, index) =>{
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{inventory.subSource}</td>
                <td>{numberWithCommas(inventory.amount)}</td>
                <td>{numberWithCommas(allTodayPrices[labelTranslations[inventory.subSource]]['Buy'])}</td>
                <td>
                    {numberWithCommas(
                        parseInt(inventory.amount) * allTodayPrices[labelTranslations[inventory.subSource]]['Buy']
                    )}
                </td>
            </tr>
        ) 
    } );

	return (
		<tbody>
			{tableBody}
			<th scope="row">ارزش کل</th>
			<td>{allInventoryValue}</td>
			
		</tbody>
	)
};

class Inventory extends Component {
	componentDidMount() {
		this.props.getDayPrice();
	}

	getAllInventoryValue = inventoryList => {
		let price = 0;
		const translations = this.props.labelTranslations;

		const allTodayPrice = this.props.allTodayPrices;
		inventoryList.forEach(function(inventory) {
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
			return (
				<div className="container">
					<div>No source added to inventory yet!!</div>
				</div>
			);
		} else {
			return (
				<div className="container mt-5">
					<table className="table">
						<InventoryTableHead />
						<InventoryTableBody
							inventoryList={inventoryList}
							allTodayPrices={this.props.allTodayPrices}
							labelTranslations={this.props.labelTranslations}
							allInventoryValue = {this.getAllInventoryValue(inventoryList)}
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
				<Link to={process.env.PUBLIC_URL + "/addInventory"} className="btn btn-primary my-2">
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

export default connect(mapStateToProps, { getDayPrice })(Inventory);
