// src/pages/Profile.jsx
import React from 'react';


const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src="https://avatars.githubusercontent.com/u/9919?v=4"
          alt="User"
          className="profile-avatar"
        />
        <h2>Abinash Sahoo</h2>
        <p>💼 Aspiring Frontend Developer</p>
        <p>📧 sahooabinash0123@gmail.com</p>
        <p>📍 Odisha, India</p>
        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
