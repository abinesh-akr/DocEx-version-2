import React, { useState, useEffect } from "react";
import "./Home.css";
import image1 from "./assets/6.png";
import image2 from "./assets/7.png";
import { Link } from 'react-router-dom'

import image3 from "./assets/9.png";

const images = [image1, image2, image3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button className="btn"><Link to={'/register'}>Register</Link></button>
        <button className="btn"><Link to={'/about'}>About</Link></button>
      </div>

      {/* Topic Title */}
      <div className="topic-container">
        <h1 className="topic-title">AI - Driven Semi Structured Text Extraction and Validation</h1>
      </div>

      {/* Team Members Section */}
      {/* Image Slider (Fully Filled) */}
      <div className="slider-container" >
        <img src={images[currentIndex]} alt="AI Slide" className="slider-image" />
      </div>
      <div className="team-container">
        <h2>Team Members</h2>
        <div className="team-list">
          <ul className="left-side">
            <li>Anish Karthik A P</li>
            <li>AbineshKumar S</li>
            <li>Yashwanth Kumar M</li>
          </ul>
          <ul className="right-side">
            <li>Pradeep Kumar R</li>
            <li>Gopisaran B</li>
          </ul>
        </div>
      </div>
    </div> 
  );
};

export default Home;
