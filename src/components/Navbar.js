import React, { useState } from 'react';

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const handleBurgerClick = () => {
    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });
  };
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          Lean <b>Junio</b>
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
          <a className="navbar-item">Home</a>
          <a className="navbar-item">About</a>
          <a className="navbar-item">Experience</a>
          <a className="navbar-item">Projects</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
