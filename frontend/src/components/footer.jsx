import React from 'react';
import './css/footer.css';
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Snake.</p>
      <nav>
        <ul className="social-links">
          <li><a href="https://github.com/awhvish/trialOne"><FaGithub size={22}/></a></li>
          <li><a href="https://discordapp.com/users/540899249253253132"><FaDiscord size={22}/>
          </a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;