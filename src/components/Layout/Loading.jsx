import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import React from "react";
import Logo from '../../assets/logo.png'
function Loading() {
  return (
    <Box display={"flex"} height={"100vh"} width={"100vw"} alignItems={"center"} justifyContent={"center"}>

      <Box>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}> 
          <img src={Logo} alt="logo"/>
         <Box fontSize={"2.2rem"} fontWeight={"600"} mx={1} color="var(--main-color)">
         BeachelorWeb
         </Box>
          </Box>
        <Box my={2}>
          <LinearProgress color="secondary"/>
        </Box>
      </Box>
    </Box>
  );
}

export default Loading;
