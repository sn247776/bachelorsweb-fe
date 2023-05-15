import { Box } from "@mui/material";
import React from "react";
import Logo from "../../assets/logo-white.png";

function Footer() {
  return (
    <Box className="footer">
      <Box>
        <Box className="footer-grid">
          <Box maxWidth={"350px"}>
            <Box>
              <Box className="logo">
                <img src={Logo} alt="logo" />
                <Box px={1}><h1>BeachelorWeb</h1></Box>
              </Box>
            </Box>
            <Box>
              <h5>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </h5>
            </Box>
          </Box>
          <Box textAlign={"left"}>
            <h1>Useful Links</h1>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </Box>

          <Box>
            <h1>Contact info</h1>
            <p>275 Quadra Street Victoria Road, New York</p>
            <p>+ 01 234 567 88</p>
            <p>info@example.com</p>
          </Box>
        </Box>
        <Box
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"end"}
          height={"10vh"}
        >
          <h3>
            Copyright 2023 BachelorsWeb | Developed By Sagar Nirwal. All Rights
            Reserved
          </h3>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
