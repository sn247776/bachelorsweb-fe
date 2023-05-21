import { Box } from '@mui/material'
import React from 'react'
import PopularCatBox from './PopularCatBox'
import "./popular.css"

function Popular() {
  return (
    <Box className="popular">
        <Box>
        <Box>
            <h4 className='small-heading'>COURSE CATEGORIES</h4>
            <h2 className='main-heading'>Popular Topics To Learn</h2>
        </Box>
        <Box className="popular-grid">
           
                <PopularCatBox/>
                <PopularCatBox/>
                <PopularCatBox/>
                <PopularCatBox/>
                <PopularCatBox/>
                <PopularCatBox/>
                <PopularCatBox/>
                <PopularCatBox/>
            
        </Box>
        </Box>
    </Box>
  )
}

export default Popular