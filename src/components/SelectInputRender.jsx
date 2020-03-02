import React from 'react';
import { Field } from 'redux-form';

const SelectInputRender = ({ selectList, name }) => {
	const options = selectList.map((select, index) => <option key={index}>{select}</option>);

	return (
		<Field name={name} id={name} component="select">
			{options}
		</Field>
	);
};

export default SelectInputRender;
