import mySvg from "../../assets/home-background.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from '@mui/material/Link';
import {ParticlesHome} from "../particles/particles";

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <ParticlesHome/>
      <Grid
        container
        sx={{ height: "100%", display: { xs: "none", sm: "none", md: "flex" } }}
      >
        <Grid xs={6} md={6}>
          <Box sx={{ pl: { md: "15%" }, pt: { md: "16%" } }}>
            <Typography variant="h2" sx={{ color: "black",letterSpacing: 1,lineHeight: 1.5 }}>
              Hi,
              </Typography>
              <Box style={{display:"flex"}}>
            <Typography variant="h2" sx={{ color: "black",letterSpacing: 1,lineHeight: 1.5  }}>
               I'm  &nbsp;
              </Typography>
              <Typography
                variant="h2"
                sx={{ color: theme.palette.primary.main,letterSpacing: 1,lineHeight: 1.5  }}
              >
                Don Basil Peter
            </Typography>
            </Box>
            <Typography  variant="h2" sx={{ color: "black",letterSpacing: 1,lineHeight: 1.5  }}>
              Software developer
            </Typography>
            <Button variant="contained" sx={{ width: 200, p: 2, mt: 4 }}>
              <Typography variant="h5">Learn More</Typography>
            </Button>
            <Grid
              container
              sx={{ position:"relative", mt:"26vh", width:"25rem", display: { xs: "none", sm: "none", md: "flex" } }}
            >
              <Grid xs={3} md={3}>
              <Link href="https://www.linkedin.com/in/donbasilpeter/" >
                <LinkedInIcon
                  sx={{ fontSize: 40, color: theme.palette.grey[500] }}
                />
              </Link>

              </Grid>

              <Grid xs={3} md={3}>
              <Link href="https://twitter.com/donbasilpeter" >

                <TwitterIcon
                  sx={{ fontSize: 40, color: theme.palette.grey[500] }}
                />
              </Link>

              </Grid>

              <Grid xs={3} md={3}>
              <Link href="https://github.com/Donbasilpeter" >

                <GitHubIcon
                  sx={{ fontSize: 40, color: theme.palette.grey[500] }}
                />
              </Link>

              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid xs={6} md={6}>
        <Box
        component="img"
        sx={{
          height: "60%",
          width: "90%",
          mt:"23%",
          backgroundImage: `url(${"static/src/img/main.jpg"})`

        }}
        alt="The house from the offer."
        src="src/assets/home.svg"
      />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
