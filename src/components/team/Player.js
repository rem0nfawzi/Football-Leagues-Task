import React from 'react';

const Player = ({ player }) => {
  return (
    <div className='player-wrap'>
      <div className='player'>
        <h4>{player.name}</h4>
        <div className='details'>
          <p>{player.position}</p>
          <p>{player.nationality}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
