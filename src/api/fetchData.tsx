export type RowData = {
	make: string,
	model: string,
	price: number
};

export default async function ()  {
	const response = await fetch('https://www.ag-grid.com/example-assets/row-data.json');
	
	if (!response.ok) {
		throw new Error('Network response was not ok')
	  }
	return response.json()
}