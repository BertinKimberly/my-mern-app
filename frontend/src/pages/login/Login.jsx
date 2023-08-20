import React from "react";

const Login = () => {
   return (
      <div className='container login__container'>
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
         </form>
      </div>
   );
};

export default Login;
