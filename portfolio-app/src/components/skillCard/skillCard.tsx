import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container/Container";
import { Box } from "@mui/system";
import { SkillCardProps } from "../../interfaces/props";
import Link from "@mui/material/Link";

const SkillCard = ({ name, iconLink, description, link }: SkillCardProps) => {
  const theme = useTheme();

  return (
    <Link href={link} underline="none" color="black">
      <Container
        sx={{
          height: { xs: "100%" },
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            justifyContent: { xs: "space-between" },
            display: { xs: "flex" },
            px: {xs:1 },
            pt: {xs:3},
          }}
        >
          <Typography variant="h5" textAlign="left">
            {name}
          </Typography>
          <Box
            component="img"
            sx={{
              height: { xs: 40, md: 40 },
              width: { xs: 40, md: 40 },
            }}
            src={iconLink}
          />
        </Box>
        <Box
          sx={{
            justifyContent: { xs: "space-between" },
            display: { xs: "flex" },
            px: {xs:1},
            pt: {xs:1 },
            pb: {xs:4},

          }}
        >
          <Typography
            color={theme.palette.grey[500]}
            variant="body2"
            textAlign="left"
          >
            {description}
          </Typography>
        </Box>
      </Container>
    </Link>
  );
};
export default SkillCard;
