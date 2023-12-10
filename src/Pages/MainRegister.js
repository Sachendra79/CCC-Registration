import React from "react";
import Footer from "../Components/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import "./Pages.css";

function MainRegister() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div>
      <div className="Header"></div>
      <div className="register-content">
        <div className="Transperent_card">
          <h1 className="h1_name_RegisterPage  text-white font-normal text-5xl text-center m-2">
            Register
          </h1>
          <form>
            <div className="Register_form flex justify-around items-top my-10">
              <section className="Left_register flex flex-col w-[25rem]">
                <label className="text-white">Name:</label>
                <input type="text" className="h-[2rem] rounded" />

                <br></br>

                <label className="text-white">Gender:</label>
                <select selected="select" className="h-[2rem] rounded">
                  <option value="select">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <br></br>

                <label className="text-white">Student Number:</label>
                <input type="number" className="h-[2rem] rounded" />

                <br></br>

                <label className="text-white">Student Number:</label>
                <select selected="select" className="h-[2rem] rounded">
                  <option value="select">Select</option>
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                  <option value="4">4th</option>
                </select>

                <br></br>

                <label className="text-white">Where Do You Live:</label>
                <select selected="select" className="h-[2rem] rounded">
                  <option value="select">Select</option>
                  <option value="Hoster">Hostler</option>
                  <option value="Dayscholar">Day Scholar</option>
                </select>
              </section>
              <section className="Right_register flex flex-col m-0 w-[25rem]">
                <label className="text-white">Branch:</label>
                <select selected="select" className="h-[2rem] rounded">
                  <option value="select">Select</option>
                  <option value="CS">CS</option>
                  <option value="CSE">CSE</option>
                  <option value="CS/IT">CS/IT</option>
                  <option value="IT">IT</option>
                  <option value="EC">EC</option>
                  <option value="Mechanical">Mechani</option>
                  <option value="EC">EC</option>
                </select>

                <br></br>

                <label className="text-white">Section:</label>
                <select selected="select" className="h-[2rem] rounded">
                  <option value="select">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <br></br>
                <label className="text-white">Phone Number:</label>
                <input type="number" className="h-[2rem] rounded" />

                <br></br>
                <label className="text-white">Email Address:</label>
                <input type="Email" className="h-[2rem] rounded" />
                <br></br>
                <ReCAPTCHA
                  className="REcaptcha_change"
                  sitekey="6Lf5WywpAAAAAGYeoq4F7-o1ffx2A-RI5eVj5ugq"
                  onChange={onChange}
                />
              </section>
            </div>
            <div className="flex justify-center">
              <button className="Submit_Button bg-white w-[200px] h-[60px] rounded-lg text-xl">
                Register Now!
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer_Registrypage">
        <Footer />
      </div>
    </div>
  );
}

export default MainRegister;
