import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Sidebar from "../../../components/admin/SidBar";
import { createCourse } from "../../../redux/actions/admin";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.admin);

  const categories = [
    "Web development",
    "Artificial Intellegence",
    "Data Structure & Algorithm",
    "App Development",
    "Data Science",
    "Game Development",
  ];

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("createdBy", createdBy);
    myForm.append("file", image);
    dispatch(createCourse(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);
  return (
    <Box display={"flex"}>
      <Sidebar />
      <Box m={5}>
        <Box fontSize={"40px"} margin={"10px 0"}>
          Create Course
        </Box>
        <Box>
          <form onSubmit={submitHandler}>
            <TextField
              margin="normal"
              value={title}
              onChange={e => setTitle(e.target.value)}
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
            <TextField
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="creater"
              label="Creator Name"
              name="creator"
              autoComplete="creator"
              color="secondary"
              variant="filled"
            />

            <select
              focusBorderColor="purple.300"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Category</option>

              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <input
              type="file"
              onChange={changeImageHandler}
              
              accept="image/*"
              required
              className="upload-box"
            />

            <TextField
              value={description}
              onChange={e => setDescription(e.target.value)}
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
              sx={{
                fontWeight: 600,
                fontSize: "16px",
                padding: "5px 0",
                margin: "10px 0",
                textTransform: "none",
              }}
            >
             Create Course
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateCourse;
