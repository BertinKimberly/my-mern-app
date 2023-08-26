import React from "react";
import { MdClose, MdLogout } from "react-icons/md";
import { styled } from "styled-components";

const ProfileWidget = ({ currentUser, showProfile }) => {
   return (
      <Container>
         <MdClose
            className='close__btn'
            onClick={showProfile}
         />
         <div className='username'>
            <h2>{currentUser}</h2>
         </div>
         <div className='logout__btn'>
            <MdLogout />
         </div>
      </Container>
   );
};

const Container = styled.div`
   position: fixed;
   top: 100px;
   right: 50px;
   bottom: 40px;
   background-color: var(--color-primary);
   width: 20rem;
   border: 1px solid var(--color-gray-400);
   border-radius: 1rem;
   display: flex;
   flex-direction: column;
   padding: 1rem;

   .username {
      margin-bottom: 1rem;
   }

   .close__btn {
      position: absolute;
      right: 1rem;
      transition: var(--transition);
   }

   .close__btn:hover {
      transform: scale(1.4);
   }
`;
export default ProfileWidget;
