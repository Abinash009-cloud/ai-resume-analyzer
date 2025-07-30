// src/Layout.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
