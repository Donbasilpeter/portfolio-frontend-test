import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/header/Header';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Home from './components/Home/home';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";




const theme = createTheme({
  palette: {
    primary: {
      main: '#D61355',
    },
    secondary: {
      main: '#ffffff',
    },
    grey:{
      "50":"#BFA5A7"
      
    }
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
    h1:{
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
      <Box component="main" sx={{height:"100%", width:"100%", bgcolor:theme.palette.secondary.main}}>
        <Home/>

      </Box>
    </Box>
    </ThemeProvider>

    </>
  )
}

export default App
