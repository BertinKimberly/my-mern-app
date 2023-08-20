import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

import Plans from "./pages/plans/Plans";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/Footer";
import Login from "./pages/login/Login";
const App = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route
               path='/'
               element={<Home />}
            />
            <Route
               path='/about'
               element={<About />}
            />
            <Route
               path='/contact'
               element={<Contact />}
            />

            <Route
               path='/plans'
               element={<Plans />}
            />
            <Route
               path='/login'
               element={<Login />}
            />
            <Route
               path='*'
               element={<NotFound />}
            />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
};

export default App;
