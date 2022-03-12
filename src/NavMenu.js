import React from "react";
import { Link } from "react-router-dom";

// The NavMenu creates links that can be used to navigate
// between routes.
const NavMenu = (movie) => (
  <header>
    <nav>
      <ul className="d-flex align-items-center mt-3 list-unstyled">
        <li>
          <Link to="/">Home</Link>
        </li>
        &nbsp;&nbsp;&nbsp;
        <li>
          <Link to="search">Search</Link>
        </li>
        &nbsp;&nbsp;&nbsp;
        <li>
          <Link to={`movies/${movie.Title}`}>MovieDetails</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavMenu;
