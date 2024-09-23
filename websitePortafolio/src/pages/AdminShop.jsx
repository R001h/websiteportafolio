import React from 'react';
import ProductManager from '../components/ProductManager';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Whitebox from '../components/Whitebox';
import ConsultHistory from '../components/ConsultHistory';

function AdminShop() {
  return (
    <div>
      <h1>Admin Shop</h1>
      <Navbar />
      <Whitebox />
      <div className='taskbox'><ConsultHistory /></div>
      <ProductManager />
      <Footer />
    </div>
  );
}

export default AdminShop;
