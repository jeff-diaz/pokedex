import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 20px;
`;

const PokemonNameInput = styled.input`
  background-color: white;
  text-align: center;
  padding: 0px;
  padding-bottom: 20px;
  border: none;
  width: 100%;
  color: black;
  border-bottom: 1px solid grey;
  font-size: 21px;
  font-weight: bold;
`;

const Results = styled.ul`
  color: black;
  margin-top: 0px;
  font-size: 21px;
  line-height: 28px;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px 20px;
  margin: 0;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  list-style: none;
`;

const StyledLink = styled(Link)`
  color: grey;
  text-decoration: none;
`;

function SearchBar({ data }) {
  const [userSearch, setUserSearch] = useState("");
  const results = data.filter((item) =>
    item.includes(userSearch.toLowerCase())
  );

  return (
    <SearchBarContainer>
      <SearchForm onSubmit={(e) => e.preventDefault()}>
        <PokemonNameInput
          onChange={(e) => setUserSearch(e.target.value)}
          type="text"
          placeholder="Search pokemon name here..."
        />
      </SearchForm>
      {userSearch.length > 0 && (
        <Results>
          {results.map((item) => {
            return (
              <StyledLink to={`/pokemon/${item}`}>
                <ListItem key={item}>{item}</ListItem>
              </StyledLink>
            );
          })}
        </Results>
      )}
    </SearchBarContainer>
  );
}

export default SearchBar;
