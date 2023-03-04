import React from 'react';
import { Link } from 'react-router-dom';

function TopNavBar() {
  return (
    <nav className="top-nav-bar">
      <div className="nav-left">
        <Link to="/">Jeffrey Ackerman</Link>
      </div>
      <div className="nav-right">
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default TopNavBar;