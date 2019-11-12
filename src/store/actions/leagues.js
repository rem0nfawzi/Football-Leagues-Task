import axios from 'axios';

// Getting all leagues
export const getLeagues = () => async dispatch => {
  try {
    const res = await axios.get(
      'http://api.football-data.org/v2/competitions',
      { headers: { 'X-Auth-Token': '5b42f8f8f9f247439bda03879156cdcb' } }
    );
    dispatch({
      type: 'GET_LEAGUES_SUCCESS',
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: 'GET_LEAGUES_FAIL',
      payload: { err: 'Server error' }
    });
  }
};

// Get league teams
export const getTeams = LeagueId => async dispatch => {
  const res = await axios.get(
    `http://api.football-data.org/v2/competitions/${LeagueId}/teams`,
    { headers: { 'X-Auth-Token': '5b42f8f8f9f247439bda03879156cdcb' } }
  );
  if (res) {
    dispatch({
      type: 'GET_LEAGUE_TEAMS_SUCCESS',
      payload: res.data
    });
  }
};
