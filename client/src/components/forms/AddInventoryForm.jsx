import React, { useEffect } from 'react';
import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import { getDayPrice } from '../../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import RenderInput from './RenderInput';

import renderSelector from './RenderSelector';
import Calculator from '../Calculator';

import './style.scss';

const AddInventoryForm = (props) => {
	useEffect(() => {
		props.getDayPrice();
	});

	const getSelectOptions = (optionsList) => {
		let options = optionsList.map((option, index) => (
			<option key={index} value={option}>
				{props.labelTranslations[option]}
			</option>
		));
		return options;
	};

	// for rendering subSource label translation
	const renderSubSourceLabel = (mainSource) => {
		if (mainSource === 'others' || !mainSource) {
			return '';
		} else if (mainSource === 'Crypto') {
			return 'ارز';
		} else {
			return props.labelTranslations[mainSource];
		}
	};

	const { handleSubmit, mainSource, subSource, amount } = props;
	const mainSourceOptionsList = [...[''], ...Object.keys(props.inventoryLabels)];
	const subSourceOptionsList = mainSource ? [...[''], ...props.inventoryLabels[mainSource]] : [''];

	return (
		<form onSubmit={handleSubmit(props.onSubmit)}>
			<div className="form-section">
				<Field
					name="mainSource"
					label="نوع منبع"
					component={renderSelector}
					options={getSelectOptions(mainSourceOptionsList)}
				/>
				<Field
					name="subSource"
					label={`نوع ${renderSubSourceLabel(mainSource)}`}
					mainSource = {props.mainSource}
					component={renderSelector}
					options={getSelectOptions(subSourceOptionsList)}
				/>
				<Field name="amount" label="مقدار" type="number" component={RenderInput} />
			</div>
			<Calculator subSource={subSource} amount={amount} />
			<div className="btn-wrapper">
				<button className="button" id="submit-btn" type="submit">
					تایید
				</button>
				<Link className="button" to={`${process.env.PUBLIC_URL}`} id="return-btn">
					بازگشت
				</Link>
			</div>
		</form>
	);
};

const selector = formValueSelector('addInventoryForm');

const mapStateToProps = (state) => {
	return {
		inventoryLabels: state.inventoryLabels,
		labelTranslations: state.labelTranslations,
		mainSource: selector(state, 'mainSource'),
		subSource: selector(state, 'subSource'),
		amount: selector(state, 'amount'),
	};
};

const validate = (formValues) => {
	const errors = {};

	if (!formValues.mainSource) {
		errors['mainSource'] = 'لطفا منبع را انتخاب کنید';
	} else if (!formValues.subSource) {
		errors['subSource'] = 'لطفا منبع را انتخاب کنید';
	} else if (!parseInt(formValues.amount)) {
		errors['amount'] = 'لطفا مقدار دارایی را مشخص کنید';
	}

	return errors;
};

export default reduxForm({
	form: 'addInventoryForm',
	validate,
})(connect(mapStateToProps, { getDayPrice, change })(AddInventoryForm));
