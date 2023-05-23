import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Button, TextField, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Header from "../../components/Layout/Header";
import bgImg from "../../assets/bg-sign.png"
import { register } from "../../redux/actions/user";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";


export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const submitHandler = e => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('name', name);
    myForm.append('email', email);
    myForm.append('password', password);
    myForm.append('file', image);

    dispatch(register(myForm));
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <Box>
      <Box height={"80px"}>
        <Header />
      </Box>
      <Box>
        <Grid container component="main" sx={{ height: "calc(100vh - 80px)" }}>
          <Grid
            item
            xs={false}
            sm={4}
            md={8}
            sx={{
              backgroundImage: `url(${bgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "75vh",
              backgroundPosition: "top",
            }}
          />
          <Grid item xs={12} sm={8} md={4} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign up</h2>
              <Box
                component="form"
                noValidate
                onSubmit={submitHandler}
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                  color="secondary"
                  variant="filled"
                />
                <Box>
                <p style={{color:"var(--text-color)", fontSize:"14px", margin:"5px 10px"}}>Profile Pic</p>

<input type="file" onChange={changeImageHandler}  accept="image/*"
required  id="chooseAvatar" className="upload-box"/>
                </Box>

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
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item xs>
  
                  </Grid>
                  <Grid item>
                    <NavLink to="/login" style={linkStyle}>
                      {"Allready have an account? Login"}
                    </NavLink>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}