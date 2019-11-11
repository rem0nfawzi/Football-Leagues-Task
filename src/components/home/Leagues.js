import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getLeagues } from '../../store/actions/leagues';

const Leagues = ({ leagues: { leagues, loading, err }, getLeagues }) => {
  useEffect(() => {
    getLeagues();
  }, [getLeagues]);
  // Show spinner untill data is loaded
  if (loading) return <div>loading ...</div>;

  // show actual content when data is ready
  if (err !== null) return <p>{err}</p>;
  return <Fragment>{leagues.map(league => {})}</Fragment>;
};

// getting the props from the redux store
const mapStateToProps = state => {
  return {
    leagues: state.leagues
  };
};

export default connect(
  mapStateToProps,
  { getLeagues }
)(Leagues);
