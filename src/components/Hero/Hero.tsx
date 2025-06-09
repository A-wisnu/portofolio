import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">Wisnu Hidayat</span>
          <span className="title-line">
            <span className="yellow-star">*</span> Web Developer
          </span>
        </h1>
        <div className="hero-left-info">
          <p className="hero-description">I design and build beautiful, fast, and responsive websites and applications, fueled by a passion for elegant solutions.</p>
        </div>
      </div>
      <div className="hero-image-container">
        <img src="https://i.pinimg.com/736x/98/45/8d/98458dc754596e598521a75a19b18ae8.jpg" alt="Wisnu Hidayat" className="hero-image" />
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects Done</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 