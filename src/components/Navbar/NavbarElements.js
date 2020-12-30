import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: -7px;
  right: 21px;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-116%, 126%);
    font-weight: bold;
  }
  &:hover {
    color: #b0876a;
  }
`;

export const SVGNAV = styled.svg`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
