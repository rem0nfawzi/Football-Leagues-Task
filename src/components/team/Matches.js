import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Match from './Match';
import Loader from '../common/Loader';
import { token } from '../../store/constants';

const Matches = ({ teamId }) => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get matches for each team and assign them to state
    axios
      .get(`http://api.football-data.org/v2/teams/${teamId}/matches`, {
        headers: { 'X-Auth-Token': token }
      })
      .then(res => {
        setMatches(res.data.matches);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [teamId]);

  // While loading
  if (loading) return <Loader />;

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
