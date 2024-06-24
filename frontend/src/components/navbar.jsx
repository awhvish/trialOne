import React, { useState, useEffect } from "react";
import "./css/Navbar.css"; // Import the unified CSS file

function Navbar() {
  const [checkLogin, setCheckLogin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setCheckLogin(true);
    } else {
      setCheckLogin(false);
    }
  }, []);

  function handleSignout() {
    alert("You are signed out.");
    localStorage.removeItem("token");
    setCheckLogin(false);
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">trialOne</div>
      </div>
      <div className="navbar-right">

        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          {!checkLogin && (
            <li>
              <a href="/login">Login</a>
            </li>
          )}
          {!checkLogin && (
            <li>
              <a href="/signup">Signup</a>
            </li>
          )}
          <li>
            <a href="/play">Play</a>
          </li>
          {checkLogin && (
            <li>
              <a href="/" onClick={handleSignout} className="signout">
                Signout
              </a>
            </li>
          )}
        </ul>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
