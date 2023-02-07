
import Typography from '@mui/material/Typography';
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container/Container";
import { Box } from "@mui/system";
import { SkillCardProps } from '../../interfaces/props';


const SkillCard = ({name,iconLink,description}:SkillCardProps)=>{
  const theme = useTheme();

    return(
        <Container sx={{height:{xs:"100%"}, backgroundColor:"white", }}>
            <Box sx= {{justifyContent:{xs:"space-between"}, display:{xs:"flex"},px:{xs:5},pt:{xs:5}}}>
            <Typography   variant="h5" textAlign="left">
            {name}
            </Typography>
            <Box
            component="img"
            sx={{
              height: { xs: 40, md: 40 },
              width: { xs: 40, md: 40},
 
            }}
            src={iconLink}
          />
            </Box>
            <Box sx= {{justifyContent:{xs:"space-between"}, display:{xs:"flex"},px:{xs:5},py:{xs:3}}}>
            <Typography       color={theme.palette.grey[500]} variant="body2" textAlign="left">
         {description}
            </Typography>
            </Box>


   
        </Container>

    )
}
export default SkillCard;
