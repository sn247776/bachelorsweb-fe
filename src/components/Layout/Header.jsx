import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, IconButton, useTheme, Button } from "@mui/material";

import { tokens } from "../../theme";

import PersonIcon from "@mui/icons-material/Person";
import Logo from "../../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useUserSelector } from "../../App";

const Header = () => {
  const { isAuthenticated } = useUserSelector();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [navbar, setNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: navbar ? colors.link[500] : "black",
      borderBottom: isActive ? "2px solid" : "none",
      borderColor: colors.greenAccent[500],
      textDecoration: "none",
    };
  };

  const logoColor = () => {
    return {
      display: "flex",
      color: colors.greenAccent[500],
      textDecoration: "none",
    };
  };

  const mobLinkStyles = ({ isActive }) => {
    return {
      color: colors.link[500],
      borderBottom: isActive ? "2px solid" : "none",
      textDecoration: "none",
    };
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        p={2}
        px={3}
        alignItems="center"
        className="navbar"
        bgcolor={navbar ? "white" : ""}
      >
        <Box>
          <NavLink to={"/"} style={logoColor}>
            <img src={Logo} alt="logo" />
            <h1>BeachelorWeb</h1>
          </NavLink>
        </Box>
        <Box display="flex">
          <NavLink style={navLinkStyles} to="/">
            <span>Home</span>
          </NavLink>
          <NavLink style={navLinkStyles} to="/courses">
            <span>Courses</span>
          </NavLink>
          <NavLink style={navLinkStyles} to="/about">
            <span>About</span>
          </NavLink>

          <NavLink style={navLinkStyles} to="/contact">
            <span>Contact Us</span>
          </NavLink>
        </Box>

        <Box display="flex" alignItems="center">
        {isAuthenticated ? (
          <Link to="/profile">
          <Button
          variant="contained"
          startIcon={<PersonIcon sx={{ margin: "0 -8px" }} />}
          color="secondary"
          sx={{
            fontWeight: 600,
            padding: "8px 12px",
            textTransform: "none",
          }}
        >
          Profile
        </Button>
        </Link>
        ):( 
          <Link to="/login">
        <Button
          variant="contained"
          startIcon={<PersonIcon sx={{ margin: "0 -8px" }} />}
          color="secondary"
          sx={{
            fontWeight: 600,
            padding: "8px 12px",
            textTransform: "none",
          }}
        >
          Login
        </Button>
        </Link>)}
        
           
            <Box className="mobMenu">
              <MenuIcon onClick={handleMenuClick} />
            </Box>
         
        </Box>
      </Box>
      <Box
        className={menuOpen ? "mob-navbar" : "mob-navbar open"}
        bgcolor={"white"}
      >
        <Box textAlign="right">
          <IconButton onClick={handleMenuClick}>
            <CloseIcon  />
          </IconButton>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <NavLink style={mobLinkStyles} to="/">
            <span>HOME</span>
          </NavLink>
          <NavLink style={mobLinkStyles} to="/about">
            <span>ABOUT</span>
          </NavLink>
          <NavLink style={mobLinkStyles} to="/course">
            <span>COURSE</span>
          </NavLink>
          <NavLink style={mobLinkStyles} to="/gallery">
            <span>GALLERY</span>
          </NavLink>
          <NavLink style={mobLinkStyles} to="/contact">
            <span>CONTACT US</span>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
