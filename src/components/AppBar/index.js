import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import LogoImg from '../../assets/expense_logo.jpg';
import {ExpenseLogo} from './AppBar.styles';

import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import navbarSlice from "../../store/slices/navbar";
import authSlice from "../../store/slices/auth";



function ResponsiveAppBar() {
	const pages = [
		{
			page: 'Dasboard',
			link: '/dashboard'
		},
		{
			page: 'Reports',
			link: '/dashboard'
		}
	];
	
	const settings = [ 'Profile', 'Logout'];

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const selectedPage = useSelector(state => state.navbar.selectedPage);
	console.log("SELECTED PAGE", selectedPage)

	const handleLogout = () => {
		console.log('HANDLELOG OUT')
        dispatch(authSlice.actions.logout());
        navigate("/");
    };

	function handleOpenNavMenu (event) {
		console.log('handleOpenNavMenu',anchorElNav, anchorElUser);
		setAnchorElNav(event.currentTarget);
	};
	function handleOpenUserMenu (event) {
		console.log('handleOpenUserMenu',anchorElNav, anchorElUser);
		setAnchorElUser(event.currentTarget);
	};

	function handleCloseNavMenu (event, link) {
		console.log('handleCloseNavMenu',anchorElNav, anchorElUser);
		if(link) {
			navigate(link);
			console.log(event.currentTarget);
		}
		dispatch(navbarSlice.actions.setSelectedPage(event.currentTarget))
		setAnchorElNav(null);

	};

	const handleCloseUserMenu = (event) => {
		console.log('handleCloseUserMenu',anchorElNav, anchorElUser);
		
		console.log('logout clicked ',event.target.getAttribute('name'))
		if (event.target.getAttribute('name') === 'Logout') {
			handleLogout();
		}
		setAnchorElUser(null);
		
		// event.preventDefault();
	};

	return (
		<AppBar position="static">
			<Container style={{maxWidth:'1920px', paddingLeft:"50px", paddingRight:"50px"}}>
				<Toolbar disableGutters>
					{/* <Typography
						variant="h5"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						Expense Tracker
					</Typography> */}

					<ExpenseLogo src={LogoImg}/>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={event => handleOpenNavMenu(event)}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={event => handleCloseNavMenu(event)}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
							variant='selectedMenu'
						>
						{pages.map((page) => (
							<MenuItem key={page.page} onClick={e => handleCloseNavMenu(e, page.link)}>
								<Typography textAlign="center">{page.page}</Typography>
							</MenuItem>
						))}
						</Menu>
					</Box>

					<Typography
						variant="h5"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					>
						Expense Tracker
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page.page}
								onClick={(e) => handleCloseNavMenu(e, page.link)}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page.page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={event => handleOpenUserMenu(event)} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={(event) => handleCloseUserMenu(event)}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} name={setting} onClick={(event) => handleCloseUserMenu(event)}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
