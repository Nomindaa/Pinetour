import React from "react";
import "./Destination.css";

const destinations = [
  {
    number: 1,
    title: "Sukhbataar Square",
    location: "Ulaanbaatar",
  },

  {
    number: 2,
    title: "Khuvsgul Lake",
    location: "Khuvsgul",
  },
  {
    number: 3,
    title: "Khorgiin Togoo",
    location: "Arkhangai",
  },
  {
    number: 4,
    title: "Terkhiin tsagaan lake",
    location: "Arkhangai",
  },
  {
    number: 5,
    title: "Amarbaysgalant monastery",
    location: "Bulgan",
  },
  {
    number: 6,
    title: "Sukhbataar Square",
    location: "Ulaanbaatar",
  },
];

export const Destination = () => {
  return (
    <div id="destination-container">
      <div id="destination-left-side">
        <div id="destination-subtitle">Tours | 6 DAYS</div>
        <div id="destination-title">Destination of Our Agency</div>
        <div id="destination-map">
          {destinations.map((destination) => (
            <div id="destination-item-container">
              <div id="destination-item-left-side">{destination.number}</div>
              <div id="destination-item-right-side">
                <div id="destination-item-title">{destination.title}</div>
                <div id="destination-item-location">{destination.location}</div>
              </div>

              <div id="triple-line"></div>
            </div>
          ))}
        </div>
      </div>

      <div id="destination-right-side">
        <img src="images/destination.png" alt="destination" />
      </div>
    </div>
  );
};
