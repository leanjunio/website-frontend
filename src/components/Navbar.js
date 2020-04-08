import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <p>
            Lean <b>Junio</b>
          </p>
        </a>

        <a
          role="button"
          onClick={() => setBurger(!burger)}
          className={`navbar-burger burger ${burger ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${burger ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <a href="https://mystifying-hamilton-473e5d.netlify.com" className="navbar-item">
            Blog
          </a>
          <Link to="/experience" className="navbar-item">
            Experience
          </Link>
          <Link to="/projects" className="navbar-item">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
