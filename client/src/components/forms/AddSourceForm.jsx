import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderInput from './RenderInput';
import { connect } from 'react-redux';
import { addNewSource } from '../../actions';

const AddSourceForm = ({ handleSubmit,addNewSource }) => {
	const onSubmit = (formValues) => {
		addNewSource(formValues);
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
	console.log(errors);
	return errors;
};

export default reduxForm({
	form: 'AddSourceForm',
	validate,
})(connect(null, { addNewSource })(AddSourceForm));
