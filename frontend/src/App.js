import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Prescription from './components/Prescription';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/prescription" element={<Prescription />} />
      </Routes>
    </Router>
  );
}

export default App;
