import React from "react";
import Card from '../Components/Card'
import Design from '../assets/Design.svg'

const About = () => {
  const Image_design = {
    backgroungImage: 'none',
  }
  return (
    <div>
      <div className="about-content">
        <Card />
        <h1>### Mastering Algorithms: Mr. Rohit Negi</h1>
        <div className="WhiteCard">
          <img src={Design} alt="ImageNA" style={Image_design} />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default About;
