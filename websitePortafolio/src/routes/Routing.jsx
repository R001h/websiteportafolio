
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Network from '../pages/Network';
import EnterpriseMail from '../pages/EnterpriseMail';
import DataBase from '../pages/DataBase';

const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Register" element={<Register />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/Network" element={<Network />} />
       <Route path="/DataBase" element={<DataBase />} />
       <Route path="/EnterPriseMail" element={<EnterpriseMail/>} />
     </Routes>
    </Router>
   );
};
export default Routing;