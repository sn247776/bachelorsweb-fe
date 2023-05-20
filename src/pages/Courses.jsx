import { Box, Button, Paper, Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import UniversalHero from "../components/Layout/UniversalHero";
import "../components/components.css";
import "./page.css";
// import CoursesCard from "../components/CoursesCard";
import Footer from "../components/Layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../redux/actions/course";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { loadUser } from "../redux/actions/user";
import { addToPlaylist } from "../redux/actions/profile";

const CoursesCard = ({
  views,
  title,
  imageSrc,
  category,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <Paper>
      <Box className="courses-card" textAlign={"center"}>
        <Box className="course-card-main">
          <Box>
            <img src={imageSrc} />
          </Box>
          <Box px={2}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              margin={"10px 5px"}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Avatar
                  sx={{ width: 35, height: 35, marginRight: "5px" }}
                  alt={creator}
                  src="/"
                />
                <h4>{creator}</h4>
              </Box>
              <h5>{lectureCount} Lessons</h5>
            </Box>
            <Box textAlign={"center"}>
              <h3>{title}</h3>
            </Box>
            <Box my={1}>
              <hr />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Link to={`/course/${id}`}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                }}
              >
                Watch Now
              </Button>
              </Link>
              <Button  onClick={() => addToPlaylistHandler(id)} >Add to playlist</Button>
            </Box>
          </Box>
        </Box>
        <Box className="cat-box">{category}</Box>
      </Box>
    </Paper>
  );
};

const Courses = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // imp work started from the here
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const addToPlaylistHandler = async couseId => {
    await dispatch(addToPlaylist(couseId));
    dispatch(loadUser());
  };
  const categories = [
    "Web development",
    "Artificial Intellegence",
    "Data Structure & Algorithm",
    "App Development",
    "Data Science",
    "Game Development",
  ];

  const { loading, courses, error, message } = useSelector(
    (state) => state.course
  );

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [category, keyword, dispatch, error, message]);

  return (
    <Box>
      <UniversalHero title="Our Courses" />

      <Box display={"flex"} justifyContent={"center"}>
        <Box height={"150px"}>
          <Box
            className={`scrollable-div ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {categories.map((item, index) => (
              <Button
                key={index}
                onClick={() => setCategory(item)}
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: 600,

                  margin: "0 10px",
                  textTransform: "none",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>

      <Box className="course-search">
        <input
          placeholder="Search course..."
          value={keyword}
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
        />
      </Box>

      <Box px={5} className="course-grid">
        {courses.length > 0 ? (
          courses.map((item) => (
            <CoursesCard
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              category={item.category}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <h1>"Courses Not Found"</h1>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Courses;
