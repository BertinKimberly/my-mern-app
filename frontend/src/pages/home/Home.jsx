import React from "react";
import "./home.css";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";
import Testimonials from "../../components/Testimonials";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const Home = () => {
   return (
      <>
         <Navbar />
         <MainHeader />
         <Programs />
         <Values />
         <FAQs />
         <Testimonials />
         <Footer />
      </>
   );
};

export default Home;
