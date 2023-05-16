import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Forgot from './pages/auth/Forgot'
import ResetPassword from './pages/auth/ResetPassword';


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/forgot" element={<Forgot/>} />
      <Route path="/resetpassword" element={<ResetPassword/>} />
      </Routes>
    </Router>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
