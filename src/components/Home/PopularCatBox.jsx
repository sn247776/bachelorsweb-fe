import { Box} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom"

function PopularCatBox(props) {
  return (
    
    <Box className="popularcat">

        <Box className="popularcat-main">
            <Box>
            {props.icon}
            </Box>
          <h5>{props.name}</h5>
          <p>{props.description}</p>
        </Box>
      <Link to="/courses">
      <Box className="popularcat-hover">
        
        <h5>{props.name}</h5>
        <p>{props.description}</p>
      </Box>
      </Link>

    </Box>
    
  );
}

export default PopularCatBox;
