
import mySvg from "../../assets/home-background.svg";
import Box from "@mui/material/Box";


const Home = ()=>{
    return (
        <Box sx={{ backgroundImage: `url(${mySvg})` ,height:"100vh", opacity:" 0.3"}}>
      </Box>
    );

}

export default Home;