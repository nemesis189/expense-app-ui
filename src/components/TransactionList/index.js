import React from 'react';

import {Wrapper, Content, IconContent, IconWrapper} from './TransactionList.styles';

import { DataGrid } from '@mui/x-data-grid';
import {getCategoryIcon, getMopIcon} from '../../utils/transListTableUtils';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import IconButton from '@mui/material/IconButton';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { useNavigate  } from "react-router-dom";


const StyledDataGrid = withStyles({
	root: {
		"&.MuiDataGrid-root": {
			border: '0px',
		},
		"& .MuiDataGrid-main": {
			fontFamily: "Rubik",
			padding: "4px",
			fontSize: "18px",
		},
		"& .MuiDataGrid-columnHeaders": {
			fontSize: '20px',
		},
		"& .MuiDataGrid-columnHeaderTitle ": {
			fontWeight: '900',
		},
		"& .MuiDataGrid-cell": {
			justifyContent: "center",
		},
		"& .MuiDataGrid-row": {
			marginTop: "10px",
		},
	},
})(DataGrid);

export default function TransactionList({transactionList}) {
	const [rows, setRows] = React.useState([])
	const navigate = useNavigate();

	function loadTransactionForm  (event, params)  {
		event.preventDefault();
		console.log("HERE ARE PARAMS", params);
		navigate("/create", {state: params})
		return;
	}

	const renderEditButton = (params) => {
		return (
			<IconButton aria-label="edit" size="large" onClick={event => loadTransactionForm(event, params)}>
				<ModeEditOutlineIcon />
			</IconButton>
		);
	}
	
	//setting columns
	const columns = [
		{ 
			field: 'amount', 
			headerName: 'Amount', 
			// width: 70,
			flex: 1,
			headerAlign: 'center', 
			// type: 'number' 
		},
		{ 
			field: 'category', 
			headerName: 'Category', 
			// width: 130,
			flex: 1,
			headerAlign: 'center',
			renderCell: (params) => (
				<IconWrapper>
					<IconContent>
						{getCategoryIcon(params.value)}
					</IconContent>
				</IconWrapper>
			), 
		},
		{ 
			field: 'date', 
			headerName: 'Date',
			type: 'date',
			// width: 130, 
			flex: 1,
			headerAlign: 'center',
		},
		{
			field: 'mop',
			headerName: 'Mode Of Payment',
			// width: 90,
			flex: 1,
			headerAlign: 'center',
			renderCell: (params) => (
				<IconWrapper>
					<IconContent>
						{getMopIcon(params.value)}
					</IconContent>
				</IconWrapper>
				
			), 
		},
		{
			field: 'description',
			headerName: 'Description',
			// width: 160,
			flex: 1,
			headerAlign: 'center',
		},
		{
			field: 'tr_type',
			headerName: 'Transaction Type',
			// width: 160,
			flex: 1,
			headerAlign: 'center',
			hide: true
		},
		{
			field: 'action',
			headerName: 'Edit',
			// width: 160,
			// flex: 1,
			headerAlign: 'center',
			// hide: true,
			renderCell: (params) => (
				renderEditButton(params.row)
			),
		},
	];

	// Setting rows
	React.useEffect(() => {
		let rowList = (transactionList).map((t, index) => (
			{	id: t.tr_id,
				amount: t.tr_amount,
				category: t.cat__cat_name,
				date: t.tr_date,
				mop: t.mop__mop_name,
				description: t.tr_note,
				tr_type: t.tr_type__tr_type_name,	

			}
		));
		setRows(rowList);
	},[setRows, transactionList]);
	
	const rowBackgroundStyle = (params) => {
		return params.row.tr_type == 'Income' ? 'green' : 'red'
	};

	return (

		<Wrapper >
			<Content>
				<StyledDataGrid
					rows={rows}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[2]}
					getRowClassName={(params) => rowBackgroundStyle(params)}
				/>
			</Content>
		</Wrapper>
	);
}
