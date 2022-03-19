import * as React from 'react';

import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	Container,
	MenuItem,
	Button,
	Divider,
	SvgIcon,
} from '@mui/material';
import Menu from '@mui/material/Menu';
import { Link, NavLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { useSelector, useDispatch } from 'react-redux';

export default function NavBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	/*   const [anchorElUser, setAnchorElUser] = React.useState(null); */

	const dispatch = useDispatch();
	//functiosns
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	/* 	const changeMode = () => {
		dispatch(setThemeMode());
	};
 */

	const logo = 'CUNIV';

	//itemNav
	const ItemNav = (props) => {
		const router = useLocation();
		const active = props.href ? router.pathname === props.href : false;
		return (
			<NavLink to={props.href} style={{ textDecoration: 'none' }}>
				<Button
					disableRipple
					sx={{
						my: 2,
						color: active ? 'primary.main' : 'text.primary',
						fontWeight: 'bold',
					}}>
					{props.text}
				</Button>
			</NavLink>
		);
	};
	const screenSizes = () => {
		return (
			<>
				<Typography variant="h5" sx={{ display: { xs: 'flex', sm: 'none' } }}>
					[ xs ]
				</Typography>
				<Typography
					variant="h5"
					sx={{ display: { xs: 'none', sm: 'flex', md: 'none' } }}>
					[ sm ]
				</Typography>
				<Typography
					variant="h5"
					sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'none' } }}>
					[ md ]
				</Typography>
				<Typography
					variant="h5"
					sx={{
						display: {
							xs: 'none',
							sm: 'none',
							md: 'none',
							lg: 'flex',
							xl: 'none',
						},
					}}>
					[ lg ]
				</Typography>
				<Typography
					variant="h5"
					sx={{
						display: {
							xs: 'none',
							sm: 'none',
							md: 'none',
							lg: 'none',
							xl: 'flex',
						},
					}}>
					[ xl ]
				</Typography>
			</>
		);
	};
	return (
		<AppBar
			position="static"
			elevation={0}
			sx={{
				bgcolor: 'background.default',
				zIndex: 'tooltip',
			}}>
			<Container maxWidth="xl" sx={{ background: 'pink' }}>
				<Toolbar disableGutters>
					{/* LOGO para grandes pantallas */}
					{/*          <Typography
            variant="h6"
            noWrap
            component="div"
            id="logo"
            sx={{
              flexGrow: 1,
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {logo}
            {screenSizes()}
          </Typography> */}
					<Box
						component="div"
						noWrap
						sx={{
							flexGrow: 1,
							mr: 2,
							display: {
								xs: 'none',
								md: 'flex',
							},
							color: 'primary.main',
						}}>
						<Typography>{logo}</Typography>
					</Box>

					{/* menu responsivo con items de pestañas */}
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							aria-controls="menu-appbar"
							size="large"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon></MenuIcon>
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
							keepMounted
							transformOrigin={{ vertical: 'top', horizontal: 'left' }}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: 'block', md: 'none' }, zIndex: 'tooltip' }}>
							<Link to="/" style={{ textDecoration: 'none' }}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign="center" sx={{ color: 'text.primary' }}>
										Home
									</Typography>
								</MenuItem>
							</Link>
							<Link to="/about" style={{ textDecoration: 'none' }}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign="center" sx={{ color: 'text.primary' }}>
										Ofertas
									</Typography>
								</MenuItem>
							</Link>
							<Link to="/portfolio" style={{ textDecoration: 'none' }}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign="center" sx={{ color: 'text.primary' }}>
										Empresas
									</Typography>
								</MenuItem>
							</Link>
							<Link to="/contact" style={{ textDecoration: 'none' }}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign="center" sx={{ color: 'text.primary' }}>
										Estudiantes
									</Typography>
								</MenuItem>
							</Link>
							<Link to="/contact" style={{ textDecoration: 'none' }}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign="center" sx={{ color: 'text.primary' }}>
										Cajeros
									</Typography>
								</MenuItem>
							</Link>
						</Menu>
					</Box>
					{/* Logo para pantallas pequeñas */}
					{/*           <Typography
            variant="h6"
            noWrap
            component="div"
            id="logo"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            {logo}
            {screenSizes()}
          </Typography> */}
					<Box
						component="div"
						noWrap
						sx={{
							mr: 2,
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
							color: 'primary.main',
						}}>
						<Typography>{logo}</Typography>
					</Box>

					{/* Contenendor de pestañas/pagesLinks */}
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<ItemNav href={'/'} text={'Home'}></ItemNav>
						<ItemNav href={'/ofertas'} text={'Ofertas'}></ItemNav>
						<ItemNav href={'/empresas'} text={'Empresas'}></ItemNav>
						<ItemNav href={'/estudiantes'} text={'Estudiantes'}></ItemNav>
						<ItemNav href={'/cajeros'} text={'Cajeros'}></ItemNav>
					</Box>
					{/*Contenedor UserAcount */}
					{/* 					<Box>
						<IconButton sx={{ ml: 1 }} onClick={changeMode}>
							{mode === 'dark' ? (
								<LightModeIcon sx={{ color: 'text.icon' }}></LightModeIcon>
							) : (
								<NightlightIcon sx={{ color: 'text.icon' }}></NightlightIcon>
							)}
						</IconButton>
					</Box>
					<Box sx={{ display: 'flex' }}>
						<IconButton color="inherit" onClick={changeLanguageEn}>
							<Typography variant="subtitle2">EN</Typography>
						</IconButton>
						<Divider orientation="vertical" variant="middle" flexItem></Divider>
						<IconButton color="inherit" onClick={changeLanguageEs}>
							<Typography variant="subtitle2">ES</Typography>
						</IconButton>
					</Box> */}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
