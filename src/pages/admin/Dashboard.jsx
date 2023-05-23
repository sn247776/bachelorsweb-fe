import React from 'react'
import SidBar from '../../components/admin/SidBar'
import { Box } from '@mui/material'

function Dashboard() {
  return (
    <Box display={"flex"}>
      <SidBar/>
      <Box m={5}>Dashboard</Box>
    </Box>
  )
}

export default Dashboard