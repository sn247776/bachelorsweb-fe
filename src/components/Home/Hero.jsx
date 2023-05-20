import { Box, Button } from "@mui/material";
import React from "react";
import Header from "../Layout/Header";
import HeroImg from "../../assets/hero/girl.png";
import GirlBg from "../../assets/hero/girl-bg.png";
import Shape from "../../assets/hero/shape.png";
import Shape1 from "../../assets/hero/shape1.png";
import Shape2 from "../../assets/hero/shape-2.png";
import "./home.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Box>
      <Box className="bg-hero">
        <Header />
        <Box className="grid-hero">
          <Box className="hero-text">
            <Box>
              <img src={Shape1} alt="" className="shape-1" />
              <h4>BETTER LEARNING FUTURE WITH US</h4>
              <h1>Committed To Learn Excellence In Education</h1>
              <p>
                Discover the possibilities of online education and unlock your
                true potential! Expand your mind with online education.
              </p>
              <Link to="/courses">
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: 600,
                  padding: "8px 30px",
                  margin: "10px 0",
                  textTransform: "none",
                }}
              >
                Explore our Courses
              </Button>
              </Link>
            </Box>
          </Box>
          <Box className="hero-img">
            <img src={Shape} alt="shape" />
            <img src={Shape2} alt="shape" className="shape-2" />
            <img src={HeroImg} alt="hero" className="girl" />
            <img src={GirlBg} alt="girl-bg" className="girl-bg" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
