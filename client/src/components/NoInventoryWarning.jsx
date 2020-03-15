import React from 'react';

const NoInventoryWarning = () => {
	const message = '!هنوز چیزی به دارایی اضافه نکرده اید';
	return (
		<div id="no-inventory-warning">
			<p>{message}</p>
		</div>
	);
};

export default NoInventoryWarning;
