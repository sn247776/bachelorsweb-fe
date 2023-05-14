import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, Button, IconButton, useTheme } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../../assets/logo.png";

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const logoColor = () => {
    return {
      display: "flex",
      color: colors.greenAccent[500],
      textDecoration: "none",
    };
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      
    >
      <Box>
        <NavLink to={"/"} style={logoColor}>
          <img src={Logo} alt="logo" />
          <h1>BeachelorWeb</h1>
        </NavLink>
      </Box>
      <Box display="flex" alignItems="center">
        <span>Home</span>
        <span>Courses</span>
        <span>About</span>
        <span>Contact Us</span>
      </Box>
      <Box>
        <Box display="flex" alignItems="center">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <Button
            variant="contained"
            startIcon={<PersonIcon />}
            color="secondary"
            sx={{ fontWeight: 600, padding: "8px 30px", marginLeft: "10px" }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
