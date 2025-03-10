import React from 'react';
import { useNavigate } from 'react-router';
import Navbar from './Navbar';

function AboutUs() {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    window.open('/Aboutus2', '_blank'); // Opens the page in a new tab
  };
  return (
    <div className="container">
      <div className="SecImg">
        <img src="/aboutus.jpeg" alt="img1" />
      </div>
      <div className="desc">
        <p>OUR STORY</p>
        <h2>Driving Quality, Powering Performance
          Your trusted source for top-grade motor and vehicle parts, built for reliability and excellence.</h2>
        <p>Explore a wide range of top-quality motor and vehicle components designed to ensure unmatched performance and durability.</p>
        <div className="learn-more">
          <button onClick={handleLearnMore}>Learn More</button>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;