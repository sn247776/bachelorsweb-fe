import { Box } from '@mui/material'
import React from 'react'
import Slider from './Slider'
import ReviewImg from "../../assets/review.jpg"

function StudentReviews() {

  return (
    <Box className="reviews-main">
        <Box>
        <Box>
            <h4 className='small-heading'>TESTIMONIAL</h4>
            <h2 className='main-heading'>What Our Student Says</h2>
        </Box>
        <Box className="review-grid">
            <Box className="review-img">
                <img src={ReviewImg}/>
            </Box>
            <Box className="review-text">
                <Slider />
            </Box>
        </Box>
        </Box>
    </Box>
  )
}

export default StudentReviews