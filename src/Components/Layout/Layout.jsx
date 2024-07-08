import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import Dashboard from '../Dashboard/Dashboard';
import Pages from '../CreatedPages/Pages';
import '../../App.css';
import { GiHamburgerMenu } from "react-icons/gi";

function Layout() {
  const [showNav, setShowNav] = useState(false);

  // Function to close the sidebar
  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <Router>
      <div className="App">
        <div className="header gap-5">
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} className="menu-icon" />
          <h1 className='text-slate-900 py-4 text-4xl font-Lilita'>Partners Fund</h1>
        </div>
        
        <div>
          {showNav && <SideNav closeNav={closeNav} />}
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pages" element={<Pages />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Layout;
