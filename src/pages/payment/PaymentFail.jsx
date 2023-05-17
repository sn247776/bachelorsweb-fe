import { Box, Button, Paper } from "@mui/material";
import React from "react";
import Header from "../../components/Layout/Header";
import { Link } from "react-router-dom";
import ReportIcon from '@mui/icons-material/Report';

function PaymentFail() {
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
           <Box letterSpacing={1} fontSize={"22px"} textAlign={"center"}> <h2>Payment Fail</h2></Box>
     
            <Box textAlign={"center"} my={3} fontSize={"20px"}>
                Sorry Your Payment is Failed.
            </Box>
            <Box textAlign={"center"}>
            <ReportIcon color="error" sx={{fontSize:"7rem",}}/>
            </Box>
            <Box textAlign={"center"} my={5}>
                <Link to="/subscribe">Try Again</Link>
                <Box fontSize={"12px"}><p>Reference: safdfdf44fddsfdd9</p></Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default PaymentFail;
