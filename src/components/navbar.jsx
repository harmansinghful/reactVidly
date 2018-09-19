import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <Link className="navbar-brand" to="/movies">Vidly</Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <NavLink className="nav-item nav-link" to="/movies">Movies</NavLink>
                <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
                <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
                <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
            </ul>
        </div>
    </nav>  
  );
};

export default NavBar;