import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor'


const PieChart = props => {
	const labels = props.inventoryList.map(asset => props.labelTranslations[asset.subSource])
	const values = props.inventoryList.map(asset => (parseInt(props.allTodayPrices[asset.subSource].Buy) * parseInt(asset.amount)))
	const colors = randomColor({count:6})
	
	const data = {
        labels,
        datasets: [{
            label: '# of Votes',
            data: values,
            backgroundColor: colors,
            borderWidth: 1
        }]
    }
	return (
		<>
			<Doughnut data={data} />
		</>
	);
};


export default PieChart