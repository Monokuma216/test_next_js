import type {AppProps} from 'next/app';
import '../styles/globals.css';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../dev";
import {createTheme, ThemeProvider} from "@mui/material";

function MyApp({Component, pageProps}: AppProps) {

	const theme = createTheme({
		typography: {
			fontFamily: [
				'Arial',
			].join(','),
			fontSize: 20,
			fontWeightLight: 600,
			fontWeightRegular: 600,
		},

		components: {
			MuiButton:{
				styleOverrides:{
					root:{
						textTransform: 'none',
						"&:hover":{
							background: '#5e51f1',
						},
					},
				}
			},
			MuiListItemButton:{
				defaultProps: {
					// The props to change the default for.
					disableRipple: true, // No more ripple, on the whole application 💣!
				},
				styleOverrides:{
					root: {
						'&.Mui-selected': {
							color: '#6F66D7',
							background: 0,
						},
						'&.Mui-selected:after': {
							content: '""',
							borderBottom: '2.5px solid #6F66D7',
							width: '100%',
							position: 'absolute',
							top: '40px',
						},
						'&.Mui-selected:hover':{
							background: 0,
							color: '#4532ef',
						},
						":hover":{
							color: '#4532ef',
							background: 0,
						}
					}
				}
			}
		}

	});


	return <DevSupport ComponentPreviews={ComponentPreviews}
		useInitialHook={useInitial}
	>
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	</DevSupport>;
}

export default MyApp;
