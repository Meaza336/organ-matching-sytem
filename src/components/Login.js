// src/components/Login.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = ({ onLoginClick, onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // Implement authentication logic here
    onLoginClick(); // Call this to set isLogin to true
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{
        width: '450px', height: '500px',
        borderRadius: '10px',
        border: '2px solid white',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
      }}>
        <h2 className="mb-4 text-center" style={{ fontWeight: 'bold' }}>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 position-relative">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                border: 'none',
                borderBottom: '2px solid black',
                borderRadius: '0',
                padding: '10px 0',
              }}
            />
            <i className="fas fa-envelope position-absolute"
              style={{ right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#666' }}></i>
          </div>

          <div className="mb-3 position-relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="password"
              placeholder="Create a Strong Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                border: 'none',
                borderBottom: '2px solid black',
                borderRadius: '0',
                padding: '10px 0',
              }}
            />
            <span
              className="input-group-text"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                cursor: 'pointer',
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
              }}
            >
              <i className={showPassword ? 'fas fa-lock-open' : 'fas fa-lock'}></i>
            </span>
          </div>

          <div className="text-end mt-3 mb-4">
            <a href="#forgot-password" className="text-decoration-none" style={{ color: '#666' }}>Forgot Password?</a>
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: '#5BC088',
                borderRadius: '5px',
                padding: '10px 40px',
                fontWeight: 'bold',
                width: '100%',
                maxWidth: '400px',
              }}
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-center mt-2 mb-4">
          <p className="mb-0" style={{ color: '#666' }}>
            Don’t have an account? 
            <a href="#register" onClick={onRegisterClick} className="text-decoration-none"> Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;