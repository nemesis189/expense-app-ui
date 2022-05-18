import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

import TransactionList from '../TransactionList';
import CategoriesPieChart from '../CategoriesPieChart';
import MopPieChart from '../MopPieChart';
import IncomeExpenseBoard from '../IncomeExpenseBoard';

//styles
import {TabPanelWrapper} from './SideBar.styles';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
				<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

export default function SideBar({transactions, monthOptionList}) {

	const [value, setValue] = React.useState(0);

	const defaultOption = monthOptionList ? (monthOptionList[0] ? monthOptionList[0].month + ' ' + monthOptionList[0].year : "") : '';
	const defaultOptionValue = monthOptionList ? (monthOptionList[0] ? monthOptionList[0].key : null) : null;
	console.log("DEFAULT OPTIONS ",defaultOption,defaultOptionValue  );
	const [monthYear, setMonthYear] = React.useState(defaultOption);
	const [monthYearValue, setMonthYearValue] = React.useState(defaultOptionValue);

	const current_month = '_' + String((new Date()).getMonth() + 1);
    const current_year = '_' + String((new Date()).getFullYear());

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }} >
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="time period for reports"
				sx={{ borderRight: 1, borderColor: 'divider' }}
			>
				<Tab label="Monthly" {...a11yProps(0)} />
				<Tab label="Weekly" {...a11yProps(1)} />
			</Tabs>

			<TabPanelWrapper>
				<TabPanel value={value} index={0}>
					<Grid container sm={12} md={12} spacing={2}>
						<Grid container item sm={12} md={12} >
							<TextField
								id="select-month"
								select
								label="Time Period"
								value={monthYearValue}
								onChange={(e) => {
									setMonthYearValue(e.target.value);
									setMonthYear(e.target.id);
								}}
								helperText="Please select time period"
								style={{width:'40%'}}
								>
								{monthOptionList.map((option) => (
									<MenuItem 
										key={option.month + ' ' + option.year} 
										name={option.month + ' ' + option.year} 
										value={option.key} 
										id={option.month + ' ' + option.year} 
									>
										{option.month + ' ' + option.year} 
									</MenuItem>
								))}
							</TextField>
						</Grid>
						<Grid container item md={12} style={{minHeight:'500px',maxHeight:'500px'}} className="section1">
							<Grid  item sm={12} md={5} >
								<IncomeExpenseBoard month={monthYearValue ? monthYearValue[0] : null} year={monthYearValue ? monthYearValue[1] : null} />
							</Grid>
							<Grid  item sm={12} md={7} >
								<Typography variant="h6" align="left" sx={{p:"0 4rem 1rem 4rem"}}>
									<b>Transactions made in {monthYear}: </b>
								</Typography>
								<TransactionList transactionList={monthYearValue ? transactions[monthYearValue[1]][monthYearValue[0]] : transactions[current_year][current_month]} />
							</Grid>
						</Grid>
						<Grid container item md={12} style={{minHeight:'400px',maxHeight:'600px', background:""}} className="section2">
							<Grid  item sm={12} md={6} >
								<CategoriesPieChart transactionList={monthYearValue ? transactions[monthYearValue[1]][monthYearValue[0]] : transactions[current_year][current_month]} />
							</Grid>
							<Grid  item sm={12} md={6} >
								<MopPieChart transactionList={monthYearValue ? transactions[monthYearValue[1]][monthYearValue[0]] : transactions[current_year][current_month]} />
							</Grid>
						</Grid>
						
					</Grid>
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
			</TabPanelWrapper>

		</Box>
		
	);
}
