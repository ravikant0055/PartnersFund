import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './Components/SideNav/SideNav';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  const [showNav, setShowNav] = useState(false);

  // Function to close the sidebar
  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <Router>
      <div className="App">
        <div className="header">
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} className="menu-icon" />
        </div>
        <div>
          {showNav && <SideNav closeNav={closeNav} />}
        </div>
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
