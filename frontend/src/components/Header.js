import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <div className="header">
    <div className="container header-inner">
      <div className="logo">Medcare</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#">Offers</a>
        <a href="#">Cart (0)</a>
        <a href="/login">Login</a>
        {/* <a href="/prescription">prescription</a> */}
      </div>
    </div>
  </div>
  );
}

export default Header;
