import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/species">Species</a>
        <a href="/ourstory">Our Story</a>
        <a href="/idbird">ID Bird</a>
      </nav>
    </header>
  );
};
export default Header;