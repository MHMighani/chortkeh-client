import { Field, reduxForm, formValueSelector,change } from 'redux-form';
import { addToInventory, getDayPrice } from '../../actions';
import { connect } from 'react-redux';
import Calculator from '../Calculator';

import React, { Component } from 'react';

class AddInventoryForm extends Component {
	componentDidMount() {
		this.props.getDayPrice();
	}

	renderError({error,touched}){
		
		if(error && touched){
			return (
				<div className="alert alert-danger d-flex justify-content-center" style={{margin:"1rem 0",width:"100%"}}>
					{error}
				</div>
			)
		}
	}

	getSelectOptions = optionsList => {
		let options = optionsList.map((option, index) => <option key={index}>{option}</option>);
		return options;
	};


	renderSelector = ({ input, label, meta, options }) => {
		return (
			<div className="form-group row">
				<label className="col-sm-4 col-form-label" style={{whiteSpace:"nowrap"}}>{label}</label>
				<div className="col-sm-6">
					<select type="select" className="form-control" {...input}>
						{options}
					</select>
				</div>
				{this.renderError(meta)}
			</div>
		);
	};

	renderInput = ({ input, label,meta }) => {
		return (
			<div className="form-group row">
				<label className="col-sm-4 col-form-label">{label}</label>
				<div className="col-sm-6">
					<input className="form-control" min="0" type="number" {...input} />
				</div>
				{this.renderError(meta)}
			</div>
		);
	};

	render() {
		const { handleSubmit, mainSource, subSource, amount } = this.props;
		const mainSourceOptionsList = [...[""],...Object.keys(this.props.inventoryLabels)];
		const subSourceOptionsList = mainSource?[...[""],...this.props.inventoryLabels[mainSource]]:[""];
		return (
			<div className="row justify-content-center align-items-center min-vh-100">
				<form onSubmit={handleSubmit(this.props.onSubmit)} className="col-6 h-100 p-2">
					<div className="container w-70">
						<Field
							name="mainSource"
							label="نوع منبع"
							component={this.renderSelector}
							options={this.getSelectOptions(mainSourceOptionsList)}
						/>
						<Field
							name="subSource"
							label={`نوع ${this.props.mainSource}`}
							component={this.renderSelector}
							options={this.getSelectOptions(subSourceOptionsList)}
						/>
						<Field name="amount" label="مقدار" component={this.renderInput} />
						<button className="btn-lg btn-primary" type="submit">
							تایید
						</button>
					</div>
				</form>
				<div className="col-6 border border-primary rounded" style={{height:"200px",padding:"1rem"}}>
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
		mainSource: selector(state, 'mainSource'),
		subSource: selector(state, 'subSource'),
		amount: selector(state, 'amount'),
	};
};

const validate = formValues => {
	const errors = {}
	
	if(!formValues.mainSource){
		errors["mainSource"] = "لطفا منبع را انتخاب کنید"
	}else if(!formValues.subSource){
		errors["subSource"] = "لطفا منبع را انتخاب کنید"
	}else if(!parseInt(formValues.amount)){
		errors["amount"] = "لطفا مقدار دارایی را مشخص کنید"
	}
	return errors
}

export default reduxForm({
	form: 'addInventoryForm',
	validate
})(connect(mapStateToProps, { addToInventory, getDayPrice, change })(AddInventoryForm));
