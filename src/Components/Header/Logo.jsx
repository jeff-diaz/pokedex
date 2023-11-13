import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledLogo = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  font-family: "Poppins", sans-serif, Helvetica, Arial, sans-serif;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
`;

function Logo() {
  return (
    <>
      <StyledLink to="/1">
        <StyledLogo>Pokedex</StyledLogo>
      </StyledLink>
    </>
  );
}

export default Logo;
