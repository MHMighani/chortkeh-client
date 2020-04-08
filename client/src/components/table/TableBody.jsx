import React from 'react';
import {deleteFromInventory} from '../../actions'
import { connect } from 'react-redux';
import numberWithCommas from '../../NumberWithCommas';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const TableBody = props => {
	const tableBody = props.inventory.map((inventory, index) => {
		const { labelTranslations, todayPrices,deleteFromInventory } = props;
		const { subSource, amount } = inventory;
		const inventoryTodayValue = todayPrices[subSource]['Buy'];
		
		return (
			<tr key={index}>
				<td>{labelTranslations[subSource]}</td>
				<td>{numberWithCommas(amount)}</td>
				<td>{numberWithCommas(inventoryTodayValue)}</td>
				<td>{numberWithCommas(parseInt(amount) * inventoryTodayValue)}</td>
				<td>
					<button className="btn btn-danger table-delete-btn" onClick={() => deleteFromInventory(subSource)}>
						<span><FontAwesomeIcon icon='times' /></span>
					</button>

					<button className="btn btn-success table-edit-btn">
					<span><FontAwesomeIcon icon='edit' /></span>
					</button>
				</td>
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
