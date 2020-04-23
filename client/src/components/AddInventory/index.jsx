import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change,untouch } from 'redux-form'
import AddInventoryForm from '../forms/AddInventoryForm';
import { addToInventory } from '../../actions';
import toast from 'toasted-notes';

import './style.scss';
import 'toasted-notes/src/styles.css';

class AddInventory extends Component {
	handleSubmit = (formValues,dispatch) => {
		this.props.addToInventory(formValues);
		
		dispatch(change('addInventoryForm','amount',''))
		dispatch(untouch('addInventoryForm','amount',''))

		toast.notify('به دارایی اضافه شد',{
			duration:2000
		})
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
