import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Teams from "./Teams";
import "../../assets/css/competition.css";
import Loader from "../common/Loader";
import ErrMsg from "../common/ErrMsg";
import { token } from "../../store/constants";

const Competition = ({
  match: {
    params: { id }
  },
  leagues: { leagues }
}) => {
  // Loading state
  const [loading, setLoading] = useState(true);
  // state to detect if league info exists or not
  const [available, setAvailable] = useState(false);
  // competition info
  const [competition, setCompetition] = useState({});
  // teams
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Getting competition info
    axios
      .get(`https://api.football-data.org/v2/competitions/${id}`, {
        headers: { "X-Auth-Token": token }
      })
      .then(res => {
        setLoading(false);
        setCompetition(res.data);
        setAvailable(true);
      })
      .then(() => {
        // Getting Competition Teams
        if (!loading && available) {
          // if I'm coming from Home page, So I already have the teams data and no need to make API request
          if (leagues.length > 0) {
            for (let i = 0; i < leagues.length; i++) {
              if (leagues[i].id == id) {
                if (leagues[i].teams) setTeams(leagues[i].teams);
                break;
              }
            }
          } else {
            // if I'm not coming from Home so I need to load this competition's teams
            // Getting Teams
            axios
              .get(
                `https://api.football-data.org/v2/competitions/${id}/teams`,
                {
                  headers: { "X-Auth-Token": token }
                }
              )
              .then(res => {
                setTeams(res.data.teams);
              });
          }
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id, available, leagues, loading]);

  // While loading
  if (loading) return <Loader />;

  return (
    <Fragment>
      <section className="league-info">
        <div className="container">
          <h2>football leagues</h2>
          <p>{competition.name && competition.name}</p>
          {!loading && !available && (
            <ErrMsg msg="Can't show information about this league now, Please try again later" />
          )}

          {!loading && available && (
            <div className="info-box">
              <h3>{competition.name && competition.name}</h3>
              <div className="details">
                <p>
                  seasons: {competition.seasons && competition.seasons.length}
                </p>
                <p>area: {competition.area && competition.area.name}</p>
              </div>
            </div>
          )}
        </div>
      </section>
      {teams.length > 0 ? <Teams teams={teams} /> : null}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    leagues: state.leagues
  };
};
export default connect(mapStateToProps)(Competition);
