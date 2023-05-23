import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-elastic-carousel";
import SlideImg from "../../assets/slide.png";
import SlideImg1 from "../../assets/slide1.png";
import SlideImg2 from "../../assets/slide2.png";
import Quote from "../../assets/quote.png";
function Slider() {
  return (
    <Box width={"100vw"} maxWidth={"600px"} textAlign={"left"} p={2}>
      <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={15000}>
        <div className="slides">
          <img src={Quote} />
          <p>
            " The online courses at Bachelors Web were the perfect fit for my
            busy schedule. I was able to work full-time while pursuing my
            degree, thanks to the flexibility and convenience of online
            learning. The instructors were supportive and engaging."
          </p>
          <Box display={"flex"} alignItems={"center"}>
            <Box>
              <img src={SlideImg} />
            </Box>
            <Box mx={2}>
              <h3>Sophie Moore</h3>
              <h4>UI Designer</h4>
            </Box>
          </Box>
        </div>
        <div className="slides">
          <img src={Quote} />
          <p>
            "Bachelors Web provided the perfect solution for my education amidst
            a hectic schedule. Their online courses offered the flexibility and
            convenience I needed to balance work and studies effectively.
          </p>
          <Box display={"flex"} alignItems={"center"}>
            <Box>
              <img src={SlideImg1} />
            </Box>
            <Box mx={2}>
              <h3>Sophie Moore</h3>
              <h4>UI Designer</h4>
            </Box>
          </Box>
        </div>
        <div className="slides">
          <img src={Quote} />
          <p>
            "Bachelors Web's online courses were a perfect fit for my busy
            schedule. I could work full-time while pursuing my degree, thanks to
            their flexibility. The instructors were supportive and engaging,
            making the learning experience enjoyable."
          </p>
          <Box display={"flex"} alignItems={"center"}>
            <Box>
              <img src={SlideImg2} />
            </Box>
            <Box mx={2}>
              <h3>Sophie Moore</h3>
              <h4>UI Designer</h4>
            </Box>
          </Box>
        </div>
      </Carousel>
    </Box>
  );
}

export default Slider;
