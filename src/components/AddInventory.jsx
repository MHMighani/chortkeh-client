import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddInventoryForm from './forms/AddInventoryForm';
import { addToInventory } from '../actions';

class AddInventory extends Component {
	handleSubmit = formValues => {
		this.props.addToInventory(formValues);
	};

	render() {
		return (
			<div className="form-page">
				<AddInventoryForm
					onSubmit={this.handleSubmit}
					initialValues={{ amount: 0, mainSource: '', subSource: '' }}
				/>
			</div>
		);
	}
}

export default connect(null, { addToInventory })(AddInventory);
