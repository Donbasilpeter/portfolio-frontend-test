import { useTheme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import { SocialMediaGridProps } from "../../interfaces/props";

const SocialMediaGrid = ({ sx, fontSize }: SocialMediaGridProps) => {
  const theme = useTheme();
  const sxOfIcons = { fontSize: fontSize, color: theme.palette.grey[500] };

  return (
    <Grid container spacing={{xs:3,sm:0}} sx={sx}>
      <Grid xs={3} md={3}>
        <Link href="https://www.linkedin.com/in/donbasilpeter/">
          <LinkedInIcon sx={sxOfIcons} />
        </Link>
      </Grid>

      <Grid xs={3} md={3}>
        <Link href="https://twitter.com/donbasilpeter">
          <TwitterIcon sx={sxOfIcons} />
        </Link>
      </Grid>

      <Grid xs={3} md={3}>
        <Link href="https://github.com/Donbasilpeter">
          <GitHubIcon sx={sxOfIcons} />
        </Link>
      </Grid>
    </Grid>
  );
};
export default SocialMediaGrid;
