import React, { useEffect } from 'react';
import '../styles/prescription.css';
import { useNavigate } from 'react-router-dom';

const Prescription = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="container3">
    <div className="p-header">
      {/* <button className="back-button">&#x2190;</button> */}
      <h1 className="title">Prescription</h1>
    </div>

    <div className="upload-box">
      <div className="camera-icon icon">&#x1F4F7;</div>
      <p className="upload-text">Upload a photo of your prescription</p>
    </div>

    <div className="or-divider">OR</div>

    <div className="type-order-section">
      <div className="pencil-icon icon">&#x270F;</div>
      <h2 className="type-title">Type your order</h2>
      <p className="type-description">
        Type here the medicine name or the product name that you want to order
      </p>
      <input
        type="text"
        className="input-field"
        placeholder="Ex: Naxdom 500"
      />
    </div>

    <button className="next-button">Next</button>
  </div>
  );
};

export default Prescription;
