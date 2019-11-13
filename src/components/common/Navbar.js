import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
