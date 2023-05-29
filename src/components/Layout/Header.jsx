import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, IconButton, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useUserSelector } from "../../App";
import "./header.css";

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
      color: "white",
      fontWeight: "600",
      fontWeight: isActive ? "900" : "none",
      textDecoration: "none",
      fontSize: "28px",

      margin: "10px 0",
    };
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      changeBackground();
    };

    window.addEventListener("scroll", handleScroll);

    // Store the scroll position when navigating away from the page
    const handleBeforeUnload = () => {
      window.sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Restore the scroll position when returning to the page
    const scrollPosition = window.sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        p={2}
        px={3}
        alignItems="center"
        className={navbar ? "navbar nav-fixed" : "navbar"}
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
          ) : (
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
            </Link>
          )}

          <Box className="mobMenu">
            <MenuIcon onClick={handleMenuClick} fontSize="large" />
          </Box>
        </Box>
      </Box>
      <Box
        className={menuOpen ? "mob-navbar open" : "mob-navbar"}
        onClick={handleMenuClick}
      >
        <Box bgcolor={"var(--main-color)"}>
          <Box textAlign="right">
            <Box onClick={handleMenuClick} p={2} color={"white"}>
              <CloseIcon fontSize="large" />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            pb={"50px"}
          >
            <NavLink style={mobLinkStyles} to="/">
              <span>HOME</span>
            </NavLink>
            <NavLink style={mobLinkStyles} to="/courses">
                  <span>COURSES</span>
                </NavLink>
            {isAuthenticated ? (
              <Box className="mob-links">
                <NavLink style={mobLinkStyles} to="/profile">
                  <span>PROFILE</span>
                </NavLink>

              </Box>
            ) : (
              <Box className="mob-links">
                <NavLink style={mobLinkStyles} to="/login">
                  <span>LOGIN</span>
                </NavLink>

              </Box>
            )}
<NavLink style={mobLinkStyles} to="/about">
                  <span>ABOUT</span>
                </NavLink>
                <NavLink style={mobLinkStyles} to="/contact">
                  <span>CONTACT US</span>
                </NavLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
