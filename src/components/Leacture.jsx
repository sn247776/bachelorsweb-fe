import { Box } from '@mui/material'
import React from 'react'
import ImgLec from "../assets/course-grid.webp"

function Leacture() {
  return (
    <Box className="leacture-box">
        <Box>
            <img src={ImgLec} alt='lect-img'/>
        </Box>
        <Box>
            <h3>Brand New MERN Stack Course</h3>
            <p>Sagar Nirwal</p>
        </Box>
    </Box>
  )
}

export default Leacture