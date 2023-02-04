import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Paper from '@mui/material/Paper';
import SocialMediaGrid from "../socialMediaGrid/socialMediaGrid";


const Contact = () => {
  const theme = useTheme();
  const handleSubmit = (event:any) => {
    event.preventDefault();
    emailjs.sendForm('service_3n67gse', 'template_2khd9bd', event.currentTarget, 'qzFn-rp24mBF-YfbK')
    .then((result) => {
        toast.success('Your Message is Received!');
    }, (error) => {
      toast.error('Failed to Send Your Message!');

    });

  };
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,

    color: theme.palette.text.secondary,
    height: "auto",
    lineHeight: '60px',
    margin: "6rem 4rem auto 5rem"
  }));

  return (
    <Box sx={{ height:  {xs:"205vh",md:"100vh"}, width: "100%" }}>
      <ToastContainer />
      <Box sx={{ height: "100%", pt: { xs:"17%",md: "6%" }, width: "100%" }}>
        <Grid
          container
          sx={{
            height: "100%",
            width: "100%",
            display: { xs: "flex", sm: "flex", md: "flex" },
          }}
        >
          <Grid xs={12} md={8} sx={{ bgcolor: theme.palette.secondary.main }}>
            <Box sx={{ pl: { xs:"5%", md: "15%" }, pr: { xs:"5%",md: "20%" }, pt: {xs:"5%", md: "1%" } }}>
              <Typography
                variant="h3"
                sx={{ color: "black", letterSpacing: 1, lineHeight: 2 }}
              >
                Contact Me
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#2F4858", letterSpacing: 1, lineHeight: 1.5 }}
              >
                I'm eager to hear from you! Whether you have a question,
                concern, or just want to chat, don't hesitate to reach out to
                me.
              </Typography>
            </Box>
            <Card
              sx={{ ml: { md: "15%" }, mr: { md: "20%" }, mt: { xs:"10%",md: "4%" }, mb: { xs:"5%" } }}
            >
              <CardContent>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Box
                    sx={{
                      display: {md:"flex"},
                      alignItems: "center",
                      mx: {xs:1,md:10},
                      gap: 5,
                    }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="name"
                      label="Name"
                      type="text"
                      id="Name"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Email Address"
                      name="email_id"
                      autoComplete="email"
                      autoFocus
                    />
                  </Box>
                  <Box
                    sx={{
                      mx: {xs:1,md:10},
                      mt: 2,
                    }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="message"
                      label="Message"
                      type="text"
                      id="Name"
                      multiline
                      rows={6}
                    />
                  </Box>
                  <Box sx={{textAlign:{xs:"center",md:"right"},mx:{xs:"8px",md:0}}}>

                  <Button type="submit" variant="contained" sx={{ py:{xs:2,md:1},width:{xs:"100%",md:"0%"},my: {xs:2,md:2}, mr:{md:10}}}>
                    Send
                  </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>

            <Box >
            <Item  elevation={0}>
            <Typography variant="h6" color="primary" sx={{ lineHeight: 2 }}> EMAIL :</Typography>
            <Typography variant="body1"  sx={{mb:"4rem"  }}> donbasilpeter@gmail.com</Typography>
            <Typography variant="h6" color="primary" sx={{ lineHeight: 2 }}> PHONE NO :</Typography>
            <Typography variant="body1"   sx={{mb:"4rem"  }}> +919048710212</Typography>
            <Typography variant="h6" color="primary" sx={{ lineHeight: 2 }}> ADDRESS :</Typography>
            <Typography variant="body1"   sx={{mb:"4rem"  }}> Orakottayil (H),<br></br>Kambilikandom,<br></br>Mukkudom P.O, Idukki Dist,<br></br> Kerala, India, <br></br>PIN: 685562</Typography>
            <SocialMediaGrid fontSize = {30}  sx={{ position:"relative", width:"20rem", display: { xs: "flex", sm: "flex", md: "flex" } }} />
           
      
                </Item>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
