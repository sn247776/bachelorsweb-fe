import { Box } from '@mui/material'
import React from 'react'
import UniversalHero from '../../components/Layout/UniversalHero'
import Footer from '../../components/Layout/Footer'

function Term() {
  return (
    <Box>
        <UniversalHero title="Terms & Conditions"/>
        <Box m={"50px"}>
        <h2>1. Introduction</h2>
  <p>Welcome to Bachelor Web (the "Website"). These terms and conditions ("Terms") govern your use of the Website and your purchase of courses offered on the Website. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use the Website.</p>

  <h2>2. Course Enrollment and Payment</h2>
  <p>To enroll in a course on our Website, you must complete the designated payment process. Upon successful payment, you will receive access to the course materials. The price and payment details are clearly specified on the course enrollment page. We reserve the right to change the course fees at any time without prior notice.</p>

  <h2>3. Course Content</h2>
  <p>All course content provided on the Website, including but not limited to videos, documents, and quizzes, is for informational purposes only. The course content is the intellectual property of Bachelor Web and is protected by copyright laws. You may not distribute, modify, transmit, or use the course content for any commercial or non-commercial purposes without our prior written consent.</p>

  <h2>4. Refund Policy</h2>
  <p>We offer a refund policy for our courses. You may request a refund within 7 days of the course purchase date. If the 7-day refund period has expired, we do not provide refunds. To request a refund, please contact our customer support team with your purchase details.</p>

  <h2>5. Intellectual Property Rights</h2>
  <p>All intellectual property rights related to the Website and its content, including but not limited to text, graphics, logos, and images, are the property of Bachelor Web or its licensors. You may not use, reproduce, modify, or distribute any intellectual property from the Website without obtaining explicit written permission from Bachelor Web.</p>

  <h2>6. Limitation of Liability</h2>
  <p>Bachelor Web shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of the Website or the courses offered on the Website.</p>

  <h2>7. Governing Law and Jurisdiction</h2>
  <p>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].</p>

  <h2>8. Modifications</h2>
  <p>Bachelor Web reserves the right to modify or replace these Terms at any time without prior notice. It is your responsibility to review these Terms periodically for any changes. Continued use of the Website after any modifications to the Terms constitutes your acceptance of the revised Terms.</p>

  <h2>9. Contact Us</h2>
        </Box>
        <Footer/>
    </Box>
  )
}

export default Term