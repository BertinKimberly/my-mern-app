import React from "react";
import "./home.css";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";
import Testimonials from "../../components/Testimonials";
const Home = () => {
   return (
      <>
         <MainHeader />
         <Programs />
         <Values />
         <FAQs />
         <Testimonials />
      </>
   );
};

export default Home;
