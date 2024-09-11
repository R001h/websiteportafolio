
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';

const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/Home" element={<Home />} />
       <Route path="/" element={<Login />} />
       <Route path="/Register" element={<Register />} />
     </Routes>
    </Router>
   );
};
export default Routing;