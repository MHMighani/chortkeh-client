import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'
import RenderInput from './RenderInput';
import { connect } from 'react-redux';
import { addNewSource } from '../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
						{/* <Link to={process.env.PUBLIC_URL + '/addInventory'}>
							<FontAwesomeIcon icon="times" />
						</Link> */}
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
