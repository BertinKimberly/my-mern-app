import React, { useEffect, useState } from "react";
import "./userpage.css";
import { useNavigate } from "react-router-dom";

const Userpage = () => {
   const navigate = useNavigate();
   const [currentUser, setCurrentUser] = useState("");

   useEffect(() => {
      if (!localStorage.getItem("current-user")) {
         navigate("/login");
      } else setCurrentUser(JSON.parse(localStorage.getItem("current-user")));
   }, []);
   return <div>Hello {currentUser}</div>;
};

export default Userpage;
