import { Box, Button, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/Layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { buySubscription } from "../../redux/actions/user";
import { toast } from "react-hot-toast";
import { server } from "../../redux/store";
import axios from "axios";
import logo from '../../assets/logo.png'

const Subscribe = ({user}) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState('');

  const { loading, error, subscriptionId } = useSelector(
    state => state.subscription
  );
  console.log(subscriptionId)
  const { error: courseError } = useSelector(state => state.course);

  const subscribeHandler = async () => {
    const {
      data: { key },
    } = await axios.get(`${server}/razorpaykey`);

    setKey(key);
    dispatch(buySubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (courseError) {
      toast.error(courseError);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key,
          name: 'BeachelorWeb',
          description: 'Get access to all premium content',
          image: logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: '',
          },
          notes: {
            address: '247776 Shamli',
          },
          theme: {
            color: '#525FE1',
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [
    dispatch,
    error,
    courseError,
    user.name,
    user.email,
    key,
    subscriptionId,
  ]);


  return (
    <Box>
      <Box height={"80px"}>
        <Header />
      </Box>
      <Box
        height={"calc(100vh - 80px)"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}

      >
        <Paper>
          <Box maxWidth={"400px"} width={"90vw"} height={"500px"} padding={"50px"} >
           <Box letterSpacing={1}> <h2>Pro Pack</h2></Box>
            <Box display={"flex"} alignItems={"center"} my={2}>
                <Box fontSize={"2rem"}>₹</Box>
              <Box fontSize={"3rem"}> 199</Box> <Box color={"#637381"} mx={1}>/mo</Box>
            </Box>
            <Box textAlign={"center"} my={3} fontSize={"20px"}>
                Join Pro Pack and get access to all Content. 
            </Box>
            <Box textAlign={"center"}>
            <Button
                variant="contained"
                color="secondary"
                onClick={subscribeHandler}
                disabled={loading}
                sx={{
                  fontWeight: 600,
                  padding: "8px 30px",
                  margin: "10px 0",
                  textTransform: "none",
                }}
              >
                Buy Now
              </Button>
            </Box>
            <Box textAlign={"center"} my={5}>
                <h3>100% REFUND AT CANCELLATION</h3>
                <Box fontSize={"12px"}><p><sup>*</sup> Terms & Condution Apply</p></Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}

export default Subscribe