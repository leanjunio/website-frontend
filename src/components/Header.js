import React from 'react';

const Header = ({ header }) => (
  <section className="hero has-background-white is-large">
    <div className="hero-body">
      <div className="container has-text-centered">
        <p className="title">Hi there!</p>
        <p className="subtitle">{header}</p>
      </div>
    </div>
  </section>
);

export default Header;
