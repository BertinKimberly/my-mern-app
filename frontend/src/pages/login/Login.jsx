import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import Heading from "../../components/Heading";
import { FaUserCheck } from "react-icons/fa";
import { loginRoute } from "../../utils/ApiRoutes";
const Login = () => {
   const navigate = useNavigate();
   useEffect(() => {
      if (localStorage.getItem("current-user")) {
         navigate("/userpage");
      }
   }, []);

   const [values, setValues] = useState({
      email: "",
      password: "",
   });

   const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
   };
   const validateForm = () => {
      const { email, password } = values;

      if (email === "" || password === "") {
         toast.error("email and password are required", toastOptions);
         return false;
      }
      return true;
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      if (validateForm()) {
         const { email, password } = values;
         const { data } = await axios.post(loginRoute, {
            email,
            password,
         });
         console.log(values);
         console.log(data);
         if (data.status === false) {
            toast.error(data.message, toastOptions);
         }
         if (data.status === true) {
            localStorage.setItem("current-user", JSON.stringify(data.user));
            navigate("/userpage");
         }
      }
   };
   const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
   };
   return (
      <div className='container login__container'>
         <Heading
            icon={<FaUserCheck />}
            name='Login'
         />
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor='email'>Email</label>
               <input
                  type='text'
                  name='email'
                  placeholder='Enter your email'
                  onChange={handleChange}
               />
            </div>
            <div>
               <label htmlFor='password'>Password</label>
               <input
                  type='password'
                  name='password'
                  placeholder='Enter your email'
                  onChange={handleChange}
               />
            </div>
            <div>
               <button
                  type='submit'
                  className='form-btn'
               >
                  Login
               </button>
            </div>
            <div>
               <small>Don't have an account? </small>
               <Link to='/register'>Register</Link>
            </div>
         </form>
         <ToastContainer />
      </div>
   );
};

export default Login;
