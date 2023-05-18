import { Avatar, Box, Button } from "@mui/material";
import React from "react";
import UniversalHero from "../components/Layout/UniversalHero";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/user";

function Profile() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Box>
      <UniversalHero title="Profile" />
      <Box  m={"50px"}>
      <Box className="profile">
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
          <Box >
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 260, height: 260, fontSize:"100px" }}
            />
          </Box>
          <Box p={2}>Change Profile</Box>
        </Box>
        <Box fontWeight={"500"}>
            <p><b>Name: </b> Sagar Nirwal</p>
            <p><b>Email: </b> sn247776@gmail.coml</p>
            <p><b>CreatedAt: </b> 2023-05-18</p>
            <Box my={2}>
            <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                  marginRight:"2px"
                }}
              >
                Update Profile
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                  marginLeft:"2px"
                }}
              >
                Change Password
              </Button>
            </Box>
            <Button
            onClick={logoutHandler}
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                  marginLeft:"2px"
                }}
              >
                Logout
              </Button>
        </Box>
      </Box>
      <Box className="playlist">
        <h1>Playlist</h1>
      </Box>
      </Box>
    </Box>
  );
}

export default Profile;
