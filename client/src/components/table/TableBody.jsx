import React from 'react';
import { deleteFromInventory } from '../../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numberWithCommas from '../../NumberWithCommas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TableBody = (props) => {
	const tableBody = props.inventory.map((inventory, index) => {
		const { labelTranslations, todayPrices, deleteFromInventory } = props;
		const { subSource, amount, mainSource } = inventory;
		const inventoryTodayValue = todayPrices[subSource]['Buy'];
		
		return (
			<tr key={index}>
				<td>{labelTranslations[subSource]}</td>
				<td>{numberWithCommas(amount)}</td>
				<td>{numberWithCommas(inventoryTodayValue)}</td>
				<td>{numberWithCommas(parseInt(amount) * inventoryTodayValue)}</td>
				<td>
					<button className="button table-delete-btn" onClick={() => deleteFromInventory(subSource)}>
						<span>
							<FontAwesomeIcon icon="times" />
						</span>
					</button>

					<Link className="button success table-edit-btn" to={{
						pathname: `${process.env.PUBLIC_URL}/editInventory`,
						initialValue: {mainSource,subSource,amount},
					}}>
						<span>
							<FontAwesomeIcon icon="edit" />
						</span>
					</Link>
				</td>
			</tr>
		);
	});

	return <tbody>{tableBody}</tbody>;
};

const mapStateToProps = (state) => {
	return {
		inventory: state.inventoryList,
		todayPrices: state.allTodayPrices,
		labelTranslations: state.labelTranslations,
	};
};

export default connect(mapStateToProps, { deleteFromInventory })(TableBody);
