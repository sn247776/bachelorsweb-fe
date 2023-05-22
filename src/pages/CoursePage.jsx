import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getCourseLectures } from "../redux/actions/course";
import Header from "../components/Layout/Header";
import Leacture from "../components/Leacture";
import Footer from "../components/Layout/Footer";
import Loading from "../components/Layout/Loading";
import "./coursepage.css";

function CoursePage({ user }) {
  const [lectureNumber, setLectureNumber] = useState(0);
  const videoRef = useRef(null);
  const { lectures, loading } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);

  const lecturesData = lectures.lectures;

  const lecturesPoster = lectures.poster.url;

  console.log(lecturesPoster);

  useEffect(() => {
    const videoElement = videoRef.current;
  
    const handleVideoEnd = () => {
      if (lectureNumber < lecturesData.length - 1) {
        setLectureNumber((prevLectureNumber) => prevLectureNumber + 1);
      }
    };
  
    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }
  
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [lectureNumber, lecturesData, videoRef]);

  if (
    user.role !== "admin" &&
    (!user.subscription || user.subscription.status !== "active")
  ) {
    return <Navigate to={"/subscribe"} />;
  }

  return loading ? (
    <Loading />
  ) : (
    <Box>
      <Box height={"80px"}>
        <Header />
      </Box>
      {lecturesData && lecturesData.length > 0 ? (
        <Box>
          <Box className="course-page">
            <Box>
              <video
                ref={videoRef}
                width={"100%"}
                autoPlay
                controls
                controlsList="nodownload noremoteplayback"
                src={lecturesData[lectureNumber]?.video?.url}
              />
            </Box>
            <Box>
            <Box className="leactures-list">
                {lecturesData.map((element, index) => (
                  <Box
     
                    onClick={() => setLectureNumber(index)}
                    key={element._id}
                    style={lectureNumber === index ? { backgroundColor: "#525ee15b", } : {}}
                  >
                    <Leacture title={element.title} index={index + 1} poster={lecturesPoster}  />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box mx={"30px"} mb={"50px"} width={"90vw"}>
            <Box>
              <h1>
                {lectureNumber + 1} {lecturesData[lectureNumber].title}
              </h1>
              <p className="desc">{lecturesData[lectureNumber].description}</p>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          minHeight={"60vh"}
          fontSize={"3rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={"700"}
        >
          No Lectures
        </Box>
      )}

      <Footer />
    </Box>
  );
}

export default CoursePage;
