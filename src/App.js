import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Loading from "./components/Layout/Loading";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Forgot from "./pages/auth/Forgot";
import ResetPassword from "./pages/auth/ResetPassword";
import Contact from "./pages/Contact";
import RequestCourse from "./pages/RequestCourse";
import About from "./pages/About";
import Subscribe from "./pages/payment/Subscribe";
import NotFound from "./pages/NotFound";
import PaymentSuccess from "./pages/payment/PaymentSuccess";
import PaymentFail from "./pages/payment/PaymentFail";
import CoursePage from "./pages/CoursePage";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/user";
import { ProtectedRoute } from "protected-route-react";

export const useUserSelector = () => useSelector((state) => state.user);
function App() {
  const [theme, colorMode] = useMode();
  const { isAuthenticated, user, message, error, loading } = useUserSelector();

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
                <Route path="/course/:id" element={<CoursePage />} />
                <Route path="/about" element={<About />} />
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
                    <ProtectedRoute isAuthenticated={!isAuthenticated}>
                      <Forgot />
                    </ProtectedRoute>
                  }
                />
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/courserequest" element={<RequestCourse />} />
                <Route
                  path="/subscribe"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <Subscribe />
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
                <Route path="/paymentsuccess" element={<PaymentSuccess />} />
                <Route path="/paymentfail" element={<PaymentFail />} />
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
