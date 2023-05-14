import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from './pages/Home';


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
