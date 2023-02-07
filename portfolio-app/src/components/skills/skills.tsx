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
    link:"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
  },
  {
    name: "Typescript",
    iconLink: "/static/images/ts.svg",
    description:
      "Works with Typescript and frameworks like React-TypeScript, Angular, NestJS",
      link:"https://www.typescriptlang.org/"
  },
  {
    name: "Python",
    iconLink: "/static/images/python.svg",
    description:
      "Works with Python and frameworks like Flask, FastAPI, NumPy, Pandas",
      link:"https://www.python.org/"
  },
  {
    name: "Databases",
    iconLink: "/static/images/database.png",
    description: "Familiar with PostgreSQL, MongoDB, SQL",
    link:"https://developer.mozilla.org/en-US/docs/Glossary/Database/"
  },
  {
    name: "Docker",
    iconLink: "/static/images/docker.svg",
    description: "Familiar with containerization of applications",
    link:"https://www.docker.com/"
  },
  {
    name: "GraphQL",
    iconLink: "/static/images/graphql.png",
    description: "Familiar with GraphQL queries and implimentation with NestJS",
    link:"https://graphql.org/"
  },
  {
    name: "HTML",
    iconLink: "/static/images/html.svg",
    description: "Familiar with the standard markup language for Web pages",
    link:"https://developer.mozilla.org/en-US/docs/Web/HTML"
  },

  {
    name: "CSS/SCSS",
    iconLink: "/static/images/graphql.png",
    description: "Familiar with CSS/SCSS for styling the Web Applications for a neat design",
    link:"https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "Git",
    iconLink: "/static/images/git.svg",
    description: "Familiar with Git distributed version control system and GitHub",
    link:"https://git-scm.com/"
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
                link={eachSkill.link}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default Skills;
