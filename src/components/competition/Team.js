import React from "react";
import { Link } from "react-router-dom";
import defaultLogo from "../../assets/images/championship.svg";
const Team = ({ team }) => {
  return (
    <div className="team">
      <Link className="team-content" to={`/team/${team.id}`}>
        <img
          src={team.crestUrl ? team.crestUrl : defaultLogo}
          alt={team.name}
        />
        <h4>{team.name}</h4>
      </Link>
    </div>
  );
};

export default Team;
