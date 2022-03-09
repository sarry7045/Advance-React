import React from "react";
import { NavLink } from "react-router-dom";
// import { useAuth } from "./Auth";
// Diffrence Between Link and Navlink = Navlink Provide us Auto Active Feature

const NavlinkStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "",
  };
};

const Links = () => {
  // const auth = useAuth();
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
        <NavLink style={NavlinkStyle} to="/profile">
          Profile
        </NavLink>
        {/* {!auth.user && (
          <NavLink style={NavlinkStyle} to="/login">
            Login
          </NavLink>
        )}
         */}
      </nav>
    </>
  );
};

export default Links;
