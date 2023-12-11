
import React, { useState } from "react";
import Footer from "../Components/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import "./Pages.css";
import axios from "axios"
import toast from "react-hot-toast";
import ReactLoading from "react-loading"
import { useRef } from "react";
import trim from "lodash/trim";

function MainRegister() {
//   const [formData, setFormData] = useState({
//     name: "",
//     studentNumber: "",
//     branch: "",
//     email: "",
//     phone: "",
//     gender: "",
//     year: "",
//     residence: "",
//     section:"",
    
//   });
//   // const [data ,setData] = useState({
//   //   captcha:"",
//   // })
//   const [reCaptchaValue, setReCaptchaValue] = useState('');

//   const [loading , setLoading] =useState(false);
// const [RecaptchaToken,setRecaptchaToken] = useState("");
//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const captchaRef = useRef();
 
//   // function onChange1(value) {
//   //       console.log("Captcha value:", value);
//   //      setData({...data , captcha : value});
//   //    }

// const handleReCAPTCHA = (value) => {
//   // formik.setFieldValue('captcha', value); // Update the formik field value
//   setReCaptchaValue(value);
//   // setIsRecaptchaVerified(true); // Set reCAPTCHA verification status
//   // console.log('reCAPTCHA verified:', isRecaptchaVerified); // Debugging
// };
// const handleRecaptchaChange = React.useCallback((value) => {
//   // console.log("FormWithCheckbox::handleRecaptchaChange > value: ", value);
//   setRecaptchaToken(value);
//   setReCaptchaValue(value);
//   // setIsRecaptchaVerified(true); // Set reCAPTCHA verification status
//   // console.log('reCAPTCHA verified:', isRecaptchaVerified); // Debugging
// }, []);



//      const submitHandler = async (e) => {
//       e.preventDefault();
         
//     try {
//       setLoading(true);
//       const response = await axios.post(
//         "https://v2-ccc1.onrender.com/api/students/register",
//         formData
//       );

//       console.log(response.data);

//     } catch (error) {
//       toast.error("submission failed");
//       console.error("Error submitting registration:", error);
   
//     }
//     setLoading(false);
//       console.log(formData);
      
//     };

const SITE_KEY = trim("6Lfiz1EmAAAAACQpOM3uze8O7znRdGWscGiNyJRT");

const [formData, setFormData] = useState({
  name: "",
  studentNumber: "",
  branch: "",
  email: "",
  phone: "",
  gender: "",
  year: "",
  residence: "",
  section: "",
});

const [loading, setLoading] = useState(false);
const [recaptchaToken, setRecaptchaToken] = useState("");

const onChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleRecaptchaChange = (value) => {
  setRecaptchaToken(value);
};

const submitHandler = async (e) => {
  e.preventDefault();
         
      try {
        setLoading(true);
        const response = await axios.post(
          "https://v2-ccc1.onrender.com/api/students/register",
          formData,
          recaptchaToken,
          {
            headers: {
              "Content-Type": "application/json", // Update content type if needed
            },
          }
        );
  
        console.log(response.data);
  
      } catch (error) {
        toast.error("submission failed");
        console.error("Error submitting registration:", error);
     
      }
      setLoading(false);
        console.log(formData);
        
    
};


  return (
    <div>
      <div className="Header"></div>
      <div className="register-content">
        <div className="Transperent_card">
          <h1 className="h1_name_RegisterPage  text-white font-normal text-5xl text-center m-2">
            Register
          </h1>
          <form onSubmit={submitHandler}>
            <div className="Register_form flex justify-around items-top my-10">
              <section className="Left_register flex flex-col w-[25rem]">
                <label className="text-white">Name:</label>
                <input
                  type="text"
                  className="h-[2rem] rounded"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                />

                <br></br>

                <label className="text-white">Gender:</label>
                <select
                  name="gender"
                  className="h-[2rem] rounded"
                  value={formData.gender}
                  onChange={onChange}
                >
                  <option value="select">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <br></br>

                <label className="text-white">Student Number:</label>
                <input
                  type="number"
                  name="studentNumber"
                  className="h-[2rem] rounded"
                  value={formData.studentNumber}
                  onChange={onChange}
                />

                <br></br>

                <label className="text-white">Year:</label>
                <select
                  name="year"
                  className="h-[2rem] rounded"
                  value={formData.year}
                  onChange={onChange}
                >
                  <option value="select">Select</option>
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                  <option value="4">4th</option>
                </select>

                <br></br>

                <label className="text-white">Where Do You Live:</label>
                <select
                  name="residence"
                  className="h-[2rem] rounded"
                  value={formData.residence}
                  onChange={onChange}
                >
                  <option value="select">Select</option>
                  <option value="Hostler">Hostler</option>
                  <option value="Dayscholar">Day Scholar</option>
                </select>
              </section>
              <section className="Right_register flex flex-col m-0 w-[25rem]">
                <label className="text-white">Branch:</label>
                <select
                  name="branch"
                  className="h-[2rem] rounded"
                  value={formData.branch}
                  onChange={onChange}
                >
                  <option value="select">Select</option>
                  <option value="CS">CS</option>
                  <option value="CSE">CSE</option>
                  <option value="CS/IT">CS/IT</option>
                  <option value="IT">IT</option>
                  <option value="EC">EC</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="EC">EC</option>
                </select>

                <br></br>

                <label className="text-white">Section:</label>
                <select
                  name="section"
                  className="h-[2rem] rounded"
                  value={formData.section}
                  onChange={onChange}
                >
                  <option value="select">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <br></br>
                <label className="text-white">Phone Number:</label>
                <input
                  type="number"
                  name="phone"
                  className="h-[2rem] rounded"
                  value={formData.phone}
                  onChange={onChange}
                />

                <br></br>
                <label className="text-white">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  className="h-[2rem] rounded"
                  value={formData.email}
                  onChange={onChange}
                />
                <br></br>
                
            <ReCAPTCHA important sitekey ={SITE_KEY} onChange={handleRecaptchaChange}  required  />
            
              </section>
            </div>
            <div className="flex justify-center">
              <button className="Submit_Button bg-white w-[200px] h-[60px] rounded-lg text-xl">
              { loading ? <ReactLoading type='spinningBubbles'color="#000" height={35} width={35} className='loader  ml-20' /> : "Register Now!"}
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

export default MainRegister
    