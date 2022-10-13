import HighCharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options:Highcharts.Options = {
	chart: {
		type: 'spline'
	},
	title: {
		text: 'My chart'
	},
	series: [{
		type: 'spline',
		data: [1,2,1,4,3,6]
	}]
};

const Chart =  () => {
	return (
		<HighchartsReact highcharts={HighCharts} options={options} />
	);
}

export default Chart;