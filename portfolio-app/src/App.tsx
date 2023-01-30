import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/header/Header';



const theme = createTheme({
  palette: {
    primary: {
      main: '#3E88AA',
    },
    secondary: {
      main: '#2EE0CE',
    },
  }

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
