import { Avatar, Box, Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import UniversalHero from "../../components/Layout/UniversalHero";
import { useDispatch, useSelector } from "react-redux";
import { cancelSubscription, loadUser, logout } from "../../redux/actions/user";
import { Link } from "react-router-dom";
import {
  removeFromPlaylist,
  updateProfilePicture,
} from "../../redux/actions/profile";
import { toast } from "react-hot-toast";
import "./profile.css";
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from "../../components/Layout/Footer";

function Profile({ user }) {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.profile);
  const {
    loading: subscriptionLoading,
    message: subscriptionMessage,
    error: subscriptionError,
  } = useSelector((state) => state.subscription);
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [changephoto, setChangePhoto] = useState(false);

  const handleClick = () => {
    setChangePhoto(!changephoto);
  };

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const removeFromPlaylistHandler = async (id) => {
    await dispatch(removeFromPlaylist(id));
    dispatch(loadUser());
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("file", image);
    setIsLoading(true);
    await dispatch(updateProfilePicture(myForm));
    dispatch(loadUser());
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  const cancelSubscriptionHandler = () => {
    dispatch(cancelSubscription());
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    if (subscriptionMessage) {
      toast.success(subscriptionMessage);
      dispatch({ type: "clearMessage" });
      dispatch(loadUser());
    }

    if (subscriptionError) {
      toast.error(subscriptionError);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, error, message, subscriptionError, subscriptionMessage]);

  return (
    <Box>
      <Box className="update-profile-pic" display={changephoto ? "" : "none"}>
        <Box
          display={"flex"}
          padding={"10px"}
          bgcolor={"white"}
          borderRadius={"10px"}
        >
          <Box>
            <h2>Change Photo</h2>
            <form onSubmit={submitHandler}>
              <Box
                display={"flex"}
                alignItems={"center"}
                height={"50vh"}
                minHeight={"500px"}
                width={"40vw"}
                minWidth={"300px"}
                padding={"20px"}
                flexDirection={"column"}
              >
                <Avatar src={imagePrev} sx={{ width: 160, height: 160 }} />

                <Box maxWidth={"300px"} my={2}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={changeImageHandler}
                    className="upload-box"
                  />
                </Box>
                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      textTransform: "none",
                      width: "120px",
                      height: "40px",
                    }}
                  >
                    {isLoading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Change"
                    )}
                  </Button>
                </Box>

                <Box
                  display={"flex"}
                  alignItems={"flex-end"}
                  justifyContent={"right"}
                  height={"100%"}
                  width={"100%"}
                >
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleClick}
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      textTransform: "none",
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>

      <UniversalHero title="Profile" />
      <Box m={"50px"} minHeight={"70vh"}>
        <Box className="profile">
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box>
              <Box></Box>
              <Avatar
                alt={user.name}
                src={user.avatar.url}
                sx={{ width: 260, height: 260, fontSize: "100px" }}
              />
            </Box>
            <Box p={2}>
              <Button
                type="submit"
                variant="text"
                color="secondary"
                onClick={handleClick}
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  textTransform: "none",
                }}
              >
                Change Profile
              </Button>
            </Box>
          </Box>
          <Box fontWeight={"500"}>
            <p>
              <b>Name: </b> {user.name}
            </p>
            <p>
              <b>Email: </b> {user.email}
            </p>
            <p>
              <b>CreatedAt: </b> {user.createdAt.split("T")[0]}
            </p>
            <Box my={2}>
              {user.role !== "admin" && (
                <Box display={"flex"} alignItems={"center"}>
                  <p>
                    <b>Subscription:</b>
                  </p>
                  {user.subscription &&
                  user.subscription.status === "active" ? (
                    <Button onClick={cancelSubscriptionHandler} color="warning" variant="outlined" sx={{margin:"0px 10px"}}> 
                      Unsubscribe
                    </Button>
                  ) : (
                    <Link to="/subscribe">
                      <Button
                        color="secondary"
                        variant="outlined"
                        sx={{
                          fontWeight: 600,
                          fontSize: "14px",
                          padding: "2px 5px",
                          textTransform: "none",
                          marginLeft: "5px",
                        }}
                      >
                        Subscribe
                      </Button>
                    </Link>
                  )}
                </Box>
              )}
            </Box>
            <Box my={2} textAlign={"center"}>
              <Link to="/updateprofile">
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    textTransform: "none",
                    margin: "2px",
                    width:"150px",
                  height:"40px"
                  }}
                >
                  Update Profile
                </Button>
              </Link>
              <Link to="/changepassword">
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                  margin: "2px",
                  width:"150px",
                  height:"40px"
                }}
              >
                Change Password
              </Button>
              </Link>
            </Box>
            <Box textAlign={"center"}>
            <Button
              onClick={logoutHandler}
              variant="contained"
              color="secondary"
              sx={{
                fontWeight: 600,
                fontSize: "14px",
                textTransform: "none",
                margin: "2px",
                width:"150px",
                  height:"40px"
              }}
            >
              Logout
            </Button>
            <Button
              onClick={logoutHandler}
              variant="contained"
              color="error"
              sx={{
                fontWeight: 600,
                fontSize: "14px",
                textTransform: "none",
                margin: "2px",
                width:"150px",
                  height:"40px"
              }}
            >
              Delete Account
            </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          
          <Box>
            {user.playlist.length > 0 && (
              <Box>
                <h1>Playlist</h1>
<Box className="playlist">
                
                {user.playlist.map((element) => (
                  <Box key={element.course}>
                    <img src={element.poster} alt="Course Poster" />

                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Link to={`/course/${element.course}`}>
                        <Button variant="outlined" color="secondary" sx={{
                          fontWeight: 600,
                          fontSize: "14px",
                          textTransform: "none",
                          width:"105px",
                            height:"40px"
                        }}>
                          Watch Now
                        </Button>
                      </Link>

                      <Button
                      startIcon={<DeleteIcon />}
                      color="error"
                      variant="outlined"
                        onClick={() =>
                          removeFromPlaylistHandler(element.course)
                        }
                        sx={{
                          fontWeight: 600,
                          fontSize: "14px",
                          textTransform: "none",
                          width:"105px",
                            height:"40px"
                        }}
                      >
                       Delete
                      </Button>
                      
                    </Box>
                  </Box>
                ))}
              </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Profile;
