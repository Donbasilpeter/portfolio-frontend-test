import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { ParticlesHome } from "../particles/particles"; 
import SocialMediaGrid from "../socialMediaGrid/socialMediaGrid";

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
            <Button variant="contained" sx={{ width: 200, px: 2,py:1, mt: 4 }}>
              <Typography variant="body1">Learn More</Typography>
            </Button>
            <SocialMediaGrid fontSize = {40}sx={{position:"absolute",bottom:"3vh", width:"25rem", display: { xs: "none", sm: "none", md: "flex" }}} />
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
