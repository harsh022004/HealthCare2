import React from 'react';
import"../styles/homepage.css"
import doctorImage from "../photos/pngwing 1.png";

const Homepage = () => {
  return (
    <>
      <div className="main-section">
        <div className="container">
          <h1>Healthcare</h1>
          <div className="info-badges">
            <div className="badge">
              {/* SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#EFCFE3" />
                <path d="M12 24h4l2 6 4-12 2 6h10" stroke="#1C2150" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Reduce Heals
            </div>
            <div className="badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 512 512" fill="none">
                <circle cx="256" cy="256" r="256" fill="#A5D8C2" />
                <path d="M175 256c-14-17-21-39-16-62 8-37 41-65 80-65 9 0 18 1 26 4 14-22 38-37 66-37 43 0 78 35 78 78 0 4 0 7-1 11 25 8 43 32 43 59 0 34-27 62-61 62H200c-10 0-20-3-27-8z" stroke="#1C2150" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <line x1="220" y1="340" x2="220" y2="400" stroke="#1C2150" strokeWidth="24" strokeLinecap="round" />
                <line x1="260" y1="340" x2="260" y2="400" stroke="#1C2150" strokeWidth="24" strokeLinecap="round" />
                <line x1="300" y1="340" x2="300" y2="400" stroke="#1C2150" strokeWidth="24" strokeLinecap="round" />
              </svg>
              No More Medications
            </div>
          </div>
          <p className="cta-text">
            If you are looking for a creative and easy way to build a website, Mobirise is the perfect solution.
          </p>
          <div className="cta-section">
            <button className="book-button" >
              Book Consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
        <img src={doctorImage} alt="Doctor" className="doctor-image" />
      </div>

      <div className="container services-grid">
        {[
          {
            title: 'Instant Video Consultation.',
            desc: 'Meet our doctors online & get instant solution.',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            )
          },
          {
            title: 'Find The Doctors Near You.',
            desc: 'Book appointments with qualified doctors in your city.',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            )
          },
          {
            title: '24/7 Medicine.',
            desc: 'Order medicines online & get doorstep delivery.',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            )
          },
          {
            title: 'Lab Tests.',
            desc: 'Book tests and checkup packages at affordable prices.',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 12a4 4 0 0 0-4-4 4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4z"></path>
              </svg>
            )
          }
        ].map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="icon-container">
              <div className="icon-bg">{service.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="container reviews-section">
        <h2>Our Doctors And Clinics Have Earned Over 5,000+ Reviews On Google!</h2>
      </div>

      <div className="container bottom-sections">
        <div className="bottom-card">
          <h3>Nutrition And Mental Health.</h3>
          <p>The Food We Eat Provide The Nutrients That Our Bodies Needs To Function Properly.</p>
          <div className="play-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 8 20 12 3 16 3 8"></polygon>
            </svg>
          </div>
        </div>
        <div className="bottom-card">
          <h3>Healthy Habits For A Happy Heart</h3>
          <p>A happy heart beats strong and free, nurtured by habits that agree with its vital decree</p>
        </div>
        <div className="container01">
          <div className="stat-card experience-card">
            <div className="stat-number">09</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card customers-card">
            <div className="stat-number">150k</div>
            <div className="stat-label">Happy Customers</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
