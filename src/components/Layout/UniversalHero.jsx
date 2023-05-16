import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import "./layout.css"

function UniversalHero(props) {
  return (
    <Box>
        <Box className="uni-bg">
            <Header/>
            <Box className="uni-title"><h1>{props.title}</h1></Box>
        </Box>
    </Box>
  )
}

export default UniversalHero