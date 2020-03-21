import React from 'react';
import {deleteFromInventory} from '../../actions'
import { connect } from 'react-redux';
import numberWithCommas from '../../NumberWithCommas';

const TableBody = props => {
	const tableBody = props.inventory.map((inventory, index) => {
		const { labelTranslations, todayPrices,deleteFromInventory } = props;
		const { subSource, amount } = inventory;
		const inventoryTodayValue = todayPrices[subSource]['Buy'];
		
		return (
			<tr key={index}>
				{/* <td>
					<button className="btn btn-danger" onClick={() => deleteFromInventory(subSource)}>
						Delete
					</button>
				</td> */}
				<th scope="row" className="row-num">{index + 1}</th>
				<td>{labelTranslations[subSource]}</td>
				<td>{numberWithCommas(amount)}</td>
				<td>{numberWithCommas(inventoryTodayValue)}</td>
				<td>{numberWithCommas(parseInt(amount) * inventoryTodayValue)}</td>
				
			</tr>
		);
	});

	return <tbody>{tableBody}</tbody>;
};

const mapStateToProps = state => {
	return {
		inventory: state.inventoryList,
		todayPrices: state.allTodayPrices,
		labelTranslations: state.labelTranslations,
	};
};

export default connect(mapStateToProps,{deleteFromInventory})(TableBody);
