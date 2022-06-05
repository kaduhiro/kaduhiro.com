import { useEffect } from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeContextProvider from '@/themes/Context';
import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	useEffect(() => {
		const jssStyles: Element | null =
			document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles);
		}
	}, []);

	return (
		<ThemeContextProvider>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeContextProvider>
	);
};

export default App;
