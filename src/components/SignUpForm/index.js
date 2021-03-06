import React, { useState, useEffect } from "react";
import {Link as RouterLink} from 'react-router-dom';
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
import { BoxContainer, TopContainer, BackDrop, HeaderContainer, HeaderText, SubmitButton, LoginLink, BlobContainer } from './SignUpForm.styles';
import { withStyles } from '@mui/styles';

import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import authSlice from "../../store/slices/auth";

const theme = createTheme({
    typography: {
        fontFamily: "Rubik",
        color: '#fff',
    },
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



// const contextValue = { switchToSignup, switchToSignin };


const isPersistedState = stateName => {
	const sessionState = sessionStorage.getItem(stateName);
	return sessionState && JSON.parse(sessionState);
}

export default function SignUp() {
	
	const [user, setUser] = useState('');
	const [token, setToken] = useState('');
	
	const [email, setEmail] = useState('');
	const [first_name, setFirstName] = useState('');
	const [last_name, setLastName] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	async function handleUserSignUp(credentials) {
		const response = await axios
		.post(process.env.REACT_APP_API_URL+'register/', credentials)
		.then((res) => {
			console.log('****************',res);
			dispatch(
				authSlice.actions.setAuthTokens({
					token: res.data.access,
					refreshToken: res.data.refresh,
				})
			);
			dispatch(authSlice.actions.setAccount(res.data.user));
			// setLoading(false);
			navigate("/dashboard");
		})
		.catch((err) => {
			console.log(err);
		});
			// .then(data =>  {return data.json()} );
			// .then( dataJSON => { return dataJSON }); 
		console.log('inside handle', response);
		let responseJSON = await response.json();
		console.log('JSON DATA', responseJSON);
		return responseJSON;
	}

	function handleSubmit (event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		const name = data.get('firstName') + data.get('lastName');
		const email = data.get('email');
		const password = data.get('password');
		var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
		
		handleUserSignUp({
			'u_name': name,
			'u_email':email,
			'u_password':password,
			'u_creation_date':date
		}).then((res) => {

			console.log(res);
			console.log(res.data);

			if (res) {
				if (!isPersistedState(res.user.u_id)) {
						sessionStorage.setItem(res.user.u_email, JSON.stringify(res.token))
					}
				}
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
								Sign up
							</HeaderText>
						</HeaderContainer>
						{/* </Typography> */}
					</TopContainer>
					<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5, ml:3, mr:3 }}>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={6}>
								<CssTextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									variant="outlined"
									sx={{
										borderRadius: 5
									}}
									onChange={(e) => setFirstName(e.target.value)}
									value={first_name}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<CssTextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									variant="outlined"
									autoComplete="family-name"
									onChange={(e) => setLastName(e.target.value)}
									value={last_name}
								/>
							</Grid>
							<Grid item xs={12}>
								<CssTextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									variant="outlined"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
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
									onChange={(e) => setPassword(e.target.value)}
									value={password}
								/>
							</Grid>
						</Grid>
						<SubmitButton>
							Sign Up
						</SubmitButton>
						<Grid container justifyContent="center">
							<Grid item sx={{mt:1, mb:2}}>
								<Link component={RouterLink} to='/'>
									<LoginLink href="#" variant="body2" >
										Already have an account? Sign in
									</LoginLink>
								</Link>
							</Grid>
						</Grid>
					</Box>
				</BoxContainer>
		</ThemeProvider>
	);
}