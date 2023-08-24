import React, { useEffect, useState } from "react";
import "./userpage.css";
import { useNavigate } from "react-router-dom";
import {
   FaBars,
   FaBell,
   FaHome,
   FaSearch,
   FaUpload,
   FaVideo,
   FaVideoSlash,
   FaYoutubeSquare,
} from "react-icons/fa";

const Userpage = () => {
   const navigate = useNavigate();
   const [currentUser, setCurrentUser] = useState("");
   const [showMenu, setShowMenu] = useState(false);

   useEffect(() => {
      if (!localStorage.getItem("current-user")) {
         navigate("/login");
      } else setCurrentUser(JSON.parse(localStorage.getItem("current-user")));
   }, []);
   return (
      <div>
         <nav>
            <div className='container nav__container'>
               <div className='left-side'>
                  <FaBars onClick={() => setShowMenu((prev) => !prev)} />
                  <div className='logo'>BRT</div>
               </div>

               <div className='searchbar'>
                  <input type='text' />
                  <div className='srch'>
                     <FaSearch color='white' />
                  </div>
               </div>
               <div className='right-side'>
                  <div className='upload'>
                     <FaUpload />
                  </div>
                  <div className='notifications'>
                     <FaBell />
                  </div>
                  <div className='user'>I</div>
               </div>
            </div>
         </nav>
         {showMenu ? (
            <div className='sidebar'>
               <div>
                  <FaHome />
                  <small>Home</small>
               </div>
               <div>
                  <FaVideo />
                  <small>Reels</small>
               </div>
               <div>
                  <FaYoutubeSquare />
                  <small>Videos</small>
               </div>
            </div>
         ) : (
            <div className="detailled-sidebar">
                <section>
                <div>
                  <FaHome />
                  <small>Home</small>
               </div>
               <div>
                  <FaVideo />
                  <small>Reels</small>
               </div>
               <div>
                  <FaYoutubeSquare />
                  <small>Videos</small>
               </div>
                </section>
                <section>
                <div>
                  <FaHome />
                  <small>Home</small>
               </div>
               <div>
                  <FaVideo />
                  <small>Reels</small>
               </div>
               <div>
                  <FaYoutubeSquare />
                  <small>Videos</small>
               </div>
                </section>
                <section>
                <div>
                  <FaHome />
                  <small>Home</small>
               </div>
               <div>
                  <FaVideo />
                  <small>Reels</small>
               </div>
               <div>
                  <FaYoutubeSquare />
                  <small>Videos</small>
               </div>
                </section>
                <section>
                <div>
                  <FaHome />
                  <small>Home</small>
               </div>
               <div>
                  <FaVideo />
                  <small>Reels</small>
               </div>
               <div>
                  <FaYoutubeSquare />
                  <small>Videos</small>
               </div>
                </section>
            </div>
         )}
      </div>
   );
};

export default Userpage;
