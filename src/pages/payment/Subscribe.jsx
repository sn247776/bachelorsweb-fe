import { Box, Button, Paper } from "@mui/material";
import React from "react";
import Header from "../../components/Layout/Header";

function Subscribe() {
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
           <Box letterSpacing={1}> <h2>Pro Pack</h2></Box>
            <Box display={"flex"} alignItems={"center"} my={2}>
                <Box fontSize={"2rem"}>₹</Box>
              <Box fontSize={"3rem"}> 199</Box> <Box color={"#637381"} mx={1}>/mo</Box>
            </Box>
            <Box textAlign={"center"} my={3} fontSize={"20px"}>
                Join Pro Pack and get access to all Content. 
            </Box>
            <Box textAlign={"center"}>
            <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: 600,
                  padding: "8px 30px",
                  margin: "10px 0",
                  textTransform: "none",
                }}
              >
                Buy Now
              </Button>
            </Box>
            <Box textAlign={"center"} my={5}>
                <h3>100% REFUND AT CANCELLATION</h3>
                <Box fontSize={"12px"}><p><sup>*</sup> Terms & Condution Apply</p></Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Subscribe;
