import axios from "axios";
import { token } from "../constants";

// Getting all leagues
export const getLeagues = () => async dispatch => {
  if (localStorage.getItem("leagues")) {
    let leagues = JSON.parse(localStorage.getItem("leagues"));
    console.log(leagues);
    dispatch({
      type: "GET_LEAGUES_SUCCESS",
      payload: leagues
    });
  } else {
    try {
      const res = await axios.get(
        "https://api.football-data.org/v2/competitions",
        { headers: { "X-Auth-Token": token } }
      );
      dispatch({
        type: "GET_LEAGUES_SUCCESS",
        payload: res.data.competitions
      });
      localStorage.setItem("leagues", JSON.stringify(res.data.competitions));
    } catch (err) {
      dispatch({
        type: "GET_LEAGUES_FAIL",
        payload: { err: "Server error" }
      });
    }
  }
};

// Get league teams
export const getTeams = LeagueId => async dispatch => {
  // check if I got teams for this league before or not
  let leagues = JSON.parse(localStorage.getItem("leaguesTeams")) || [];
  let found = false;
  for (let i = 0; i < leagues.length; i++) {
    if (LeagueId == leagues[i]) {
      console.log("found");
      found = true;
      break;
    }
  }
  // Get teams for this league
  if (!found) {
    const res = await axios.get(
      `https://api.football-data.org/v2/competitions/${LeagueId}/teams`,
      { headers: { "X-Auth-Token": token } }
    );
    if (res) {
      let leagueTeams = JSON.parse(localStorage.getItem("leaguesTeams")) || [];
      leagueTeams.push(LeagueId);
      localStorage.setItem("leaguesTeams", JSON.stringify(leagueTeams));

      dispatch({
        type: "GET_LEAGUE_TEAMS_SUCCESS",
        payload: res.data
      });
    }
  }
};
