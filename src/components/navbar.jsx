import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="navbar-nav">
            <NavLink className="navbar-brand" to="/movies">Vidly</NavLink>
            <NavLink className="nav-item nav-link" to="/movies">Movies</NavLink>
            <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
            <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
        </ul>
    </nav>  
  );
};

export default NavBar;