import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";




const Contact = () => {
    const theme = useTheme();
  
    return (
      <Box sx={{ height: "100vh", width: "100%"}}>
              <Grid
        container
        sx={{ height: "100%",pt:"5%", display: { xs: "none", sm: "none", md: "flex" } }}
      >
        <Grid xs={6} md={8} sx={{bgcolor:theme.palette.secondary.main}}></Grid>
        <Grid xs={6} md={4}></Grid>
    

      </Grid>
         </Box>
    )
    }

export default Contact;