import React from 'react';
import { connect } from 'react-redux';
import { change, untouch } from 'redux-form';
import AddInventoryForm from '../forms/AddInventoryForm';
import { addToInventory } from '../../actions';
import history from '../../history';
import toast from 'toasted-notes';

import './style.scss';
import 'toasted-notes/src/styles.css';

const AddInventory = ({ addToInventory,location }) => {
	let initialValues = location.initialValue ? location.initialValue: { amount: 0, mainSource: '', subSource: '' };
	let successMessage = location.initialValue ? 'ویرایش با موفقیت انجام شد' : 'به دارایی اضافه شد'

	const handleSubmit = (formValues, dispatch) => {
		addToInventory(formValues);

		dispatch(change('addInventoryForm', 'amount', ''));
		dispatch(untouch('addInventoryForm', 'amount', ''));

		toast.notify(() => <div className="toast success-toast">{successMessage}</div>, {
			duration: 2000,
		});

		if(location.initialValue){
			history.push(`${process.env.PUBLIC_URL}/`)
		}
	};


	return (
		<div className="form-page">
			<AddInventoryForm onSubmit={handleSubmit} initialValues={initialValues} />
		</div>
	);
};

export default connect(null, { addToInventory })(AddInventory);
