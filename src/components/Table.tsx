import React, { useState, useEffect, useMemo} from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Box } from '@mui/material';

import { useData } from '../contxet/data';

const Table = () => {
	const rowData = useData();
   
	// Each Column Definition results in one Column.
	const [columnDefs] = useState([
	  {field: 'make', filter: true},
	  {field: 'model', filter: true},
	  {field: 'price'}
	]);

	// DefaultColDef sets props common to all Columns
	const defaultColDef = useMemo( ()=> ({
		sortable: true
	}), []);

	return (
		<Box className="ag-theme-alpine">
			<AgGridReact
				containerStyle={{height: '500px'}}
				rowData={rowData} // Row Data for Rows

				columnDefs={columnDefs} // Column Defs for Columns
				defaultColDef={defaultColDef} // Default Column Properties

				animateRows={true} // Optional - set to 'true' to have rows animate when sorted
				rowSelection='multiple' // Options - allows click selection of rows

           />
		</Box>
	);
}

export default Table;