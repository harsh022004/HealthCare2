import React, { useState } from 'react';
import '../styles/signup.css';
import { Link, useNavigate } from 'react-router-dom';
import signupImage from "../photos/chris-lee-70l1tDAI6rM-unsplash 1.png";
import Apple from "../photos/104490_apple_icon.png";
import Google from "../photos/7123025_logo_google_g_icon.png";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      navigate('/login');
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="container2">
      <div className="signup-section">
        <h2>Get Started Now</h2>
        <form onSubmit={handleSignup}>
          {errorMsg && <p className="error">{errorMsg}</p>}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="agree" name="agree" />
            <label htmlFor="agree">I agree to the terms and conditions</label>
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="social-login">
          <a href="#" className="social-button">
            <img src={Google} alt="Google Logo" /> Sign up with Google
            
          </a>
          <a href="#" className="social-button">
            <img src={Apple}alt="Apple Logo" /> Sign up with Apple
            
          </a>
        </div>
        <div className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
      <div className="logo-section">
        <img src={signupImage} className="logo-section" alt="Hospital Symbol" />
      </div>
    </div>
  );
};

export default Signup;
