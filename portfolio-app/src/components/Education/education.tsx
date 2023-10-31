import { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../interfaces/store"; 
import { setCurrentNavItem } from "../../reducers/navbar"; 




const Education = () => {
  const theme = useTheme();
  const educationRef = useRef() as any;
  const dispatch = useDispatch();

  const scrollProps = { behavior: "smooth" };
  const currentNavItem = useSelector(
    (state: State) => state.navbar.currentNavItem
  );
  useEffect(() => {
    switch (currentNavItem) {
      case "Education": {
        educationRef.current.scrollIntoView(scrollProps);
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
        ref={educationRef}
          sx={{
            py: { xs: "5rem", md: "8rem" },
            pr: { xs: "1rem", md: "3rem" },
            pl: { xs: "2rem", md: "8rem" },

            
          }}
        >
          <Typography variant="h3"> Education</Typography>
          <Grid container>
          <Grid xs={12} md={12}>
            <Box sx={{ pt: { xs: "5rem", md: "3rem" } }}>
            <Typography
              sx={{ pb: { xs: 1 } }}
              color="primary"
              variant="h5"
            >
              {" "}
              Full Stack Software Development
            </Typography>
            <Typography color={theme.palette.grey[500]} variant="body1">
              {" "}
              Ontario Graduate Certificate,<br></br>Lambton College, Sarnia<br></br>2005-2015<br></br>
              CGPA:10
            </Typography>
          </Box>
            </Grid>
            <Grid xs={12} md={12}>
            <Box sx={{ pt: { xs: "5rem", md: "3rem" } }}>
            <Typography
              sx={{ pb: { xs: 1} }}
              color="primary"
              variant="h5"
            >
              {" "}
              B.tech ( Bachelor of Technology )
            </Typography>
            <Typography color={theme.palette.grey[500]} variant="body1">
              {" "}
              Computer Science and Engineering,<br></br> St.joseph's Collage of
              Engineering and Technology,Palai<br></br>2017-2021<br></br>CGPA:
              7.6
            </Typography>
          </Box>
            </Grid>
            <Grid xs={12} md={12}>
            <Box sx={{ pt: { xs: "5rem", md: "3rem" } }}>
            <Typography
              sx={{ pb: { xs: 1, md: 1 } }}
              color="primary"
              variant="h5"
            >
              {" "}
              DHSE Kerala (XII)
            </Typography>
            <Typography color={theme.palette.grey[500]} variant="body1">
              {" "}
              Computer Science,<br></br> SNDP Vhss, Adimali,<br></br>2015-2017
              <br></br>Percent: 87.6%
            </Typography>
          </Box>
            </Grid>
            <Grid xs={12} md={12}>
            <Box sx={{ pt: { xs: "5rem", md: "3rem" } }}>
            <Typography
              sx={{ pb: { xs: 1 } }}
              color="primary"
              variant="h5"
            >
              {" "}
              CBSE Board (I-X)
            </Typography>
            <Typography color={theme.palette.grey[500]} variant="body1">
              {" "}
              Queen Mary Public School, Panicankudy<br></br>2005-2015<br></br>
              CGPA:10
            </Typography>
          </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default Education;
