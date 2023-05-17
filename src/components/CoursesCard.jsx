import { Avatar, Box, Button,Paper  } from "@mui/material";
import React from "react";
import "./components.css"
import CourseImg from "../assets/course-grid.webp"

function CoursesCard() {
  return (
    <Paper>
    <Box className="courses-card" textAlign={"center"}>
     
        <Box className="course-card-main">
            <Box>
                <img src={CourseImg}/>
            </Box>
            <Box px={2}>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} margin={"10px 5px"}>
          <Box display={"flex"} alignItems={"center"}>
          <Avatar  sx={{ width: 35, height: 35, marginRight:"5px"  }} alt="Sagar" src="/" />
                <h4>Sagar Nirwal</h4>
          </Box>
                <h5>16 Lessons</h5>
            </Box>
            <Box textAlign={"center"}>
                <h3>The Complete HTML & CSS Bootcamp 2023 Edition</h3>
            </Box>
            <Box my={1}>
            <hr/>
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                }}
              >
                Watch Now
              </Button>
                <button className="playlist-btn">Add to playlist</button>
            </Box>
            </Box>
        </Box>
        <Box className="cat-box">Web Development</Box>
   
    </Box>
    </Paper>
  );
}

export default CoursesCard;
