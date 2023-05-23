import {
  Box,
  Button,
  Paper,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import UniversalHero from "../../components/Layout/UniversalHero";
import "./course.css";
import Footer from "../../components/Layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/course";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { loadUser } from "../../redux/actions/user";
import { addToPlaylist } from "../../redux/actions/profile";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import LoginIcon from '@mui/icons-material/Login';
import { useUserSelector } from "../../App";

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
  const { isAuthenticated } = useUserSelector();
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

            <Box
            className="card-btn"
            >
              {isAuthenticated ? (
              <Link to={`/course/${id}`}>
              
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PlayCircleFilledWhiteIcon />}
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    textTransform: "none",
                    width:"130px",
                    height:"40px"
                  }}
                >
                  Watch Now
                </Button>
                
              </Link>
              ): (<Link to={"/login"}>
              
              <Button
                variant="contained"
                color="secondary"
                startIcon={<LoginIcon />}
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                  width:"130px",
                  height:"40px"
                }}
              >
                Login Now
              </Button>
              
            </Link>)}
              <Button onClick={() => addToPlaylistHandler(id)} variant="text"
                  color="secondary"  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    textTransform: "none",
                    width:"130px",
                    height:"40px"
                  }}>
                Add to playlist
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="cat-box">{category}</Box>
      </Box>
    </Paper>
  );
};

const Courses = () => {
  // imp work started from the here
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  
  const addToPlaylistHandler = async (couseId) => {
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

      <Box className="search-dropdown">
      <Box className="course-search">
        <input
          placeholder="Search course..."
          value={keyword}
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
        />
      </Box>
      <Box width={"100%"}>
        <FormControl fullWidth color="secondary" variant="filled">
          <InputLabel>Select a category</InputLabel>
          <Select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <MenuItem value="">
              <em>Select a category</em>
            </MenuItem>
            {categories.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
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
          <Box height={"60vh"} textAlign={"center"} my={"50px"}><h1>"Courses Not Found"</h1></Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Courses;
