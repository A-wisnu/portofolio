import './Navbar.css';
import { IoMailOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">WISNU HIDAYAT</div>
        <div className="navbar-right">
          <a href="https://wa.me/6285643025633" target="_blank" rel="noopener noreferrer">
            <IoMailOutline className="search-icon" />
          </a>
          <a href="https://wa.me/6285643025633" target="_blank" rel="noopener noreferrer" className="connect-wallet-btn">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 