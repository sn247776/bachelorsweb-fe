import { Box } from '@mui/material'
import React from 'react'
import "./leacture.css"

function Leacture(props) {
  return (
    <Box className="leacture-box">
        <Box>
            <img src={props.poster} alt='lect-img'/>
        </Box>
        <Box>
            <h3>#{props.index} {props.title}</h3>
            <p>Sagar Nirwal</p>
        </Box>
    </Box>
  )
}

export default Leacture