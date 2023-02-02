
import mySvg from "../../assets/home-background.svg";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';



const Home = ()=>{
  const theme = useTheme();

    return (
        <Box sx={{ height:"100vh"}}>
          <Grid container  sx={{ height:"100vh",display: { xs: "none", sm: "none", md: "flex" }}} >
  <Grid xs={6} md={8}>
    <Box sx={{pl:{md:"15%"},pt:{md:"14%"},}}>
      <Typography variant = "h1" sx={{color:"black"}}>
       Hi, I'm
      <Typography variant = "h1" sx={{color:theme.palette.primary.main}}>
         Don Basil Peter
      </Typography>

      </Typography>
      <Typography variant = "h2" sx={{color:theme.palette.grey[500]}}>
         Software developer
      </Typography>

    </Box>
  </Grid>
  <Grid xs={6} md={4 }>
    <Box ></Box>
  </Grid>
</Grid>
      </Box>
    );

}

export default Home;