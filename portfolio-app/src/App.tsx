import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/header/Header';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Home from './components/Home/home';
import Contact from './components/contact/contact';




const theme = createTheme({
  palette: {
    primary: {
      main: '#D61355',
    },
    secondary: {
      main: '#CDB6BF',
    },

  },
  typography: {
    fontFamily: [
      'Quicksand',
      'sans-serif',
    ].join(','),
    h6:{
      fontWeight:500,
    },
    h4:{
      fontWeight:700,
    },
    h2:{
      fontWeight:700,
    },
    
  },

});

const  App = () => {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Box >
        <CssBaseline />
        <Header/>
      <Box component="main" sx={{height:"100%", width:"100%"}}>
        <Home/>
        <Contact/>

      </Box>
    </Box>
    </ThemeProvider>

    </>
  )
}

export default App
