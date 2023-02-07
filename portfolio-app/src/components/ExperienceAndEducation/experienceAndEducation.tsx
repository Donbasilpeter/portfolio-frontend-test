import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Education from "../Education/education";
import Experience from "../Experience/experience";

const ExperienceAndEducation = () => {
  
  return (
    <>
      <Grid
        container
        sx={{  height: "100%", display: { xs: "flex", md: "flex" } }}
      >
        <Education/>
        <Experience/>
      </Grid>
    </>
  );
};

export default ExperienceAndEducation;
