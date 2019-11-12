import React from 'react';
import Team from './Team';
const Teams = ({ teams }) => {
  return (
    <section className='teams-wrap'>
      <div className='container'>
        {teams.map((team, index) => (
          <Team team={team} key={team.id} />
        ))}
      </div>
    </section>
  );
};

export default Teams;
