
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import XXAUTH1ogin from '../pages/XXAUTH1ogin';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import AboutUs from '../pages/AboutUs';
import AdminUtilities from '../pages/AdminUtilities';
import AdminShop from '../pages/AdminShop';
import Shop from '../pages/Shop';
import ProtectedRoute from'../ProtectedRoute'


const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/XXAUTH1ogin" element={<XXAUTH1ogin />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/Services" element={<Services />} />
       <Route path="/AboutUs" element={<AboutUs />} />
       <Route path="/Shop" element={<Shop />} />
       <Route path="/AdminUtilities" element={<ProtectedRoute><AdminUtilities /></ProtectedRoute>} />
       <Route path="/AdminShop" element={<ProtectedRoute><AdminShop /></ProtectedRoute>} />
     </Routes>
    </Router>
   );
};
export default Routing;