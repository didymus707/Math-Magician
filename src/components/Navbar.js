import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul>
    <li className="home">
      <Link to="/">Home</Link>
    </li>
    <li className="calc">
      <Link to="/calculator">Calulator</Link>
    </li>
    <li className="quo">
      <Link to="/quote">Quote</Link>
    </li>
  </ul>
);

export default Navbar;
