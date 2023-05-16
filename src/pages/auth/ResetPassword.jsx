import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import UniversalHero from "../../components/Layout/UniversalHero";

export default function ResetPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box>
      <UniversalHero />
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
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
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
