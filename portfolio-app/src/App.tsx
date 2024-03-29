import { useRef, useEffect } from "react";
import "./App.scss";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import Header from "./components/header/Header";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./components/Home/home";
import Contact from "./components/contact/contact";
import { useSelector, useDispatch } from "react-redux";
import { State } from "./interfaces/store";
import { setCurrentNavItem } from "./reducers/navbar";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import ExperienceAndEducation from "./components/ExperienceAndEducation/experienceAndEducation";
import { Typography } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#D61355",
    },
    secondary: {
      main: "#F1E5EA",
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
theme = responsiveFontSizes(theme);

const App = () => {

  const scrollProps = { behavior: "smooth" };
  const currentNavItem = useSelector(
    (state: State) => state.navbar.currentNavItem
  );

  const contactRef = useRef() as any;
  const aboutRef = useRef() as any;
  const homeRef = useRef() as any;
  const skillsRef = useRef() as any;



  const dispatch = useDispatch();

  useEffect(() => {
    switch (currentNavItem) {
      case "Contact": {
        contactRef.current.scrollIntoView(scrollProps);
        dispatch(setCurrentNavItem(""));
        break;
      }
      case "Home": {
        homeRef.current.scrollIntoView(scrollProps);
        dispatch(setCurrentNavItem(""));
        break;
      }
      case "About": {
        aboutRef.current.scrollIntoView(scrollProps);
        dispatch(setCurrentNavItem(""));
        break;
      }
      case "Skills": {
        skillsRef.current.scrollIntoView(scrollProps);
        dispatch(setCurrentNavItem(""));
        break;
      }
      default: {
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
            <Typography sx={{wordBreak:"break-word"}}>
            <div ref={homeRef}>
              <Home />
            </div>
            <div ref={aboutRef}>
              <About />
            </div>
            <div ref={skillsRef}>
            <Skills/>
            </div>
            <ExperienceAndEducation/>

            <div ref={contactRef}>
              <Contact />
            </div>
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
