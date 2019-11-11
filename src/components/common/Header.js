import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className='logo-wrap'>
        <div className='container'>
          <Link to='/'>
            <h1>Football Leagues</h1>
          </Link>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
