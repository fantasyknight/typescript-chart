import React, { useContext } from 'react';
import { useQuery } from 'react-query';

import fetchData from '../api/fetchData';

type RowData = {
	make: string,
	model: string,
	price: number
};

const DataContext = React.createContext<Array<RowData>>([]);

export const useData = () => {
	return useContext(DataContext);
}

const DataContextProvider: React.FC<any> = (props) => {
	const {data} = useQuery('tableData', fetchData);

	return (
		<DataContext.Provider value={data!}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider;