import { createTheme } from '@mui/material/styles';

const DarkTheme = createTheme({
	typography: {
		fontSize: 12,
		fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto',
	},
	palette: {
		text: {
			primary: '#fff',
			secondary: '#ccc',
		},
		background: {
			default: '#1b2635',
		},
		primary: {
			main: '#1b2635',
			contrastText: '#ccc',
		},
		secondary: {
			main: '#243143',
			contrastText: '#aaa',
		},
	},
});

export default DarkTheme;
