import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul style={{ listStyle: "none" }}>
          <li>
            <NavLink
              exact
              activeStyle={{ fontWeight: "bold", color: "red" }}
              style={{ textDecoration: "none", float: "left", padding: "10px" }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ fontWeight: "bold", color: "red" }}
              style={{ textDecoration: "none", float: "left", padding: "10px" }}
              to="/About"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ fontWeight: "bold", color: "red" }}
              style={{ textDecoration: "none", float: "left", padding: "10px" }}
              to="/Services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ fontWeight: "bold", color: "red" }}
              style={{ textDecoration: "none", float: "left", padding: "10px" }}
              to="/post/js/react"
            >
              JavaScript
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ fontWeight: "bold", color: "red" }}
              style={{ textDecoration: "none", float: "left", padding: "10px" }}
              to="/card"
            >
              Card
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
