import React from 'react';

const Match = ({ match }) => {
  const matchDate = new Date(match.utcDate);
  return (
    <div className='match-wrap'>
      <div className='match'>
        <div className='home'>
          <h4>{match.homeTeam.name}</h4>
        </div>
        <div className='result'>
          <h4>
            {match.status === 'FINISHED'
              ? `${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}`
              : 'SCHEDULED'}
          </h4>
          <p className='date'>{`${matchDate.getDate()} - ${matchDate.getMonth() +
            1} - ${matchDate.getFullYear()}`}</p>
        </div>
        <div className='away'>
          <h4>{match.awayTeam.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Match;
