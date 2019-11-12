import React from 'react';
import Player from './Player';
const Squad = ({ squad }) => {
  return (
    <div className='players'>
      <h3>Players</h3>
      <div className='players-wrap'>
        {squad &&
          squad.map(player => <Player player={player} key={player.id} />)}
      </div>
    </div>
  );
};

export default Squad;
