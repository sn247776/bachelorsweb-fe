import { Box } from '@mui/material'
import React from 'react'
import Hero from '../components/Home/Hero'
import StudentReviews from '../components/Home/StudentReviews'


function Home() {
  return (
    <Box>
        <Hero/>
        <StudentReviews/>
    </Box>
  )
}

export default Home