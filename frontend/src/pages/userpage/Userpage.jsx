import React, { useEffect, useState } from "react";
import "./userpage.css";
import { useNavigate } from "react-router-dom";
import {
   FaBars,
   FaBell,
   FaBible,
   FaHome,
   FaMusic,
   FaPenAlt,
   FaSearch,
   FaUpload,
   FaVideo,
   FaYoutubeSquare,
} from "react-icons/fa";

import { SiChatbot, SiHelpdesk, SiMessenger, SiViadeo } from "react-icons/si";
import ProfileWidget from "../../components/ProfileWidget";
const Userpage = () => {
   const navigate = useNavigate();
   const [currentUser, setCurrentUser] = useState("");
   const [showMenu, setShowMenu] = useState(false);
   const [isShowProfile, setIsShowProfile] = useState(false);
   useEffect(() => {
      if (!localStorage.getItem("current-user")) {
         navigate("/login");
      } else setCurrentUser(JSON.parse(localStorage.getItem("current-user")));
   }, []);

   const showProfile = () => {
      setIsShowProfile(prev=>!prev);
   };
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
                  <div
                     className='user'
                     onClick={showProfile}
                  >
                     {currentUser.toUpperCase().split("")[0]}
                  </div>
               </div>
            </div>
            {isShowProfile && (
               <ProfileWidget
                  currentUser={currentUser}
                  showProfile={showProfile}
               />
            )}
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
            <div className='detailled-sidebar'>
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
                  <h5>Explore</h5>
                  <div>
                     <SiChatbot />
                     <small>Chatbot</small>
                  </div>
                  <div>
                     <FaBible />
                     <small>Bible</small>
                  </div>
                  <div>
                     <SiViadeo />
                     <small>Movies</small>
                  </div>
                  <div>
                     <FaPenAlt />
                     <small>BRT notes</small>
                  </div>
                  <div>
                     <SiMessenger />
                     <small>BRT chat</small>
                  </div>
                  <div>
                     <FaMusic />
                     <small>Music</small>
                  </div>
               </section>
               <section>
                  <h5>More info</h5>
                  <div>
                     <SiHelpdesk />
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
