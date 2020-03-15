import React from 'react';

const TableHead = props => {
	const tableHead = (
		<thead>
			<tr>
				{/* <th></th> */}
				<th scope="col">قیمت کل</th>
				<th scope="col">قیمت روز</th>
				<th scope="col">تعداد</th>
				<th scope="col">منبع</th>
				<th scope="col">#</th>
			</tr>
		</thead>
	);
	return tableHead;
};

export default TableHead;
