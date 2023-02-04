import { AboutCardProps } from "../../interfaces/props";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const AboutCard = ({cardImage,cardText,sx}:AboutCardProps)=>{
    return(
        <Card sx={{ height:"auto",width: {xs:"60vw",sm:"20rem",md:"13rem"} , my:{xs:5,md:0},...sx}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            width="auto"
            image={"/static/images/" + cardImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography sx={{px:{md:5}}}gutterBottom variant="body1" component="div">
             {cardText}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    )
}
export default AboutCard;
