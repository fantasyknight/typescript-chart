import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Grid, Container } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';

import fetchData from './api/fetchData';

import Chart from './components/Chart';
import Table from './components/Table';
import DataContextProvider from './contxet/data';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const queryClient = new QueryClient();

function App() {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<Container>
					<Grid container spacing={2} sx={{ minHeight: '100vh', alignItems: 'center' }}>
						<Grid item xs={12} md={6}>
							<Chart />
						</Grid>
						<Grid item xs={12} md={6} sx={{ minHeight: '500px'}}>
							<DataContextProvider>
								<Table />
							</DataContextProvider>
						</Grid>
					</Grid>
				</Container>
			</QueryClientProvider>
		</div>
	);
}

export default App;
