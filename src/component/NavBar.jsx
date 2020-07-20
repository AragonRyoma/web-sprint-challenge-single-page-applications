import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
  width: 100%;
  height: 3rem;
  background-color: gold;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    color: black;
    font-weight: bold;
    padding: 1rem;

    text-decoration: none;
  }
`;

const NavBar = (props) => {
  return (
    <Navigation>
      <Link to="/">Home</Link>
      <Link to="/pizzapizza">Make a Za!</Link>
    </Navigation>
  );
};

export default NavBar;
