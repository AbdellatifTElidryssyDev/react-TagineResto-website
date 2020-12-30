import React from "react";
import { Nav, NavLink, NavIcon } from "./NavbarElements";
import Globe from "../Globe/Globe";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Tagine</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Globe className="tagin-menu" />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
