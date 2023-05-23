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
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/actions/profile";
import { toast } from "react-hot-toast";

export default function ResetPassword() {
  const [password, setPassword] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  const { loading, message, error } = useSelector(state => state.profile);

  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      navigate('/login');
    }
  }, [dispatch, error, message]);

  const linkStyle = {
    textDecoration: "none",
    color: "var(--main-color)",
  };

  return (
    <Box>
      <UniversalHero title="Reset Password" />
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
            <h1>New Password</h1>
            <p>
              Welcome to the password reset page. Please enter your new password
              below to set a new password for your account.
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
              value={password}
            onChange={e => setPassword(e.target.value)}
              id="password"
              label="New Password"
              name="password"
              autoComplete="password"
              autoFocus
              color="secondary"
              variant="filled"
              type="password"
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
              Reset Password
            </Button>
            <Box textAlign="center">
            <NavLink to={"/login"} style={linkStyle}>
            Return to Login
                </NavLink>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
