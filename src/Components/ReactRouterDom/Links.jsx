import React from "react";
import { NavLink } from "react-router-dom";
// Diffrence Between Link and Navlink = Navlink Provide us Auto Active Feature

const NavlinkStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underline",
  };
};

const Links = () => {
  return (
    <>
      <nav>
        <NavLink style={NavlinkStyle} to="/">
          Home
        </NavLink>
        <NavLink style={NavlinkStyle} to="/about">
          About
        </NavLink>
        <NavLink style={NavlinkStyle} to="/products">
          Products
        </NavLink>
      </nav>
    </>
  );
};

export default Links;
