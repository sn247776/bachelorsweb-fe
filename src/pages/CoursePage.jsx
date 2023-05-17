import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Layout/Header";
import Leacture from "../components/Leacture";
import Footer from "../components/Layout/Footer";

function CoursePage() {
  return (
    <Box>
      <Box height={"80px"}>
        <Header />
      </Box>
      <Box className="course-page">
        <Box>
          <video
            width={"100%"}
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
          />
        </Box>
        <Box>
          <Box className="leactures-list">
            <Leacture />
            <Leacture />
            <Leacture />
            <Leacture />
            <Leacture />
            <Leacture />
            <Leacture />
            <Leacture />
            <Leacture />
            <Leacture />
            <Leacture />
            <Leacture />
          </Box>
        </Box>
      </Box>
      <Box mx={"50px"} mb={"50px"} className="course-page">
        <Box>
          <h1>Brand New MERN Stack Course</h1>
          <p>
            With a deep passion for full-stack development and [January 2021] of
            experience in the MERN (MongoDB, Express.js, React.js, Node.js)
            technology stack, I am committed to crafting elegant and efficient
            solutions that exceed client expectations.
            With a deep passion for full-stack development and [January 2021] of
            experience in the MERN (MongoDB, Express.js, React.js, Node.js)
            technology stack, I am committed to crafting elegant and efficient
            solutions that exceed client expectations.

             With a deep passion for full-stack development and [January 2021] of
            experience in the MERN (MongoDB, Express.js, React.js, Node.js)
            technology stack, I am committed to crafting elegant and efficient
            solutions that exceed client expectations.
            With a deep passion for full-stack development and [January 2021] of
            experience in the MERN (MongoDB, Express.js, React.js, Node.js)
            technology stack, I am committed to crafting elegant and efficient
            solutions that exceed client expectations.
            With a deep passion for full-stack development and [January 2021] of
            experience in the MERN (MongoDB, Express.js, React.js, Node.js)
            technology stack, I am committed to crafting elegant and efficient
            solutions that exceed client expectations.

             With a deep passion for full-stack development and [January 2021] of
            experience in the MERN (MongoDB, Express.js, React.js, Node.js)
            technology stack, I am committed to crafting elegant and efficient
            solutions that exceed client expectations.
            With a deep passion for full-stack development and [January 2021] of
            experience in the MERN (MongoDB, Express.js, React.js, Node.js)
            technology stack, I am committed to crafting elegant and efficient
            solutions that exceed client expectations.
          </p>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
}

export default CoursePage;
