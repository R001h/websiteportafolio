
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Services from '../pages/Services';


const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Register" element={<Register />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/Services" element={<Services />} />
     </Routes>
    </Router>
   );
};
export default Routing;