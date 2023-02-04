import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AboutCard from "../aboutCard/aboutCard";
import Grid from "@mui/material/Grid";
import mySvg from '../../../public/static/images/about.svg';
const ImageLocations = [
  { loc: "frontend.svg", text: "Front-End Development" },
  { loc: "fullstack.svg", text: "Full-Stack Development" },
  { loc: "backend.svg", text: "Back-End Development" },
];

const About = () => {
  const theme = useTheme();

  return (
    <Box sx={{backgroundImage: `url(${mySvg})`}}>
      <Box sx={{ textAlign: "center", py: { xs: "5rem" ,md: "8rem" } }}>
        <Typography variant="subtitle1" color="primary">
          {" "}
          WHO AM I ?
        </Typography>
        <Typography variant="h2"> About Me</Typography>
        <Typography
          variant="body1"
          color={theme.palette.grey[500]}
          sx={{ mt: { xs: "1rem" }, px: { xs: "4rem",sm:"7rem", md: "15rem" } }}
        >
          {" "}
          Talented Software Developer equipped with great coding and debugging
          abilities. Accomplishes project goals consistently with elegant,
          scalable code. Works great with team members under Agile and Scrum
          frameworks.
        </Typography>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{mt:{md:8}}}
  
        >
          <Grid item md={3}>
          <AboutCard sx={{display:{md:"none"}}}cardImage={ImageLocations[1].loc} cardText={ImageLocations[1].text} />

            <Box
              sx={{
                display: {xs:"none" ,md: "flex" },
                alignItems: "center",
                gap: 13,

              }}
            >
              {ImageLocations.map((eachCard) => (
                <AboutCard cardImage={eachCard.loc} cardText={eachCard.text} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
