import { Box, Paper } from '@mui/material'
import React from 'react'
import "./centergrid.css"

function CenterGrid() {
  return (
    <Paper className="center-grid-comp">

        <Box className="space"></Box>
       
        <Box>
            <img src='https://demos.creative-tim.com/otis-kit-pro/static/media/ivana-squares.3c555b856b04c2ab921b.jpg' alt='girl'/>
        </Box>
        <Box>
            <h3>Emma Roberts</h3>
            <h5>UI Designer</h5>
            <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
        </Box>

    </Paper>
  )
}

export default CenterGrid