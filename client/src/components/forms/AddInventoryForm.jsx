import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import { getDayPrice } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddSourceForm from './AddSourceForm';
import RenderInput from './RenderInput';
import RenderError from './RenderError';
import Calculator from '../Calculator';
import useModal from '../modals/useModal';
import Modal from '../modals/Modal';

import './style.scss';

class AddInventoryForm extends Component {
	componentDidMount() {
		this.props.getDayPrice();
	}

	getSelectOptions = (optionsList) => {
		let options = optionsList.map((option, index) => (
			<option key={index} value={option}>
				{this.props.labelTranslations[option]}
			</option>
		));
		return options;
	};

	renderSelector = ({ input, label, meta, options }) => {
		const { isShowing, toggle } = useModal();
		let button;
		if (this.props.mainSource === 'others' && input.name === 'subSource') {
			button = (
				<button id="add-source-btn" className="button" onClick={toggle}>
					<FontAwesomeIcon icon="plus" />
				</button>
			);
		}

		if (isShowing) {
			return (
				<Modal isShowing={isShowing} hide={toggle}>
					<AddSourceForm />
				</Modal>
			);
		}

		return (
			<div className="col-wrapper">
				<div className="input-wrapper">
					{button}
					<select type="select" {...input}>
						{options}
					</select>
					<label>{label}</label>
				</div>
				<RenderError error={meta.error} touched={meta.touched} />
			</div>
		);
	};

	// for rendering subSource label translation
	renderSubSourceLabel = (mainSource) => {
		if (mainSource === 'others') {
			return '';
		} else if (!mainSource) {
			return '';
		} else {
			return this.props.labelTranslations[mainSource];
		}
	};

	render() {
		const { handleSubmit, mainSource, subSource, amount } = this.props;
		const mainSourceOptionsList = [...[''], ...Object.keys(this.props.inventoryLabels)];
		const subSourceOptionsList = mainSource ? [...[''], ...this.props.inventoryLabels[mainSource]] : [''];

		return (
			<form onSubmit={handleSubmit(this.props.onSubmit)}>
				<div className="form-section">
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
	}
}

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
