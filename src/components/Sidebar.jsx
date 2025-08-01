// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '🏡 Home' },                 // ✅ Add this line
    { path: '/dashboard', label: '📊 Dashboard' },
    { path: '/history', label: '📂 History' },
    { path: '/profile', label: '👤 Profile' },
    { path: '/login', label: '🔐 Login' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>🧠 AI Resume</h2>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
