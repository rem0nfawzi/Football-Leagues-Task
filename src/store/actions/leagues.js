import axios from 'axios';
import { token } from '../constants';

// Getting all leagues
export const getLeagues = () => async dispatch => {
  try {
    const res = await axios.get(
      'https://api.football-data.org/v2/competitions',
      { headers: { 'X-Auth-Token': token } }
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
    `https://api.football-data.org/v2/competitions/${LeagueId}/teams`,
    { headers: { 'X-Auth-Token': token } }
  );
  if (res) {
    dispatch({
      type: 'GET_LEAGUE_TEAMS_SUCCESS',
      payload: res.data
    });
  }
};
