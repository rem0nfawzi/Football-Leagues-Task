import React from 'react';
import Leagues from './Leagues';

const Home = () => {
  return (
    <section id='leagues'>
      <div className='container'>
        <h2>Football Leagues</h2>
        <Leagues />
      </div>
    </section>
  );
};

export default Home;
