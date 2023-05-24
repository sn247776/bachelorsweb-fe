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
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/actions/profile";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, newPassword));
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
      <UniversalHero title="Change Password" />
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
            <h1>Change Password</h1>
            <p>
              "Secure your account with a new password: Update your password for
              enhanced security."
            </p>
          </Box>
          <Box sx={{ mt: 1 }}>
          <form onSubmit={submitHandler}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              type="password"
              label="Old Password"
              name="oldpassword"
              autoFocus
              color="secondary"
              variant="filled"
            />

            <TextField
              required
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              label="New Password"
              name="newpassword"
              autoFocus
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
              Change Password
            </Button>
            </form>
            <Box textAlign="center">
              <Link href="#" variant="body2" color="secondary">
                Return to Profile
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
