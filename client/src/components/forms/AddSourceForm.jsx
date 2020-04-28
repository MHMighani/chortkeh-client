import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderInput from './RenderInput';
import { connect } from 'react-redux';
import { addNewSource } from '../../actions';
import toast from 'toasted-notes';

import 'toasted-notes/src/styles.css';

const AddSourceForm = ({ handleSubmit,addNewSource }) => {
	const onSubmit = async (formValues) => {
		const response = await addNewSource(formValues);
		if(response){
			toast.notify(() => (
				<div className="toast warning-toast">این دارایی از قبل ثبت شده است</div>
			),{
				duration:2000
			})
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="addsource-form">
				<Field name="newSourceName" label="نام منبع جدید" component={RenderInput} />
				<Field name="newSourceValue" type="number" label="ارزش" component={RenderInput} />
				<div className="btn-wrapper">
					<button className="button">تایید</button>
				</div>
			</div>
		</form>
	);
};

const validate = (formValues) => {
	const errors = {};

	if (!formValues.newSourceName) {
		errors['newSourceName'] = 'لطفا نام منبع را مشخص کنید';
	} else if (!formValues.newSourceValue) {
		errors['newSourceValue'] = 'لطفا ارزش منبع جدید را مشخص کنید';
	}
	return errors;
};

export default reduxForm({
	form: 'AddSourceForm',
	initialValues:{newSourceValue:1,newSourceName:"بورس"},
	validate,
})(connect(null, { addNewSource })(AddSourceForm));
