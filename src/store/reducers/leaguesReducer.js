const initState = {
  loading: true,
  leagues: [],
  err: null
};
export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_LEAGUES_SUCCESS':
      return {
        ...state,
        leagues: payload.competitions,
        loading: false
      };
    case 'GET_LEAGUES_FAIL':
      return {
        ...state,
        leagues: [],
        loading: false,
        err: payload.err
      };
    default:
      return state;
  }
};
