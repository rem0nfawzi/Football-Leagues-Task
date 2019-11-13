const initState = {
  loading: true,
  leagues: [],
  err: null
};
export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_LEAGUES_SUCCESS":
      return {
        ...state,
        leagues: payload,
        loading: false
      };
    case "GET_LEAGUES_FAIL":
      return {
        ...state,
        leagues: [],
        loading: false,
        err: payload.err
      };
    case "GET_LEAGUE_TEAMS_SUCCESS":
      let leagues = state.leagues.map(league => {
        if (league.id === payload.competition.id) {
          return { ...league, count: payload.count, teams: payload.teams };
        }
        return league;
      });
      localStorage.setItem("leagues", JSON.stringify(leagues));
      return {
        ...state,
        leagues: leagues
      };
    default:
      return state;
  }
};
