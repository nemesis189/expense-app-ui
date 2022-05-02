import React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Toolbar from '@mui/material/Toolbar';

import Transaction from '../Transaction';
import {Wrapper, Content} from './TransactionList.styles';

import { DataGrid } from '@mui/x-data-grid';
import {getCategoryIcon, getMopIcon} from '../../utils/utils';


import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import authSlice from '../../store/slices/auth';

const columns = [
	{ 
		field: 'amount', 
		headerName: 'Amount', 
		width: 70, 
		// type: 'number' 
	},
	{ 
		field: 'category', 
		headerName: 'Category', 
		width: 130,
		renderCell: (params) => (
			getCategoryIcon(params.value)
		), 
	},
	{ 
		field: 'date', 
		headerName: 'Date',
		type: 'date',
		width: 130 
	},
	{
		field: 'mop',
		headerName: 'Mode Of Payment',
		width: 90,
		renderCell: (params) => (
			getMopIcon(params.value)
		), 
	},
	{
		field: 'description',
		headerName: 'Description',
		width: 160,
	},
];


function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}


// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}


export default function EnhancedTable({transactionList}) {
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('calories');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const [rows, setRows] = React.useState([])

	React.useEffect(() => {
		let rowList = (transactionList).map((t, index) => (
			{	id: index,
				amount: t.tr_amount,
				category: t.cat__cat_name,
				date: t.tr_date,
				mop: t.mop__mop_name,
				description: t.tr_note
			}
		));
		setRows(rowList);
	},[setRows, transactionList]);
	
	
	console.log('ROWSSSSS', rows);

	const handleClick = (event, name) => {
	const selectedIndex = selected.indexOf(name);
	let newSelected = [];

	if (selectedIndex === -1) {
		newSelected = newSelected.concat(selected, name);
	} else if (selectedIndex === 0) {
		newSelected = newSelected.concat(selected.slice(1));
	} else if (selectedIndex === selected.length - 1) {
		newSelected = newSelected.concat(selected.slice(0, -1));
	} else if (selectedIndex > 0) {
		newSelected = newSelected.concat(
		selected.slice(0, selectedIndex),
		selected.slice(selectedIndex + 1),
		);
	}

		setSelected(newSelected);
	};

		const handleChangePage = (event, newPage) => {
			setPage(newPage);
		};

		const handleChangeRowsPerPage = (event) => {
			setRowsPerPage(parseInt(event.target.value, 10));
			setPage(0);
		};

		const handleChangeDense = (event) => {
			setDense(event.target.checked);
		};

		const isSelected = (name) => selected.indexOf(name) !== -1;

		// Avoid a layout jump when reaching the last page with empty rows.
		const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	return (

		<div style={{ height: '100%', width: '90%', margin:'50px 50px' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[2]}
				
			/>
		</div>



		// <Box sx={{ width: '100%' }}>
		// 	<Paper sx={{ width: '100%', mb: 2 }}>
		// 	<TableContainer>
		// 		<Table
		// 			sx={{ minWidth: 750 }}
		// 			aria-labelledby="tableTitle"
		// 			size={dense ? 'small' : 'medium'}
		// 		>
				
		// 			<TableHead>
		// 				<TableRow>
		// 					{headCells.map((headCell) => (
		// 						<TableCell
		// 							key={headCell.id}
		// 							align={headCell.numeric ? 'right' : 'left'}
		// 							padding={headCell.disablePadding ? 'none' : 'normal'}
		// 						>
		// 							<TableSortLabel>
		// 								{headCell.label}
		// 							</TableSortLabel>
		// 						</TableCell>
		// 					))}
		// 				</TableRow>
		// 			</TableHead>

		// 			<TableBody>
		// 				{/* if you don't need to support IE11, you can replace the `stableSort` call with:
		// 					rows.slice().sort(getComparator(order, orderBy)) */}
		// 				{stableSort(rows, getComparator(order, orderBy))
		// 				.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
		// 				.map((row, index) => {
		// 					const isItemSelected = isSelected(row.name);
		// 					const labelId = `enhanced-table-checkbox-${index}`;

		// 					return (
		// 					<TableRow
		// 						hover
		// 						onClick={(event) => handleClick(event, row.name)}
		// 						role="checkbox"
		// 						aria-checked={isItemSelected}
		// 						tabIndex={-1}
		// 						key={row.name}
		// 						selected={isItemSelected}
		// 					>
		// 						<TableCell
		// 							component="th"
		// 							id={labelId}
		// 							scope="row"
		// 							padding="none"
		// 						>
		// 							{row.name}
		// 						</TableCell>
		// 						<TableCell align="right">{row.calories}</TableCell>
		// 						<TableCell align="right">{row.fat}</TableCell>
		// 						<TableCell align="right">{row.carbs}</TableCell>
		// 						<TableCell align="right">{row.protein}</TableCell>
		// 					</TableRow>
		// 					);
		// 				})}
		// 				{emptyRows > 0 && (
		// 				<TableRow
		// 					style={{
		// 					height: (dense ? 33 : 53) * emptyRows,
		// 					}}
		// 				>
		// 					<TableCell colSpan={6} />
		// 				</TableRow>
		// 				)}
		// 			</TableBody>
		// 		</Table>
		// 	</TableContainer>
		// 	<TablePagination
		// 		rowsPerPageOptions={[5, 10, 25]}
		// 		component="div"
		// 		count={rows.length}
		// 		rowsPerPage={rowsPerPage}
		// 		page={page}
		// 		onPageChange={handleChangePage}
		// 		onRowsPerPageChange={handleChangeRowsPerPage}
		// 	/>
		// 	</Paper>
		// 	<FormControlLabel
		// 	control={<Switch checked={dense} onChange={handleChangeDense} />}
		// 	label="Dense padding"
		// 	/>
		// </Box>
	);
}
