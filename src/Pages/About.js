import React from "react";
import Card from '../Components/Card'
import Rohit from '../assets/Rohit.svg'
import About_Design from '../assets/AboutPage_design.svg'

const About = () => {
  return (
    <div>
      <div className="about-content">
        <Card />
        <h1>### Mastering Algorithms: Mr. Rohit Negi</h1>
        <div className="WhiteCard">
          <img src={About_Design} alt="Rohit" className="Left_design"/>
          <img src={Rohit} alt="ImageNA" className="Rohit"/>
          <img src={About_Design} alt="Rohit" className="Right_design"/>
          <section>
            <h4>Rohit Negi</h4>
          </section>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default About;
