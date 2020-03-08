import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import { addToInventory, getDayPrice } from '../../actions';
import { connect } from 'react-redux';
import Calculator from '../Calculator';

import React, { Component } from 'react';

class AddInventoryForm extends Component {
	componentDidMount() {
		this.props.getDayPrice();
	}

	renderError({ error, touched }) {
		if (error && touched) {
			return <div>{error}</div>;
		}
	}

	getSelectOptions = optionsList => {
		let options = optionsList.map((option, index) => (
			<option key={index} value={option}>
				{this.props.labelTranslations[option]}
			</option>
		));
		return options;
	};

	renderSelector = ({ input, label, meta, options }) => {
		return (
			<div>
				<label>{label}</label>
				<div>
					<select type="select" {...input}>
						{options}
					</select>
				</div>
				{this.renderError(meta)}
			</div>
		);
	};

	renderInput = ({ input, label, meta }) => {
		return (
			<div>
				<label>{label}</label>
				<div>
					<input min="0" type="number" {...input} />
				</div>
				{this.renderError(meta)}
			</div>
		);
	};

	// for rendering subSource label translation
	renderSubSourceLabel = mainSource => {
		if(mainSource === "others"){
			return "منبع"
		}else if(!mainSource){
			return ""
		}else{
			return this.props.labelTranslations[mainSource]
		}
	}

	render() {
		const { handleSubmit, mainSource, subSource, amount} = this.props;
		const mainSourceOptionsList = [...[''], ...Object.keys(this.props.inventoryLabels)];
		const subSourceOptionsList = mainSource ? [...[''], ...this.props.inventoryLabels[mainSource]] : [''];
		return (
			<div>
				<form onSubmit={handleSubmit(this.props.onSubmit)}>
					<div>
						<Field
							name="mainSource"
							label="نوع منبع"
							component={this.renderSelector}
							options={this.getSelectOptions(mainSourceOptionsList)}
						/>
						<Field
							name="subSource"
							label={`نوع ${this.renderSubSourceLabel(mainSource)}`}
							component={this.renderSelector}
							options={this.getSelectOptions(subSourceOptionsList)}
						/>
						<Field name="amount" label="مقدار" component={this.renderInput} />
						<button type="submit">تایید</button>
					</div>
				</form>
				<div>
					<Calculator subSource={subSource} amount={amount} />
				</div>
			</div>
		);
	}
}

const selector = formValueSelector('addInventoryForm');

const mapStateToProps = state => {
	return {
		inventoryLabels: state.inventoryLabels,
		labelTranslations: state.labelTranslations,
		mainSource: selector(state, 'mainSource'),
		subSource: selector(state, 'subSource'),
		amount: selector(state, 'amount'),
	};
};

const validate = formValues => {
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
})(connect(mapStateToProps, { addToInventory, getDayPrice, change })(AddInventoryForm));
