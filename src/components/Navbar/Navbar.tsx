import React from 'react';
import './Navbar.css';
import { IoMailOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">WISNU HIDAYAT</div>
        <div className="navbar-right">
          <IoMailOutline className="search-icon" />
          <button className="connect-wallet-btn">Contact Me</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 