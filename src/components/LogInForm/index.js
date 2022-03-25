import React, { useContext, useState } from "react";
import { AccountContext } from "../context/accountContext"; 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BoxContainer, TopContainer, BackDrop, HeaderContainer, HeaderText, SubmitButton, LoginLink, BlobContainer } from './LogInForm.styles';
import { withStyles } from '@mui/styles';

const theme = createTheme({
    typography: {
        fontFamily: "Rubik",
        color: '#fff',
    },
});

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

export default function LogIn() {
    // const { switchToSignup } = useContext(AccountContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

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
						<HeaderContainer>
							<HeaderText>
								Log In
							</HeaderText>
						</HeaderContainer>
					</TopContainer>
					<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 6, ml:3, mr:3 }}>
						<Grid container spacing={5}>
							<Grid item xs={12}>
								<CssTextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									variant="outlined"
								/>
							</Grid>
							<Grid item xs={12}>
								<CssTextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									variant="outlined"
									autoComplete="new-password"
								/>
							</Grid>
						</Grid>
						<SubmitButton>
							Sign Up
						</SubmitButton>
						<Grid container justifyContent="center">
							<Grid item sx={{mt:1, mb:2}}>
								<LoginLink href="#" variant="body2">
									Don't have an account? Sign Up
								</LoginLink>
							</Grid>
						</Grid>
					</Box>
				</BoxContainer>
		</ThemeProvider>
	);
}