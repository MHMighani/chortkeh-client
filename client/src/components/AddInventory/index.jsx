import React from 'react';
import { connect } from 'react-redux';
import { change,untouch } from 'redux-form'
import AddInventoryForm from '../forms/AddInventoryForm';
import { addToInventory } from '../../actions';
import toast from 'toasted-notes';

import './style.scss';
import 'toasted-notes/src/styles.css';

const AddInventory = ({addToInventory}) => {
	const handleSubmit = (formValues,dispatch) => {
		addToInventory(formValues);
		
		dispatch(change('addInventoryForm','amount',''))
		dispatch(untouch('addInventoryForm','amount',''))

		toast.notify('به دارایی اضافه شد',{
			duration:2000
		})
	};

	
		return (
			<div className="form-page">
				<AddInventoryForm
					onSubmit={handleSubmit}
					initialValues={{ amount: 0, mainSource: '', subSource: '' }}
				/>
			</div>
		);
	}

export default connect(null, { addToInventory })(AddInventory);
