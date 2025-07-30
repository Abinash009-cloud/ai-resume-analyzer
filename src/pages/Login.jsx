import React, { useState } from 'react';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
  });

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ username: '', password: '', email: '', confirmPassword: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert(`Logging in as: ${formData.username}`);
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      alert(`Registered as: ${formData.username}`);
    }
  };

  return (
    <div className="login-page-center">
      <div className="box">
        <div className="login">
          <form className="loginBx" onSubmit={handleSubmit}>
            <h2>
              <i className="fa-solid fa-user"></i>
              {isLogin ? 'Login' : 'Register'}
              <i className="fa-solid fa-heart"></i>
            </h2>

            {!isLogin && (
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            )}

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {!isLogin && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            )}

            <input
              type="submit"
              value={isLogin ? 'Sign In' : 'Register'}
            />

            <div className="group">
              <a href="#">Forgot Password</a>
              <a onClick={handleToggle} style={{ cursor: 'pointer' }}>
                {isLogin ? 'Sign up' : 'Back to login'}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
