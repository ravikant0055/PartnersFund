// src/SideNav.js
import React from 'react';
import { Link} from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="side-nav">
       
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
