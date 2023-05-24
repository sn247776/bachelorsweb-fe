import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Layout/Header";
import NotFoundImg from "../../assets/404.png"
function NotFound() {
  return (
    <Box>
      <Box height={"80px"}>
        <Header />
      </Box >

      <Box height={"calc(100vh - 80px)" } display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box textAlign={"center"}>
          <h1>Sorry, page not found!</h1>
          <Box maxWidth={"500px"} my={"20px"} color={"#637381"}>
          <p>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </p>
          </Box>
          <Box>
          <img src={NotFoundImg} height="300px" alt="not-found-img"/>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}

export default NotFound;
