import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../../store/actions/leagues';
import { connect } from 'react-redux';

const League = ({ id, name, currentSeason, teams, getTeams }) => {
  // getting teams for each league to display number of teams
  useEffect(() => {
    getTeams(id);
  }, [getTeams, id]);
  return (
    <div className='league'>
      <div className='info'>
        <h3>{name}</h3>
        {currentSeason && currentSeason.currentMatchday && (
          <p>{`Games: ${currentSeason.currentMatchday}`}</p>
        )}
        {teams && <p>teams: {teams}</p>}
      </div>
      <Link to={`/league/${id}`}>Details</Link>
    </div>
  );
};

export default connect(
  null,
  { getTeams }
)(League);
