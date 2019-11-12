import React from 'react';
import Leagues from './Leagues';
import '../../assets/css/leagues.css';

const Home = () => {
  return (
    <section id='leagues'>
      <div className='container'>
        <h2 className='main-title'>Football Leagues</h2>
        <Leagues />
      </div>
    </section>
  );
};

export default Home;
