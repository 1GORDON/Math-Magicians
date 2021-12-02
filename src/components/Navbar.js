/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import '../styles/Navbar.css';

const Navbar = () => (
    <nav>
      <Header />
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/calculator" className="link">Calculator</Link>
        </li>
        <li className="nav-item">
          <Link to="/quote" className="link">Quote</Link>
        </li>
      </ul>
    </nav>
);

export default Navbar;