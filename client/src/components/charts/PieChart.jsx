import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor'


const PieChart = ({values,labels}) => {
	const colors = randomColor({count:6})
	
	const options = {
		maintainAspectRatio: false,
		legend:{
			labels:{
				fontSize:22
			}
		}
	}

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
			<Doughnut data={data} options={options} />
		</>
	);
};


export default PieChart