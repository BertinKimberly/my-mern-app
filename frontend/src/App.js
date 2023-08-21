import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Plans from "./pages/plans/Plans";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
const App = () => {
   return (
      <BrowserRouter>
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
               path='/register'
               element={< Register/>}
            />
            <Route
               path='*'
               element={<NotFound />}
            />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
