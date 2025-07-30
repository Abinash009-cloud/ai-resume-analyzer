// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Profile from './pages/profile';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      {/* Layout routes that include Sidebar */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="history" element={<History />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Separate login page without Sidebar */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
