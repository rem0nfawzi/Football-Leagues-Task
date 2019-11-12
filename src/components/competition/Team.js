import React from 'react';
import { Link } from 'react-router-dom';
import defaultLogo from '../../assets/images/championship.svg';
const Team = ({ team }) => {
  return (
    <Link className='team' to={`/team/${team.id}`}>
      <div className='team-content'>
        <img
          src={team.crestUrl ? team.crestUrl : defaultLogo}
          alt={team.name}
        />
        <h4>{team.name}</h4>
      </div>
    </Link>
  );
};

export default Team;
