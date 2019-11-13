import React from "react";
import Team from "./Team";
const Teams = ({ teams, leagueId }) => {
  return (
    <section>
      <div className="container">
        <div className="teams-wrap">
          {teams.map(team => (
            <Team team={team} leagueId={leagueId} key={team.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
