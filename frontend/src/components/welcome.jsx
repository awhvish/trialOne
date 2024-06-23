import './css/welcome.css';
import Navbar from './navbar.jsx';
import Footer from "./footer.jsx";

function Welcome() {
    function handleLogin() {
        window.location.href = '/login';
    }
    function handleSignup() {
        window.location.href = '/signup';
    }
    return (
        <>
            <Navbar></Navbar>
            <h1>Welcome to the snake game!</h1>
            <h3>Please login to play the game</h3>
            <button className="welcome-btn" onClick={handleLogin}>Log In</button>
            <button className="welcome-btn" onClick={handleSignup}>Sign Up</button>
            <Footer></Footer>
        </>
    );
}

export default Welcome;