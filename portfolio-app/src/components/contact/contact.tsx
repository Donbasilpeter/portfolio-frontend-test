import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Contact = () => {
  const theme = useTheme();
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Box sx={{ height: "100%", pt: "6%", width: "100%" }}>
        <Grid
          container
          sx={{
            height: "100%",
            width: "100%",
            display: { xs: "none", sm: "none", md: "flex" },
          }}
        >
          <Grid xs={6} md={8} sx={{ bgcolor: theme.palette.secondary.main }}>
            <Box sx={{ pl: { md: "10%" }, pr: { md: "20%" }, pt: { md: "1%" } }}>
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
              sx={{ ml: { md: "10%" }, mr: { md: "20%" }, mt: { md: "4%" } }}
            >
              <CardContent>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mx: 10,
                      gap: 5,
                    }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="Name"
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
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                  </Box>
                  <Box
                    sx={{
                      mx: 10,
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
                  <Box textAlign='right'>

                  <Button type="submit" variant="contained" sx={{ my: 2 ,mr:10}}>
                    Send
                  </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={6} md={4}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
