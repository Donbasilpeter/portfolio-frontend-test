import { AboutCardProps } from "../../interfaces/props";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const AboutCard = ({cardImage,cardHeading,cardDescription,sx}:AboutCardProps)=>{
  const theme = useTheme();

    return(
        <Card  sx={{ height:"auto",width: {xs:"60vw",sm:"20rem",md:"15rem"} , my:{xs:5,md:0},...sx}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            width="auto"
            image={"/static/images/" + cardImage}
            alt="green iguana"
            sx={{px:{sm:5,md:6}}}
          />
          <CardContent>
            <Typography sx={{px:{md:5}}}gutterBottom variant="body1" component="div">
             {cardHeading}
            </Typography>
            <Typography sx={{ height:{sm:"3rem",md:"4rem"}}} variant="body2" color={theme.palette.grey[500]}>
            {cardDescription}
          </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    )
}
export default AboutCard;
