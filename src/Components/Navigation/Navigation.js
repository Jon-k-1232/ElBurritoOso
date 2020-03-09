import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  // header
  return (
    <header>
      <nav className="navItems">
        <h2 id="homeLink">
          <Link to="/"> El Burrito Oso </Link>{" "}
        </h2>
        <h3 id="searchMenu">
          <Link to="/search"> Search </Link>
        </h3>
      </nav>
    </header>
  );
}
