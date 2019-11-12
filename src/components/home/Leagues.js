import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getLeagues } from '../../store/actions/leagues';
import League from './League';
import '../../assets/css/leagues.css';
import Loader from '../common/Loader';
import ErrMsg from '../common/ErrMsg';

const Leagues = ({ leagues: { leagues, loading, err }, getLeagues }) => {
  // Getting all leagues
  useEffect(() => {
    getLeagues();
  }, [getLeagues]);

  // Show spinner untill data is loaded
  if (loading) return <Loader />;

  // Display error message if something went wrong
  if (err !== null)
    return <ErrMsg msg="Can't display data now, Please try again later." />;

  // show actual content when data is ready
  return (
    <Fragment>
      {leagues.map(league => (
        <League
          key={league.id}
          id={league.id}
          name={league.name}
          currentSeason={league.currentSeason}
          logo={league.emblemUrl ? league.emblemUrl : null}
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

// Connecting to redux store
export default connect(
  mapStateToProps,
  { getLeagues }
)(Leagues);
