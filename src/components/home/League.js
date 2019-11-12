import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../../store/actions/leagues';
import { connect } from 'react-redux';
import defaultLogo from '../../assets/images/championship.svg';
import ball from '../../assets/images/ball.svg';
import team from '../../assets/images/team.svg';

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
          <div className='statistics'>
            <div>
              <img src={ball} alt='games' />
              <p>
                {currentSeason && currentSeason.currentMatchday
                  ? currentSeason.currentMatchday
                  : 0}
              </p>
            </div>
            <div>
              <img src={team} alt='Teams' />
              <p>{teams ? teams : 0}</p>
            </div>
          </div>
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
