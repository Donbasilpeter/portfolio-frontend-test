import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import mySvg from "../../../public/static/images/about.svg";
import SkillCard from "../skillCard/skillCard";
const skills = [
  {
    name: "JavaScript",
    iconLink: "/static/images/js.svg",
    description:
      "Works with JavaScript and frameworks like React.js, Express.js, Node.js",
  },
  {
    name: "Typescript",
    iconLink: "/static/images/ts.svg",
    description:
      "Works with Typescript and frameworks like React-TypeScript, Angular, NestJS",
  },
  {
    name: "Python",
    iconLink: "/static/images/python.svg",
    description:
      "Works with Python and frameworks like Flask, FastAPI, NumPy, Pandas",
  },
  {
    name: "Databases",
    iconLink: "/static/images/database.png",
    description: "Familiar with PostgreSQL, MongoDB, SQL",
  },
  {
    name: "Docker",
    iconLink: "/static/images/docker.svg",
    description: "Familiar with containerization of applications",
  },
  {
    name: "GraphQL",
    iconLink: "/static/images/graphql.png",
    description: "Familiar with GraphQL queries and implimentation with NestJS",
  },
  {
    name: "HTML",
    iconLink: "/static/images/html.png",
    description: "Familiar with the standard markup language for Web pages",
  },

  {
    name: "CSS/SCSS",
    iconLink: "/static/images/graphql.png",
    description: "Familiar with CSS/SCSS for styling the Web Applications for a neat design",
  },
  {
    name: "Git",
    iconLink: "/static/images/git.svg",
    description: "Familiar with Git distributed version control system and GitHub",
  },
];

const Skills = () => {
  return (
    <Box sx={{ backgroundImage: `url(${mySvg})` }}>
      <Box
        sx={{
          textAlign: "center",
          pt: { xs: "4rem", sm: "5rem" },
          pb: { xs: "3rem", sm: "2rem" },
        }}
      >
        <Typography variant="h2">Skills</Typography>
      </Box>
          
      <Box sx={{ textAlign: "center", mx: {xs:3, sm:3, md: 10} ,pb: { xs: "5rem", md: "3.5rem" }, }}>
        <Grid container spacing={3}>
          {skills.map((eachSkill) => (
            <Grid key={eachSkill.name} item xs={12} sm={6} md={4} >
              <SkillCard
                name={eachSkill.name}
                iconLink={eachSkill.iconLink}
                description={eachSkill.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default Skills;
