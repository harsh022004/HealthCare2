import React, { useState } from 'react';
import '../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from "../photos/chris-lee-70l1tDAI6rM-unsplash 2.png"; 
import Apple from "../photos/104490_apple_icon.png";
import Google from "../photos/7123025_logo_google_g_icon.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      localStorage.setItem('token', data.token);
      navigate('/prescription');
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="container1">
      <div className="login-section">
        <h2>Welcome back!</h2>
        <p>Enter your credentials to access your account.</p>
        <form onSubmit={handleSubmit}>
          {errorMsg && <p className="error">{errorMsg}</p>}
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="social-login">
          <a href="#" className="social-button">
            <img src={Google}alt="Google Logo" /> Sign in with Google
          </a>
          <a href="#" className="social-button">
            <img src={Apple}alt="Apple Logo" /> Sign in with Apple
          </a>
        </div>
        <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
      <div className="image-section">
        <img src={loginImage} className="image-section"alt="Doctor and Patient" />
      </div>
    </div>
  );
};

export default Login;
