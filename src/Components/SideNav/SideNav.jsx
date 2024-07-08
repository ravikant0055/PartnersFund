// src/SideNav.js
import React from 'react';
import { Link} from 'react-router-dom';

const SideNav = ({ closeNav }) => {
  return (
    <div className="side-nav">
       
      <ul>
        <li>
          <Link to="/dashboard" onClick={closeNav}>Dashboard</Link>
        </li>
        <li>
          <Link to="/pages" onClick={closeNav}>Pages</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
