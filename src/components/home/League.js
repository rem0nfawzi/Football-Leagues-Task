import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../../store/actions/leagues';
import { connect } from 'react-redux';
import defaultLogo from '../../assets/images/championship.svg';

const League = ({ id, name, currentSeason, teams, getTeams, logo }) => {
  // getting teams for each league to display number of teams
  useEffect(() => {
    getTeams(id);
  }, [getTeams, id]);
  return (
    <div className='league'>
      <div className='info'>
        <img className='thumbnail' src={logo ? logo : defaultLogo} alt='' />
        <div className='details'>
          <h3>{name}</h3>
          {currentSeason && currentSeason.currentMatchday && (
            <p>{`Games: ${currentSeason.currentMatchday}`}</p>
          )}
          {teams && <p>teams: {teams}</p>}
        </div>
      </div>
      <Link className='link' to={`/league/${id}`}>
        Details
      </Link>
    </div>
  );
};

export default connect(
  null,
  { getTeams }
)(League);
