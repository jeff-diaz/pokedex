import React from "react";
import styled from "styled-components";

const PokemonName = styled.h1`
  margin: 0px;
  padding: 0px;
  text-transform: capitalize;
  font-size: 2.5rem;
  text-align: center;
`;

const Number = styled.h2`
  margin: 0px;
  padding: 0px;
  text-align: center;
  font-size: 1.25rem;
`;

const NameAndNumber = styled.div`
  padding: 0;
  margin: 0;
  color: white;
`;

const Symbol = styled.span`
  font-size: 12px;
`;

function Name({ data }) {
  return (
    <NameAndNumber>
      <Number>
        <Symbol>#</Symbol>
        {data.id}
      </Number>
      <PokemonName>{data.name}</PokemonName>
    </NameAndNumber>
  );
}

export default Name;
