import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Header from '../../components/Layout/Header';
import bgImg from "../../assets/bg-login.png"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Box>
        <Box height={"80px"}>
        <Header/>
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
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: '90vh',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={4}  elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>
              Sign in
            </h2>
            <Box sx={{ mt: 1 }}>
            <form onSubmit={submitHandler}>
              <TextField
                margin="normal"
                required
                fullWidth
                value={email}
                id="email"
                onChange={e => setEmail(e.target.value)}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color='secondary'
                variant="filled"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={password}
                onChange={e => setPassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color='secondary'
                variant="filled"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="secondary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color='secondary'
                sx={{
                    fontWeight: 600,
                    fontSize: "16px",
                    padding: "5px 0",
                    margin: "10px 0",
                    textTransform: "none",
                  }}
                
              >
                Sign In
              </Button>
              </form>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgot" variant="body2" color={"secondary"}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2" color={"secondary"}>
                    {"Don't have an account? Sign Up"}
                  </Link>
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