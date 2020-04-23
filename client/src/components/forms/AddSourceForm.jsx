import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderInput from './RenderInput';
import { connect } from 'react-redux';
import { addNewSource } from '../../actions'

class AddSourceForm extends React.Component {
	onSubmit = (formValues) => {
		console.log("ssss")
		this.props.addNewSource(formValues)
	};

	render() {
		const { handleSubmit } = this.props;
		
		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<div className="addsource-form">
					<Field name="newSourceName" label="نام منبع جدید" component={RenderInput} />
					<Field name="newSourceValue" type="number" label="ارزش" component={RenderInput} />
					<div className="btn-wrapper">
						<button>
							تایید
						</button>
					</div>
				</div>
			</form>
		);
	}
}

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
	validate,
})(connect(null, { addNewSource })(AddSourceForm));
