import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import UniversalHero from '../components/Layout/UniversalHero';


export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      name: data.get('name'),
    });
  };

  return (
    <Box >
        <UniversalHero title="Contact Us"/>
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
          <Box textAlign={"center"}>
          <p>
          We're just a click away! Reach out to us and let's start a conversation that will make a difference.
          </p>
          </Box>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                color='secondary'
                variant="filled"
              />
          <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                
                color='secondary'
                variant="filled"
              />

<TextField
                margin="normal"
                required
                fullWidth
                id="message"
                label="Message"
                name="message"
                autoComplete="message"
                multiline
                rows={3}
                
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
              Send Mail
            </Button>
            <Box textAlign="center">
            <Link href="#" variant="body2" color="secondary">
            Request a course
                </Link>
            </Box>

          </Box>
        </Box>
      </Container>
    </Box>
  );
}