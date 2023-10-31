import { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../interfaces/store"; 
import { setCurrentNavItem } from "../../reducers/navbar"; 
import mySvg from '../../../public/static/images/about.svg';



const Experience = () => {
  const theme = useTheme();
  const experienceRef = useRef() as any;

  const dispatch = useDispatch();

  const scrollProps = { behavior: "smooth" };
  const currentNavItem = useSelector(
    (state: State) => state.navbar.currentNavItem
  );
  useEffect(() => {
    switch (currentNavItem) {
      case "Experience": {
        experienceRef.current.scrollIntoView(scrollProps);
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
      <Grid xs={12} md={6}>
        <Box
             ref={experienceRef}
          sx={{
            pt: { xs: "5rem", md: "8rem" },
            pr: { xs: "4rem", md: "3rem" },
            pl: { xs: "2rem", md: "8rem" },

            backgroundImage: `url(${mySvg})`,
            height: "100%",
          }}

        >
          <Typography color="primary" variant="h3"> Projects</Typography>
          <Grid container>
          <Grid xs={12} md={12}>
            <Box sx={{ pt: { xs: "5rem", md: "5rem" },pr: { xs: "1rem", md: "10rem" }  }}>
            <Typography   sx={{ pb: { xs: 1 } }}  variant="h5">
              {" "}
              CaseFlow (June 2022 - july 2023) 
            </Typography>
            <Typography color={theme.palette.grey[500]} variant="body1">
              {" "}
              AOT Technologies, Trivandrum, Kerala, <br></br>
              Designed and developed Case Flow , an open- source generic Case Management application built on top of Formsflow.ai using NestUS, React, PostgreSQL, Flask
            </Typography>
          </Box>
            </Grid>
            <Grid xs={12} md={12}>
            <Box sx={{ pt: { xs: "5rem", md: "5rem" }, pr: { xs: "1rem", md: "10rem" } }}>
            <Typography   sx={{ pb: { xs: 1} }} variant="h5">
              {" "}
              Formsflow.ai (Apr 2022 - May 2022)
            </Typography>
            <Typography color={theme.palette.grey[500]} variant="body1">
              {" "}
              AOT Technologies, Trivandrum, Kerala, <br></br>
              developed and tested Forms-flow web application using React Testing
            </Typography>
          </Box>
            </Grid>
            <Grid xs={12} md={12}>
            <Box sx={{ pt: { xs: "5rem", md: "3rem" },  pr: { xs: "1rem", md: "10rem" } }}>
            <Typography     sx={{ pb: { xs: 1} }} variant="h5">
              {" "}
              MODUURN project (Oct 2021 - Mar 2022 )
            </Typography>
            <Typography color={theme.palette.grey[500]} variant="body1">
              {" "}
              AOT Technologies, Trivandrum, Kerala, <br></br>
              Designed and developed the web application for Moduurn mobile ordering platform using Angular, Node.js, MongoDB.
            </Typography>
          </Box>
            </Grid>
                
            <Grid xs={12} md={12}>
            <Box sx={{ pt: { xs: "5rem", md: "5rem" },pr: { xs: "1rem", md: "10rem" }  }}>
            <Typography   sx={{ pb: { xs: 1 } }}  variant="h5">
              {" "}
              Stock Market Portfolio (Feb 2021 - May 2021) 
            </Typography>
            <Typography color={theme.palette.grey[500]} variant="body1">
              {" "}
              Developed a web application to analyze the past performance of stock portfolio by entering stock name and weightage. The app was built using MERN stack
            </Typography>
          </Box>
            </Grid>
            
            <Grid xs={12} md={12}>
            <Box sx={{ py: { xs: "5rem", md: "5rem" },pr: { xs: "1rem", md: "10rem" }  }}>
            <Typography   sx={{ pb: { xs: 1 } }}  variant="h5">
              {" "}
              Skin Disease Prediction Mobile App (June 2020 - Sept 2020) 
            </Typography>
            <Typography color={theme.palette.grey[500]} variant="body1">
              {" "}
             An app to detect skin cancer using AI, developed by Android Studio, Python, Tensorflow, Keras, etc.
            </Typography>
          </Box>
            </Grid>
            

          </Grid>

 
   
        </Box>
      </Grid>
    </>
  );
};

export default Experience;
