import { Box } from '@mui/material'
import React from 'react'
import ImgLec from "../assets/course-grid.webp"
import "./leacture.css"

function Leacture(props) {
  return (
    <Box className="leacture-box">
        <Box>
        <img src={props.poster.url || ImgLec} alt='lect-img' />
        </Box>
        <Box>
            <h3>#{props.index} {props.title}</h3>
            <p>{props.createdBy}</p>
        </Box>
    </Box>
  )
}

export default Leacture