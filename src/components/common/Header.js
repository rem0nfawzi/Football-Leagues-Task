import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className='logo-wrap'>
        <Link to='/'>Football Leagues</Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
