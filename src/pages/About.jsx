import { Box, Button } from "@mui/material";
import React from "react";
import UniversalHero from "../components/Layout/UniversalHero";
import snImg from "../assets/profile-pic.png";
import girlImg from "../assets/girl-img.webp";
import Footer from "../components/Layout/Footer";
import CenterGrid from "../components/CenterGrid";

function About() {
  return (
    <Box>
      <UniversalHero title="About" />
      <Box className="about">
        <Box>
          <img src={snImg} alt="Sagar Nirwal" />
        </Box>
        <Box>
          <h1>Sagar Nirwal</h1>
          <p>
            With a deep passion for full-stack development and [January 2021] of
            experience in the MERN (MongoDB, Express.js, React.js, Node.js)
            technology stack, I am committed to crafting elegant and efficient
            solutions that exceed client expectations.
          </p>
          <h2>Hi, I'm Here To Help Your Next Project!</h2>
          <p>
            As a Full Stack Developer with a passion for building scalable and
            dynamic applications, [January 2021] of experience in creating
            software solutions using a variety of technologies and programming
            languages. My expertise includes both frontend and backend
            development, with a strong focus on the MERN (MongoDB, Express.js,
            React.js, Node.js) technology stack. I enjoy collaborating with
            stakeholders to understand their needs and translate them into
            effective solutions that improve business outcomes. My commitment to
            writing clean, maintainable, and efficient code ensures that my
            applications are not only functional but also scalable and
            future-proof. In addition to my technical skills, I am a strong
            communicator and collaborator, able to work well in teams and
            prioritize tasks effectively to meet project deadlines.
          </p>
        </Box>
      </Box>
      <Box className="about-center">
        <Box>
        <Box py={"50px"}>
            <h1>The Executive Team</h1>
            <p>There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill.</p>
        </Box>
        <Box className="center-grid">
            <CenterGrid/>
            <CenterGrid/>
            <CenterGrid/>
            <CenterGrid/>
        </Box>
        </Box>
      </Box>
      <Box className="about-2">
        <Box>
          <img src={girlImg} />
        </Box>
        <Box>
          <h1>Creating A Community Of Life Long Learners</h1>
          <p>
            Our online learning platform is designed to be flexible, enabling
            you to fit your learning around your busy schedule. You can access
            the courses on any device, including desktop computers, tablet &
            mobile devices.
          </p>
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
                Explore Courses
              </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default About;
