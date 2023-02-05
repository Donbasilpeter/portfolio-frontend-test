import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AboutCard from "../aboutCard/aboutCard";
import Grid from "@mui/material/Grid";
import mySvg from '../../../public/static/images/about.svg';
const ImageLocations = [
  { loc: "frontend.svg", title: "Front-End Development", description:"  Designs front-end for test-driven development.    " },
  { loc: "fullstack.svg", title: "Full-Stack Development",description:" Analyzes and tests applications prior to launch to remedy last minute issues." },
  { loc: "backend.svg", title: "Back-End Development",description:"  Delivers back-end solution to meet functional or technical specifications." },
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
          <AboutCard sx={{display:{md:"none"}}}cardImage={ImageLocations[1].loc} cardHeading={ImageLocations[1].title} cardDescription={ImageLocations[1].description}/>

            <Box
              sx={{
                display: {xs:"none" ,md: "flex" },
                alignItems: "center",
                gap: 13,

              }}
            >
              {ImageLocations.map((eachCard) => (
                <AboutCard  key={eachCard.title}  cardImage={eachCard.loc} cardHeading={eachCard.title}  cardDescription={eachCard.description} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
