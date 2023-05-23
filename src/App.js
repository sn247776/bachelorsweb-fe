// Dependencies Importe Here
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// MUi Components Imported Here.
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

// Redux Imported Here
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user";

// Componets Imported Here
import Loading from "./components/Layout/Loading";

// Pages are Imported from the Here
import Home from "./pages/other/Home";
import Courses from "./pages/course/Courses";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Forgot from "./pages/auth/Forgot";
import ResetPassword from "./pages/auth/ResetPassword";
import Contact from "./pages/other/Contact";
import RequestCourse from "./pages/other/RequestCourse";
import About from "./pages/other/About";
import Subscribe from "./pages/payment/Subscribe";
import NotFound from "./pages/other/NotFound";
import PaymentSuccess from "./pages/payment/PaymentSuccess";
import PaymentFail from "./pages/payment/PaymentFail";
import CoursePage from "./pages/course/CoursePage";
import Profile from "./pages/profile/Profile";
import UpdateProfile from "./pages/profile/UpdateProfile";
import ChangePassword from "./pages/profile/ChangePassword";
import Term from "./pages/other/Term";
import Policy from "./pages/other/Policy";

//Admin Routes
import Dashboard from "./pages/admin/Dashboard"
import Users from "./pages/admin/Users";
import CreateCourse from "./pages/admin/Course/CreateCourse";

// its exported becouse we are fatching user information in Profile Page.
export const useUserSelector = () => useSelector((state) => state.user);

function App() {
  const [theme, colorMode] = useMode();

  // Redux Work Started Here
  const { isAuthenticated, user, message, error, loading } = useSelector(
    (state) => state.user
  );

  // This Redux Fucnction import the User Details and Check the all information of usere like is Logind or Not.
  //  and send the infromation to the proteced route to block the pages user not authoursed
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
        <Router>
          {loading ? (
            <Loading />
          ) : (
            <>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />

                <Route
                  path="/course/:id"
                  element={
                    <ProtectedRoute
                      isAuthenticated={isAuthenticated}
                      redirect="/login"
                    >
                      <CoursePage user={user} />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/updateprofile"
                  element={
                    <ProtectedRoute
                      isAuthenticated={isAuthenticated}
                      redirect="/login"
                    >
                      <UpdateProfile user={user} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/changepassword"
                  element={
                    <ProtectedRoute
                      isAuthenticated={isAuthenticated}
                      redirect="/profile"
                    >
                      <ChangePassword />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/subscribe"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <Subscribe user={user} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <Profile user={user} />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/login"
                  element={
                    <ProtectedRoute
                      isAuthenticated={!isAuthenticated}
                      redirect="/profile"
                    >
                      <Login />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/signup"
                  element={
                    <ProtectedRoute
                      isAuthenticated={!isAuthenticated}
                      redirect="/profile"
                    >
                      <SignUp />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/forgot"
                  element={
                    <ProtectedRoute
                      isAuthenticated={!isAuthenticated}
                      redirect="/profile"
                    >
                      <Forgot />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/resetpassword/:token"
                  element={
                    <ProtectedRoute
                      isAuthenticated={!isAuthenticated}
                      redirect="/profile"
                    >
                      <ResetPassword />
                    </ProtectedRoute>
                  }
                />

                <Route path="/term" element={<Term />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/paymentsuccess" element={<PaymentSuccess />} />
                <Route path="/paymentfail" element={<PaymentFail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/courserequest" element={<RequestCourse />} />





                <Route path="/admin" element={<Dashboard/>}/>
                <Route path="/admin/user" element={<Users/>}/>
                <Route path="/admin/create" element={<CreateCourse/>}/>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </>
          )}
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
