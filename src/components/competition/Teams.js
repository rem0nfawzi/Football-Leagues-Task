import React from 'react';
import Team from './Team';
const Teams = ({ teams }) => {
  return (
    <section>
      <div className='container'>
        <div className='teams-wrap'>
          {teams.map(team => (
            <Team team={team} key={team.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
