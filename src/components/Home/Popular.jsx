import { Box } from "@mui/material";
import React from "react";
import PopularCatBox from "./PopularCatBox";
import "./popular.css";
import WebIcon from '@mui/icons-material/Web';
import ArtificialIntelligenceIcon from '@mui/icons-material/Settings';
import DataStructuresIcon from '@mui/icons-material/Storage';
import AppDevelopmentIcon from '@mui/icons-material/PhoneIphone';
import DataScienceIcon from '@mui/icons-material/Functions';
import GameDevelopmentIcon from '@mui/icons-material/SportsEsports';
import CybersecurityIcon from '@mui/icons-material/Security';
import UiUxDesignIcon from '@mui/icons-material/DesignServices';

function Popular() {  
  const categories = [
    {
      name: "Web Development",
      description: "Creating websites and web applications using HTML, CSS, and JavaScript.",
      icon: <WebIcon fontSize="large" color="secondary" />,
    },
    {
      name: "Artificial Intelligence",
      description: "Developing intelligent systems with human-like abilities.",
      icon: <ArtificialIntelligenceIcon fontSize="large" color="secondary" />,
    },
    {
      name: "Data Structures",
      description: "Designing efficient ways to organize and manipulate data.",
      icon: <DataStructuresIcon fontSize="large" color="secondary" />,
    },
    {
      name: "App Development",
      description: "Building mobile applications for smartphones and tablets.",
      icon: <AppDevelopmentIcon fontSize="large" color="secondary" />,
    },
    {
      name: "Data Science",
      description: "Extracting insights from large datasets using statistics and machine learning.",
      icon: <DataScienceIcon fontSize="large" color="secondary" />,
    },
    {
      name: "Game Development",
      description: "Creating interactive video games for various platforms.",
      icon: <GameDevelopmentIcon fontSize="large" color="secondary" />,
    },
    {
      name: "Cybersecurity",
      description: "Protecting computer systems and networks from unauthorized access and attacks.",
      icon: <CybersecurityIcon fontSize="large" color="secondary" />,
    },
    {
      name: "UI/UX Design",
      description: "Designing user-friendly interfaces for digital products.",
      icon: <UiUxDesignIcon fontSize="large" color="secondary" />,
    },
  ];
  
  return (
    <Box className="popular">
      <Box>
        <Box>
          <h4 className="small-heading">COURSE CATEGORIES</h4>
          <h2 className="main-heading">Popular Topics To Learn</h2>
        </Box>
        <Box className="popular-grid">
          {categories.map((element, index) => (
            <PopularCatBox name={element.name} description={element.description} icon={element.icon} index={index + 1}  />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Popular;
