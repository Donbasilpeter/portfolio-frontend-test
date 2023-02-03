import  { useRef,useEffect } from 'react';
import "./App.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/header/Header";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./components/Home/home";
import Contact from "./components/contact/contact";
import { useSelector } from "react-redux";
import { State } from "./interfaces/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D61355",
    },
    secondary: {
      main: "#BFA5A7",
    },
  },
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
    h6: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
  },
});

const App = () => {
  const scrollProps = {behavior: "smooth"}
  const currentNavItem = useSelector(
    (state: State) => state.navbar.currentNavItem
  );

  const contactRef = useRef() as any;
  const homeRef = useRef() as any;


  useEffect(() => {
    switch(currentNavItem) { 
      case "Contact": { 
        contactRef.current.scrollIntoView(scrollProps)
         break; 
      } 
      case "Home": { 
        homeRef.current.scrollIntoView(scrollProps)

         break; 
      } 
      default: { 
        homeRef.current.scrollIntoView(scrollProps)
         break; 
      } 
   } 

    
  }, [currentNavItem]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <CssBaseline />
          <Header />
          <Box component="main" sx={{ height: "100%", width: "100%" }}>
            <div ref={homeRef}><Home /></div>
            <div ref={contactRef}><Contact/></div>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
