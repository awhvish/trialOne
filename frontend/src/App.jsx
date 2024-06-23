import "./App.css";
import Welcome from "./components/welcome.jsx";
import Signup from "./components/signup.jsx";
import Login from "./components/login.jsx";
import Play from "./components/play.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/play" element={<Play />} />
    </Routes>
  );
  return (
    <>
      <Router>{routes}</Router>
    </>
  );
}

export default App;
