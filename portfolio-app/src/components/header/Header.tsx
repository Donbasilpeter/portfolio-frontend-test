import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HeaderDrawer from "../drawer/Drawer";
import { useDispatch, useSelector} from "react-redux";
import { State } from "../../interfaces/store";
import { setCurrentNavItem } from "../../reducers/navbar";



const drawerWidth = "40%";

export default function DrawerAppBar() {
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const navItems =   useSelector((state:State) => state.navbar.navItems);
  

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <>
      <AppBar
        component="nav"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ mr: { xs: "1%", md: "7%" }, ml: "2%" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color:"black"}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 2,
              display: { xs: "none", md: "block" },
              // color: theme.palette.primary.main,
              color: "black",
              my: "1.5rem",
            }}
          >
            DON
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button onClick={()=>{  dispatch(setCurrentNavItem(item))}} key={item} sx={{ color: "black", mx: "0.5vw" }}>
                <Typography variant="body1"> {item}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block",sm:"block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              minWidth: 240,

            },
          }}
        >
          <HeaderDrawer
            handleDrawerToggle={handleDrawerToggle}
            navItems={navItems}
          />
        </Drawer>
      </Box>
    </>
  );
}
