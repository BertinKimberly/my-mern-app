import React from "react";
import "./heading.css"
const Heading = ({ icon, name }) => {
   return (
      <header className='login__heading'>
         <h1>BRT</h1>
         <div>
            {icon}
            <p>{name}</p>
         </div>
      </header>
   );
};

export default Heading;
