import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../assets/css/global.css';

const Layout = ({ children }) => {
  return (
    <div className='main-layout'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
