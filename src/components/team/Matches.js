import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Match from './Match';

const Matches = ({ teamId }) => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    axios
      .get(`http://api.football-data.org/v2/teams/${teamId}/matches`, {
        headers: { 'X-Auth-Token': '5b42f8f8f9f247439bda03879156cdcb' }
      })
      .then(res => {
        setMatches(res.data.matches);
      });
  }, [teamId]);
  return (
    <div className='matches-box'>
      <h3>Matches</h3>
      <div className='matches-wrap'>
        {matches.map(match => (
          <Match match={match} key={match.id} />
        ))}
      </div>
    </div>
  );
};

export default Matches;
