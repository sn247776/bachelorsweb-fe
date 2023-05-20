import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import Leacture from "../components/Leacture";
import Footer from "../components/Layout/Footer";
import Loading from "../components/Layout/Loading";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getCourseLectures } from "../redux/actions/course";

function CoursePage({ user }) {
  const [lectureNumber, setLectureNumber] = useState(0);

  const { lectures, loading } = useSelector((state) => state.course);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);

  if (
    user.role !== "admin" &&
    (user.subscription === undefined || user.subscription.status !== "active")
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
      {lectures && lectures.length > 0 ? (
        <Box>
          <Box className="course-page">
            <Box>
              <video
                width={"100%"}
                controls
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
                src={lectures[lectureNumber]?.video?.url}
              />
            </Box>
            <Box>
              <Box className="leactures-list">
                {lectures.map((element, index) => (
                  <Box
                    onClick={() => setLectureNumber(index)}
                    key={element._id}
                  >
                    <Leacture title={element.title} index={index + 1} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box mx={"50px"} mb={"50px"} className="course-page">
            <Box>
              <h1>
                {lectureNumber + 1} {lectures[lectureNumber].title}
              </h1>
              <p>{lectures[lectureNumber].description}</p>
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
