import { Box, Button, Paper } from "@mui/material";
import React from "react";
import Header from "../../components/Layout/Header";
import { Link, useSearchParams } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function PaymentSuccess() {
  const reference = useSearchParams()[0].get('reference');
  return (
    <Box>
      <Box height={"80px"}>
        <Header />
      </Box>
      <Box
        height={"calc(100vh - 80px)"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}

      >
        <Paper>
          <Box maxWidth={"400px"} width={"90vw"} height={"500px"} padding={"50px"} >
           <Box letterSpacing={1} fontSize={"22px"} textAlign={"center"}> <h2>Payment Success</h2></Box>
     
            <Box textAlign={"center"} my={3} fontSize={"20px"}>
                Congratulation you're a pro member. You have access to premium content
            </Box>
            <Box textAlign={"center"}>
            <CheckCircleIcon color="secondary" sx={{fontSize:"5rem",}}/>
            </Box>
            <Box textAlign={"center"} my={5}>
                <Link to="/login">Go to profile</Link>
                <Box fontSize={"12px"}><p>Reference: {reference}</p></Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default PaymentSuccess;
