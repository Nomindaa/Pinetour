import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <div id="hero-container">
      <div>
        <span id="hero-title">Khuvsgul Lake</span>
      </div>

      <div>
        <span id="hero-subtitle">Trip</span>
      </div>

      <div id="hero-image-container">
        <img src="images/image-1.png" alt="sukhbaatar" />
        <img src="images/image-2.png" alt="gandan" />
        <img src="images/image-3.png" alt="ger" />
        <img src="images/image-4.png" alt="nuur" />
      </div>
    </div>
  );
};
