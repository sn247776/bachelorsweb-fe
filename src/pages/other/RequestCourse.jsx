import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import UniversalHero from "../../components/Layout/UniversalHero";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { courseRequest } from "../../redux/actions/other";

export default function RequestCourse() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  const dispatch = useDispatch();
  const {
    loading,
    error,
    message: stateMessage,
  } = useSelector(state => state.other);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(courseRequest(name, email, course));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, stateMessage]);




  const linkStyle = {
    textDecoration: "none",
    color: "var(--main-color)",
  };

  return (
    <Box>
      <UniversalHero title="Course Request" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box textAlign={"center"}>
            <p>
              Ready to level up your skills? Fill out the form below and let us
              know which course you wants.
            </p>
          </Box>
          <Box
            component="form"
            onSubmit={submitHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              color="secondary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              label="Email Address"
              name="email"
              autoComplete="email"
              
              color="secondary"
              variant="filled"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="course"
              label="Course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              name="course"
              autoComplete="course"
              placeholder="Explain the course"
              multiline
              rows={3}
              
              color="secondary"
              variant="filled"
            />

            <Button
              type="submit"
              disabled = {loading}
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
              Send Mail
            </Button>
            <Box textAlign="center">
              <NavLink to="/courses" style={linkStyle}>
                Available courses
              </NavLink>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
