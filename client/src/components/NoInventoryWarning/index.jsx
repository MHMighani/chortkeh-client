import React from 'react';

import './style.scss'

const NoInventoryWarning = () => {
	const message = '!هنوز چیزی به دارایی اضافه نکرده اید';
	return (
		<div id="no-inventory-warning">
			<p>{message}</p>
		</div>
	);
};

export default NoInventoryWarning;
