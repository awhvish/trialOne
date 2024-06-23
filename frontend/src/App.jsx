import "./App.css";
import Welcome from "./components/welcome.jsx";
import Signup from "./components/signup.jsx";
import Login from "./components/login.jsx";
import Play from "./components/play.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {AuthProvider} from "./components/utils/authContext.jsx";
import checkTokenExpiration from "./components/utils/checkTokenExpiration.jsx";

function App() {
  checkTokenExpiration();
  const routes = (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </AuthProvider>
  );
  return (
    <>
      <Router>{routes}</Router>
    </>
  );
}

export default App;
