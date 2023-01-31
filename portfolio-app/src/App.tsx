import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/header/Header';



const theme = createTheme({
  palette: {
    primary: {
      main: '#F60D0D',
    },
    secondary: {
      main: '#2EE0CE',
    },
  },
  typography: {
    fontFamily: [
      'Quicksand',
      'sans-serif',
    ].join(','),
    h6:{
      fontWeight:500,
    }
  },

});

const  App = () => {

  return (
    <>
    <ThemeProvider theme={theme}>
    <Header/>
    </ThemeProvider>

    </>
  )
}

export default App
