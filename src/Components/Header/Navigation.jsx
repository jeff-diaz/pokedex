import React, { useState } from "react";
import Logo from "./Logo";
import styled from "styled-components";
import SearchIcon from "./SearchIcon";
import { Link } from "react-router-dom";

const NavigationContainer = styled.nav`
  background-color: white;
  padding: 0px 15px;
  border-bottom: 1px solid #eee;
  display: grid;
  grid-template-columns: auto 1fr 25px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: black;
  }
`;

function Navigation() {
  const [active, setActive] = useState(false);

  return (
    <NavigationContainer>
      <Logo />
      <div></div>
      <Link to="/search">
        <SearchIcon />
      </Link>
    </NavigationContainer>
  );
}

export default Navigation;
