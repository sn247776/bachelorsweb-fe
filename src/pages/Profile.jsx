import { Avatar, Box, Button } from "@mui/material";
import React from "react";
import UniversalHero from "../components/Layout/UniversalHero";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/user";
import { Link } from "react-router-dom";

function Profile({user}) {
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
              alt={user.name}
              src={user.avatar.url}
              sx={{ width: 260, height: 260, fontSize:"100px" }}
            />
          </Box>
          <Box p={2}>Change Profile</Box>
        </Box>
        <Box fontWeight={"500"}>
            <p><b>Name: </b> {user.name}</p>
            <p><b>Email: </b> {user.email}</p>
            <p><b>CreatedAt: </b> {user.createdAt.split('T')[0]}</p>
            <Box my={2}>
            {user.role !== 'admin' && (
            <Box display={"flex"} alignItems={"center"}>
              <p><b>Subscription:</b></p>
              {user.subscription && user.subscription.status === 'active' ? (
                <Button
                  // isLoading={subscriptionLoading}
                  // onClick={cancelSubscriptionHandler}
                >
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button color="secondary" variant="outlined" sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  padding:"2px 5px",
                  textTransform: "none",
                  marginLeft:"5px"
                }}>Subscribe</Button>
                </Link>
              )}
            </Box>
          )}
            </Box>
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
