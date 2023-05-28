import React ,{ useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import UniversalHero from "../../components/Layout/UniversalHero";
import Footer from "../../components/Layout/Footer";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { contactUs } from '../../redux/actions/other';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const {
    loading,
    error,
    message: stateMessage,
  } = useSelector(state => state.other);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
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
      <UniversalHero title="Contact Us" />
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
              We're just a click away! Reach out to us and let's start a
              conversation that will make a difference.
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
              label="Name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={e => setName(e.target.value)}
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
              id="message"
              label="Message"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              autoComplete="message"
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
              <NavLink to="/courserequest" style={linkStyle}>
                Request a course
              </NavLink>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box mt={5}>
      <Footer/>
      </Box>
    </Box>
  );
}
