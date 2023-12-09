import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer'
import Tech from "../assets/Group 30(1).svg"
import Rohit from "../assets/Ellipse 40.svg"
import location from "../assets/Vector(1).svg"
import calender from "../assets/Vector(3).svg"
import { useNavigate } from 'react-router-dom'
const Home = () => {
const navigate =useNavigate();

function clickHandler () 
{
 navigate("/register");
}

  return (
    <div className='home-container flex flex-col'>
       
       <div className='home-content absolute text-[#fff]  mt-10 mx-5 flex flex-col'>
           <div className='main-upside '>
           <div className='upside-left'>
            <img src={Tech}></img>
            </div>
            <div className='upside-right'>
            <img src={Rohit}></img>
            </div>
           </div>

           <div className='main-below flex justify-between'>
                <div className='below-left flex flex-col ml-14 justify-between'>
              
              <div className='below-upside flex justify-between'>
              <div className='flex gap-3'>
              <div>  <img src={location}></img></div>
              <div><p>CS/IT</p>
              <p>seminar hall</p></div>
            
        
              </div>
              <div className='flex gap-3'>
                <div>  <img src={calender}></img></div>
                <div> <p>Date: 15 Dec</p>
              <p>4:00PM onwards</p></div>
            
             
              </div>

              </div>
              <div className='below-downside text-[#fff]'>
                 <button className='btn-pink bg-[#fff] text-[#000]' onClick={clickHandler}>Register now</button>

              </div>

                </div>
                <div className='below-right'>
                     <div><p>Speaker</p></div>
                     <div>
                      <p> Rohit Negi</p>
                      <p> IIT Guwahati |</p>
                      <p> Ex- UBER SDE |</p>
                      <p>Got Highest</p>
                      <p>Placement in India</p>
                      <p> of 2Cr+ |</p>
                      <p> 150K+ Youtube</p>
          

                     </div>

                </div>

            </div>



       </div>
       {/* <div className='footer'>
  <Footer/>
       </div> */}
    </div>
  )
}

export default Home
