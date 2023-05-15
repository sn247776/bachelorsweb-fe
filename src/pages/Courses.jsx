import { Box,Button,Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from 'react';
import UniversalHero from "../components/Layout/UniversalHero";
import { tokens } from "../theme";
import "./page.css";
import CoursesCard from "../components/CoursesCard";
import Footer from "../components/Layout/Footer"

function Courses() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [category, setCategory] = useState('');
  const categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];
  const inputStyle = {
    border: "2px solid",
    color: colors.link[500],
    borderColor: colors.link[500],
    '::placeholder':{color: 'red'},
  };
  return (
    <Box>
      <UniversalHero />
      <Box className="course-search">
        <input placeholder="Search course..." style={inputStyle} />
      </Box>

      <Box display={"flex"} justifyContent={"center"}>
      <Box width={"50vw"} className="scroll-container">
      <Box className="scroll-content" >
      {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)}    variant="contained"
          color="secondary"
          sx={{
            fontWeight: 600,
           
            margin: "0 10px",
            textTransform: "none",
          }}>
            {item} 
          </Button>
        ))}
      </Box>
    </Box>
      </Box>

      <Box px={5} className="course-grid">
        <CoursesCard/>
        <CoursesCard/>
        <CoursesCard/>
        <CoursesCard/>
        <CoursesCard/>
        <CoursesCard/>
        <CoursesCard/>
        <CoursesCard/>
      </Box>
      <Footer/>
    </Box>
  );
}

export default Courses;
