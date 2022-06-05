import { createTheme } from '@mui/material/styles';

const LightTheme = createTheme({
	typography: {
		fontSize: 12,
		fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto',
	},
	palette: {
		text: {
			primary: '#333',
			secondary: '#555',
		},
		background: {
			default: '#fff',
		},
		primary: {
			main: '#2376e5',
			contrastText: '#fff',
		},
		secondary: {
			main: '#e8f0fe',
			contrastText: '#4688f1',
		},
	},
});

export default LightTheme;
