import { Box} from "@mui/material";
import React from "react";
import CalculateIcon from '@mui/icons-material/CalculateOutlined';

function PopularCatBox() {
  return (
    
    <Box className="popularcat">

        <Box className="popularcat-main">
            <Box>
            <CalculateIcon fontSize="large" color="secondary"/>
            </Box>
          <h5>Lifestyle</h5>
          <p>Embrace nature for a more peaceful lifestyle.</p>
        </Box>
        <Box className="popularcat-hover">
          <p>7 Course</p>
          <h5>Lifestyle</h5>
          <p>Embrace nature for a more peaceful lifestyle.</p>
        </Box>

    </Box>
    
  );
}

export default PopularCatBox;
