import { useState, useEffect } from "react";
import React from "react";
import "./css/Navbar.css";

function Navbar() {
  const [checkLogin, setCheckLogin] = useState(false);

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
  return (
    <nav className="navbar">
      <div className="navbar-logo">trialOne</div>
      <ul className="nav-links">
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
            <a href="/" onClick={handleSignout}>
              Signout
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
