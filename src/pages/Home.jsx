import { Box } from '@mui/material'
import React from 'react'
import Hero from '../components/Home/Hero'
import StudentReviews from '../components/Home/StudentReviews'
import Popular from '../components/Home/Popular'
import Footer from '../components/Layout/Footer'


function Home() {
  return (
    <Box>
        <Hero/>
         <Popular/>
        <StudentReviews/>
        <Footer/>
    </Box>
  )
}

export default Home