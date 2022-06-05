import { ReactNode, VFC, createContext, useState } from 'react';
import { Theme } from '@mui/material/styles';
import LightTheme from '@/themes/Light';
import DarkTheme from '@/themes/Dark';

type ThemeContextType = {
	theme: Theme;
	//setTheme: React.Dispatch<React.SetStateAction<Theme>>;
	setTheme: (name: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>(
	{} as ThemeContextType
);

export type ThemeContextProviderProps = {
	children: ReactNode;
};

const ThemeContextProvider: VFC<ThemeContextProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState(LightTheme);

	const handleSetTheme = (name: string) => {
		localStorage.setItem('theme', name);

		switch (name) {
			case 'Light':
				setTheme(LightTheme);
				break;
			case 'Dark':
				setTheme(DarkTheme);
				break;
			default:
				setTheme(LightTheme);
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
