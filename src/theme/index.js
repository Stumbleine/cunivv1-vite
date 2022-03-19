import { createTheme } from '@mui/material/styles';
import { cyan, grey, orange } from '@mui/material/colors';
export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#4FDBE4',
		},
		secondary: {
			main: orange[300],
		},
		background: {
			paper: '#253246',
			default: '#0a1929',
		},
		text: {
			primary: grey[200],
			secondary: grey[400],
			disabled: grey[500],
			icon: grey[400],
		},
		divider: 'rgb(245,245,245,0.30)',
	},
});

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: cyan[700],
		},
		secondary: {
			main: orange[400],
		},
		background: {
			paper: '#fff',
			default: grey[100],
		},
		text: {
			primary: grey[900],
			secondary: grey[800],
			disabled: grey[600],
			icon: grey[800],
		},
		divider: 'rgba(30,30,30,0.30)',
	},
});
