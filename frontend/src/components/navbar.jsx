import React from 'react';
import './css/Navbar.css';

function Navbar() {
    function handleSignout() {
        alert('You are signed out.');
        localStorage.removeItem('token');
    }
  return (
    <nav className="navbar">
      <div className="navbar-logo">trialOne</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
        <li><a href="/play">Play</a></li>
        <li><a href="/" onClick={handleSignout}>Signout</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;