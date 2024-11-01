import React from "react";
import "./Footer.css";
import { FacebookLogo, FooterLogo } from "../../assets";
import { InstagramLogo } from "../../assets/InstagramLogo";

export const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-container">
        <div id="footer-container-left">
          <FooterLogo />
        </div>
        <div id="footer-container-right">
          <div className="footer-container-right-item">
            <FacebookLogo /> Facebook
          </div>
          <div className="footer-container-right-item">
            <InstagramLogo /> Instagram
          </div>
        </div>
      </div>
    </div>
  );
};
