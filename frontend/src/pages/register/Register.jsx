import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
import Heading from "../../components/Heading";
import {FaUser} from "react-icons/fa"
const Register = () => {
   return (
      <div className='container register__container'>
         <Heading
            icon={<FaUser />}
            name='Register'
         />
         <form>
            <div>
               <label htmlFor='name'>Name</label>
               <input
                  type='text'
                  placeholder='Enter your name'
               />
            </div>
            <div>
               <label htmlFor='email'>Email</label>
               <input
                  type='text'
                  placeholder='Enter your email'
               />
            </div>
            <div>
               <label htmlFor='password'>Password</label>
               <input
                  type='password'
                  placeholder='Enter your email'
               />
            </div>
            <div>
               <button
                  type='submit'
                  className='form-btn'
               >
                  Register
               </button>
            </div>
            <div>
               <small>Already have an account? </small>
               <Link to='/login'>Login</Link>
            </div>
         </form>
      </div>
   );
};

export default Register;
