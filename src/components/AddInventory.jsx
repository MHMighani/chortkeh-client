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
			<div className="bg-primary">
				<div className="container px-5 bg-light w-50 justify-content-center align-items-center ">
					<AddInventoryForm
						onSubmit={this.handleSubmit}
						initialValues={{ amount: 0, mainSource: '', subSource: '' }}
					/>
				</div>
			</div>
		);
	}
}

export default connect(null, { addToInventory })(AddInventory);
