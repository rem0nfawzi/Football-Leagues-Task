import axios from 'axios';

// Getting all leagues
export const getLeagues = () => async dispatch => {
  try {
    const res = await axios.get('http://api.football-data.org/v2/competitions');
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
