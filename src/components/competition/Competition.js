import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Teams from './Teams';
const Competition = ({
  match: {
    params: { id }
  },
  leagues
}) => {
  // declaring state
  const [loading, setLoading] = useState(true);
  // checks if league info exists or not
  const [available, setAvailable] = useState(false);
  // competition info
  const [competition, setCompetition] = useState({});
  // teams
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    // Getting competition info
    axios
      .get(`http://api.football-data.org/v2/competitions/${id}`, {
        headers: { 'X-Auth-Token': '5b42f8f8f9f247439bda03879156cdcb' }
      })
      .then(res => {
        setLoading(false);
        setCompetition(res.data);
        setAvailable(true);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  useEffect(() => {
    if (!loading && available) {
      // if I'm coming from Home page, So I already have the teams data and no need to make API request
      if (leagues.length > 0) {
        for (let i = 0; i < leagues.length; i++) {
          if (leagues[i].id === id) {
            setTeams(leagues[i].teams);
            break;
          }
        }
      } else {
        // if I'm not coming from Home so I need to load this competition's teams
        // Getting Teams
        axios
          .get(`http://api.football-data.org/v2/competitions/${id}/teams`, {
            headers: { 'X-Auth-Token': '5b42f8f8f9f247439bda03879156cdcb' }
          })
          .then(res => {
            setTeams(res.data.teams);
          });
      }
    }
  }, [available, loading, id, leagues]);
  return (
    <Fragment>
      <section className='info'>
        <div className='container'>
          <h2>football leagues</h2>
          <h4>{competition.name && competition.name}</h4>
          <p>{loading ? 'loading' : 'ok'}</p>
          <p>{!loading && !available && "League isn't available"}</p>
        </div>
      </section>
      {teams.length > 0 ? <Teams teams={teams} /> : null}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    leagues: state.leagues.leagues
  };
};
export default connect(mapStateToProps)(Competition);
