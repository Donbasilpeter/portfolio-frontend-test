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
            pr: { xs: "4rem",sm: "7rem", md: "3rem" },
            pl: { xs: "2rem",sm: "7rem", md: "8rem" },

            backgroundImage: `url(${mySvg})`,
            height: "100%",
          }}

        >
          <Typography color="primary" variant="h3"> Experience</Typography>
          <Grid container>
            <Grid xs={12} md={12}>
            <Box sx={{ pt: { xs: "5rem", md: "3rem" },  pr: { xs: "1rem", md: "10rem" } }}>
            <Typography     sx={{ pb: { xs: 1} }} variant="h5">
              {" "}
              MODUURN project (October 2021 to March 2022 )
            </Typography>
            <Typography color={theme.palette.grey[500]} variant="body1">
              {" "}
              Designed and developed the web application for Moduurn mobile
              ordering platform using Angular, Node.js, MongoDB
            </Typography>
          </Box>
            </Grid>
            <Grid xs={12} md={12}>

            <Box sx={{ pt: { xs: "5rem", md: "5rem" }, pr: { xs: "1rem", md: "10rem" } }}>
            <Typography   sx={{ pb: { xs: 1} }} variant="h5">
              {" "}
              Formsflow.ai (April 2022 to may 2022)
            </Typography>
            <Typography color={theme.palette.grey[500]} variant="body1">
              {" "}
              tested Formsflow web application using React Testing Library
            </Typography>
          </Box>
            </Grid>

            <Grid xs={12} md={12}>
            <Box sx={{ py: { xs: "5rem", md: "5rem" },pr: { xs: "1rem", md: "10rem" }  }}>
            <Typography   sx={{ pb: { xs: 1 } }}  variant="h5">
              {" "}
              CaseFlow (June 2022 to Present) -
            </Typography>
            <Typography color={theme.palette.grey[500]} variant="body1">
              {" "}
              Designs and develops Case Flow , an open- source generic Case
              Management application built on top of Formsflow.ai using NestUS,
              React, PostgreSQL, Flask 
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
