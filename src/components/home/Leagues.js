import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getLeagues } from '../../store/actions/leagues';
import League from './League';

const Leagues = ({ leagues: { leagues, loading, err }, getLeagues }) => {
  // Getting all leagues
  useEffect(() => {
    getLeagues();
  }, [getLeagues]);

  // Show spinner untill data is loaded
  if (loading) return <div>loading ...</div>;

  // show actual content when data is ready
  if (err !== null) return <p>{err}</p>;
  return (
    <Fragment>
      {leagues.map(league => (
        <League
          key={league.id}
          id={league.id}
          name={league.name}
          currentSeason={league.currentSeason}
          teams={league.count ? league.count : null}
        />
      ))}
    </Fragment>
  );
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
