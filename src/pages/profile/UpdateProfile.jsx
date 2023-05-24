import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import UniversalHero from "../../components/Layout/UniversalHero";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/actions/profile";
import { loadUser } from "../../redux/actions/user";
import { toast } from "react-hot-toast";

export default function UpdateProfile({ user }) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitHandler = async e => {
      e.preventDefault();
      await dispatch(updateProfile(name, email));
      dispatch(loadUser());
      
    };
    const { loading, message, error } = useSelector(state => state.profile);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
        navigate('/profile');
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);


  return (
    <Box>
      <UniversalHero title="Update Profile" />
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box textAlign={"center"}>
            <h1>Update your Profile</h1>
            <p>
              Keep your profile up to date: Easily update your name and email
              address to ensure accurate and relevant information.
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
              value={name}
              type={'text'}
              onChange={e => setName(e.target.value)}
              autoComplete="email"
              autoFocus
              color="secondary"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              type={'email'}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
              color="secondary"
              variant="filled"
            />

            <Button
            disabled={loading}
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
              Update
            </Button>
            <Box textAlign="center">
              <Link href="#" variant="body2" color="secondary">
                Return to Login
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
