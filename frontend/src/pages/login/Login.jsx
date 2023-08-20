import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
   return (
      <div className='container login__container'>
         <h1>Login</h1>
         <form>
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
                  Login
               </button>
            </div>
            <div>
               <small>Don't have an account? </small>
               <Link to='/register'>Register</Link>
            </div>
         </form>
      </div>
   );
};

export default Login;
