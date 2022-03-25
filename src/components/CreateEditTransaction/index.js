import React, { useState } from "react";
import { AccountContext } from '../context/accountContext';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BoxContainer, TopContainer, BackDrop, HeaderContainer, HeaderText, SubmitButton, LoginLink, BlobContainer } from './CreateEditTransaction.styles';
import { withStyles } from '@mui/styles';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { textAlign } from "@mui/system";

const theme = createTheme({
    typography: {
        fontFamily: "Rubik",
        // color: '#fff',
    },
	components: {
		MuiRadio: {
			styleOverrides: {
				root: {
					height: '50px',
					// width:'300px',
					fontSize: '20px',
					borderRadius: '4px',
					'&&.income': {
						color: 'green',
						'&&:hover': {
							background:'rgba(0,135,62,0.2)',
						},
						'&&.Mui-checked': {
							background:'rgba(0,135,62)',
							color: 'white',
						},
					},
					'&&.expense': {
						color: 'red',
						'&&:hover': {
							background:'rgba(171,35,40,0.2)',
						},
						'&&.Mui-checked': {
							background:'rgba(171,35,40)',
							color: 'white',
						}
					},
					
				},
			},
		},
		MuiFormControl: {
			styleOverrides: {
				root: {
					minWidth: '100%',
					alignItems: 'flex-start',
					'& .MuiFormLabel-root.Mui-focused':{
						color: 'rgb(241, 196, 15)',
					},
				}
			}
		},
		MuiFormGroup: {
			styleOverrides: {
				root: {
					'&&.income-expense-buttons': {
						width: '100%',
						alignSelf: 'center',
					},
					'.MuiFormControlLabel-root':{
						marginLeft: '0',
						width:'47%',
					},
					
					'span.MuiRadio-root': {
						width: '100%',
					}
				}
			}
		},
	}
})

const CssTextField = withStyles({
	root : {
		'& label.Mui-focused': {
			color: 'rgb(241, 196, 15)',
		},
		'& .MuiOutlinedInput-root': {
			'&:hover fieldset': {
				borderColor: "rgb(241, 196, 15)",
			},
			'&.Mui-focused fieldset': {
				borderColor: "rgb(241, 196, 15)",
			},
		},
	}
})(TextField);


export default function CreateEditTransaction() {
	const categories = ["Food and Dining", "Shopping", "Bills", "Gifts and Donations", "Travelling", "Medical", "Salary", "Sold Items"]
	const [value, setValue] = useState(null);

	const [category, setCategory] = useState('');
	const handleCategory = (event) => {
		setCategory(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	// const [active, setActive] = useState("login");

	// const switchToSignup = () => {
	// 	setTimeout(() => {
	// 		setActive("signup");
	// 	}, 400);
	// };
	
	// const switchToLogin = () => {
	// 	setTimeout(() => {
	// 		setActive("login");
	// 	}, 400);
	// };

	return (
		<ThemeProvider theme={theme}>
				{/* <CssBaseline /> */}
				<BlobContainer>
					<div className="blob">
						{/* <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx --> */}
						<svg xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
						<path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
						</svg>
					</div>
				</BlobContainer>
				<BoxContainer>
					<TopContainer>
						<BackDrop />
						{/* <Typography component="h2" variant="h5" sx={{zIndex: 10, color:"white"}}> */}
						<HeaderContainer>
							<HeaderText>
								Create/Edit Transaction
							</HeaderText>
						</HeaderContainer>
						{/* </Typography> */}
					</TopContainer>
					<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 0, ml:3, mr:3 }}>

						<Grid container spacing={3}>
							<Grid item xs={12} sm={12}>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										label="Date of Transaction"
										value={value}
										onChange={(newValue) => {
											setValue(newValue);
										}}
										renderInput={(params) => <CssTextField {...params} fullWidth />} 
									/>
								</LocalizationProvider>
							</Grid>
							<Grid item xs={12} sm={12}>
								<CssTextField
									required
									fullWidth
									id="amount"
									label="Amount"
									name="amount"
									variant="outlined"
									autoComplete="transaction-amount"
								/>
							</Grid>
							<Grid item xs={12}>
							<FormControl >
								<FormLabel id="income-expense-buttons-label" sc={{textAlign:"left"}}>Type:</FormLabel>
								<RadioGroup
									className="income-expense-buttons"
									defaultValue="expense"
									name="income-expense-buttons"
									row
								>
									<FormControlLabel value="expense" control={<Radio icon={<span>Expense</span>} checkedIcon={<span>Expense</span>} className="expense">Expense</Radio>} label='' />
									<FormControlLabel value="income" control={<Radio icon={<span>Income</span>} checkedIcon={<span>Income</span>} className="income">Income</Radio>} label=''/>
								</RadioGroup>
							</FormControl>
							</Grid>
							<Grid item xs={12}>
							<CssTextField
								fullWidth
								id="outlined-select-category"
								select
								label="Category"
								value={category}
								onChange={handleCategory}
								helperText="Please select category"
								>
								{categories.map((option) => (
									<MenuItem key={option} value={option}>
										{option}
									</MenuItem>
								))}
							</CssTextField>
							</Grid>
							<Grid item xs={12}>
								<CssTextField
									fullWidth
									name="description"
									label="Description"
									id="description"
									variant="outlined"
									autoComplete="description"
								/>
							</Grid>
						</Grid>
						<SubmitButton>
							Create
						</SubmitButton>
					</Box>
				</BoxContainer>
		</ThemeProvider>
	);
}