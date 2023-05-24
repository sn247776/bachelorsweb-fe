import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./course.css";

const AdminLectures = ({
  handleClick,
  id,
  deleteButtonHandler,
  addLectureHandler,
  courseTitle,
  lectures = [],
  loading,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };

  const listLecture = lectures.lectures;

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setVideo("");
    setVideoPrev("");
    handleClick();
  };
  return (
    <Box className="admin-lect">
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <h3>{courseTitle}</h3>
        <h1 onClick={handleClose}>X</h1>
      </Box>
      <Box className="lect-grid">
        <Box>
          <Box m={5}>
            <h1>{courseTitle}</h1>
            <p>{id}</p>
            <Box my={2}>
              <h2>Lectures</h2>
            </Box>

            {listLecture?.map((item, i) => (
              <VideoCard
                key={i}
                title={item.title}
                description={item.description}
                num={i + 1}
                lectureId={item._id}
                courseId={id}
                deleteButtonHandler={deleteButtonHandler}
                loading={loading}
              />
            ))}
          </Box>
        </Box>

        <Box m={2}>
          <h2>Add Lecture</h2>
          <form
            onSubmit={(e) =>
              addLectureHandler(e, id, title, description, video)
            }
          >
            <TextField
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              fullWidth
              id="name"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
              color="secondary"
              variant="filled"
            />

            <input
            type="file"
              accept="video/mp4"
              onChange={changeVideoHandler}
              style={{ margin: "5px 0" }}
              required
              className="upload-box"
            />

            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              autoComplete="description"
              multiline
              rows={3}
              color="secondary"
              variant="filled"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              disabled={loading}
              sx={{
                fontWeight: 600,
                fontSize: "16px",
                padding: "5px 0",
                margin: "10px 0",
                textTransform: "none",
              }}
            >
              Upload
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLectures;

function VideoCard({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonHandler,
  loading,
}) {
  return (
    <Box
      border={"1px solid"}
      borderColor={"var(--main-color)"}
      padding={"20px"}
    >
      <Box>
        <h3>
          #{num} {title}
        </h3>
        <p>{description}</p>
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        disabled={loading}
        onClick={() => deleteButtonHandler(courseId, lectureId)}
        sx={{
          fontWeight: 600,
          fontSize: "16px",
          padding: "5px 0",
          margin: "10px 0",
          textTransform: "none",
        }}
      >
        Delete
      </Button>
    </Box>
  );
}
