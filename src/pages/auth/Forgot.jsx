import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import UniversalHero from '../../components/Layout/UniversalHero';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { forgetPassword } from '../../redux/actions/profile';


export default function Forgot() {
  const [email, setEmail] = useState('');

  const { loading, message, error } = useSelector(state => state.profile);

  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <Box >
        <UniversalHero title="Forgot Password"/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box textAlign={"center"}>
          <h1>
          Forgot your password?
          </h1>
          <p>
          Please enter the email address associated with your account and We will email you a link to reset your password.
          </p>
          </Box>
          <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
          <TextField
                margin="normal"
                required
                fullWidth
                value={email}
                onChange={e => setEmail(e.target.value)}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color='secondary'
                variant="filled"
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
              Send Request
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