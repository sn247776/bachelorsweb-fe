import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Typography, CircularProgress, Paper } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

import { DoughnutChart, LineChart } from "../../components/admin/Chart";
import { getDashboardStats } from "../../redux/actions/admin";
import Loader from "../../components/Layout/Loading";
import Sidebar from "../../components/admin/SidBar";

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Paper
    sx={{
      width: ["100%", "20%"],
      padding: "20px",
      borderRadius: "10px",
    }}
  >
    <Box>
      <Typography variant="body1">{title}</Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" fontWeight="bold">
          {qty}
        </Typography>

        <Box sx={{ display: "flex" }}>
          <Typography>{`${qtyPercentage}%`}</Typography>
          {profit ? (
            <ArrowUpward sx={{ color: "green" }} />
          ) : (
            <ArrowDownward sx={{ color: "red" }} />
          )}
        </Box>
      </Box>
      <Typography variant="body2" sx={{ opacity: 0.6 }}>
        Since Last Month
      </Typography>
    </Box>
  </Paper>
);

const Bar = ({ title, value, profit }) => (
  <Box py={4} px={["0", "20"]}>
    <Typography variant="subtitle1" mb={2}>
      {title}
    </Typography>

    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <Typography>{profit ? "0%" : `-${value}%`}</Typography>

      <Box sx={{ flex: 1, ml: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{ height: 8, borderRadius: 4, backgroundColor: "purple.500" }}
            >
              <Box
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: profit ? "purple.500" : "transparent",
                  width: `${profit ? value : 0}%`,
                }}
              />
            </Box>
          </Box>
          <Typography>{`${value > 100 ? value : 100}%`}</Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

const Dashboard = () => {
  const dispatch = useDispatch();

  const {
    loading,
    stats,
    viewsCount,
    subscriptionCount,
    usersCount,
    subscriptionPercentage,
    viewsPercentage,
    usersPercentage,
    subscriptionProfit,
    viewsProfit,
    usersProfit,
  } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getDashboardStats());
  }, [dispatch]);

  return (
    <Box display={"flex"}>
      <Box>
        <Sidebar />
      </Box>
      <Box m={5} width={"100%"}>
        <Box>
          {loading || !stats ? (
            <Loader />
          ) : (
            <Box>
              <Box
                textAlign="center"
                sx={{ opacity: 0.5, textAlign: "center" }}
              >{`Last change was on ${
                String(new Date(stats[11].createdAt)).split("G")[0]
              }`}</Box>

              <Typography variant="h3">Dashboard</Typography>

              <Box display={"flex"} justifyContent={"space-between"} my={2}>
                <Databox
                  title="Views"
                  qty={viewsCount}
                  qtyPercentage={viewsPercentage}
                  profit={viewsProfit}
                />
                <Databox
                  title="Users"
                  qty={usersCount}
                  qtyPercentage={usersPercentage}
                  profit={usersProfit}
                />
                <Databox
                  title="Subscription"
                  qty={subscriptionCount}
                  qtyPercentage={subscriptionPercentage}
                  profit={subscriptionProfit}
                />
              </Box>

              <Paper>
                <Box my={5} p={5}>
                  <Typography variant="h5">Views Graph</Typography>
                  <LineChart views={stats.map((item) => item.views)} />
                </Box>
              </Paper>

              <Box className="dashgrid">
                <Paper>
                  <Box p={4}>
                    <Typography variant="h5">Progress Bar</Typography>

                    <Box>
                      <Bar
                        profit={viewsProfit}
                        title="Views"
                        value={viewsPercentage}
                      />
                      <Bar
                        profit={usersProfit}
                        title="Users"
                        value={usersPercentage}
                      />
                      <Bar
                        profit={subscriptionProfit}
                        title="Subscription"
                        value={subscriptionPercentage}
                      />
                    </Box>
                  </Box>
                </Paper>

                <Paper>
                <Box p={4} width={"20vw"}>
                  <Typography
                    variant="h5"
                    textAlign={"center"}
                    py={2}
                  >
                    Users
                  </Typography>

                  <DoughnutChart
                    users={[subscriptionCount, usersCount - subscriptionCount]}
                  />
                </Box>
                </Paper>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
