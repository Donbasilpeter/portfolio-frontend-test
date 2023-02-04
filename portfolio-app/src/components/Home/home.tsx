import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { ParticlesHome } from "../particles/particles";
import SocialMediaGrid from "../socialMediaGrid/socialMediaGrid";
import { useDispatch } from "react-redux";
import { setCurrentNavItem } from "../../reducers/navbar";



const Home = () => {
  const theme = useTheme();
  const dispatch = useDispatch();


  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <ParticlesHome />
      <Grid
        container
        sx={{ height: "100%", display: { xs: "flex", md: "flex" } }}
      >
        <Grid xs={12} md={6}>
          <Box
            sx={{
              pl: { xs: "12%" },
              pr: { xs: "12%", md: "0%" },
              pt: { xs: "17%", md: "16%" },
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: "black", letterSpacing: 1, lineHeight: 1.5 }}
            >
              Hi,
            </Typography>
            <Box style={{ display: "inline" }}>
              <Typography
                variant="h2"
                sx={{ color: "black", letterSpacing: 1, lineHeight: 1.5 }}
              >
                I'm &nbsp;
                <span style={{ color: theme.palette.primary.main }}>
                  Don Basil Peter,
                </span>
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{ color: "black", letterSpacing: 1, lineHeight: 1.5 }}
            >
              Software developer
            </Typography>
            <Button
              variant="contained"
              sx={{ width: 200, px: 2, py: 1, mt: 4 }}
              onClick={() => {
                dispatch(setCurrentNavItem("About"));
              }}
            >
              <Typography variant="body1">Learn More</Typography>
            </Button>
            <SocialMediaGrid
              fontSize={40}
              sx={{
                position: "relative",
                mt: { xs: 2, md: "14rem" },
                width: "25rem",
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            />
          </Box>
        </Grid>
        <Grid xs={12} md={6} alignItems="center" justifyContent="center">
          <Box
            component="img"
            sx={{
              height: { xs: "auto", md: "60%" },
              width: { xs: "auto", md: "90%" },
              mt: { xs: "10%", md: "23%" },
              px: { xs: "auto" },
            }}
            alt="The house from the offer."
            src="/static/images/home.svg"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
