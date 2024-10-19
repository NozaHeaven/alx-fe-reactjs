// src/Navbar.jsx

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex', // This is the required 'display' style
        justifyContent: 'space-between', // This is the required 'justifyContent' style
        padding: '10px',
        backgroundColor: '#f0f0f0'
      }}
    >
      <div>
        <h1>Company Logo</h1>
      </div>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
        <Link to="/services" style={{ textDecoration: 'none' }}>Services</Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
