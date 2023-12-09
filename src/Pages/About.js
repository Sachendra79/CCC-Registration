import React from "react";
import Card from '../Components/Card'
import Rohit from '../assets/Rohit.svg'
import About_Design from '../assets/AboutPage_design.svg'
import Footer from "../Components/Footer";

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
            <h5>IIT Guwahati | Ex- UBER SDE |</h5>
            <h6>Got Highest Placement in India of 2Cr+ | 150K+ Youtube</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan eu ex vel mattis. Integer euismod vel purus vitae hendrerit. Fusce eget justo ac quam sagittis ullamcorper eu a dui. Vivamus non arcu vel risus laoreet commodo. Sed imperdiet ante eu nisl vestibulum, sit amet commodo nunc lacinia. In hac habitasse platea dictumst. Pellentesque ut neque a justo eleifend consectetur. Nulla facilisi. Fusce nec tellus vel eros pharetra laoreet id nec mauris</p>
          </section>
        </div>
      </div>
      <div className="footer_facultypage"> <Footer /></div>
    </div>
  );
};

export default About;
