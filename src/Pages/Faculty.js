import React from "react";
import Card from "../Components/Card";
import card from "../assets/Card.svg";
import middle from "../assets/Image_middle.svg";
import mobile from '../assets/Mobile_cover.svg'
const Faculty = () => {
  return (
    <div>
      <div className="Header"></div>
      <div className="faculty-content">
        <Card />
        <h1>Faculty Coordinators</h1>
        <div className="WhiteCard">
            <img src={card} alt="ImageNA" className="Image" />
            <img src={middle} alt="ImageNA" className="design"/>
            <img src={mobile} alt="ImageNA" className="mobile_design"/>
            <img src={card} alt="ImageNA" className="Image" />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Faculty;
