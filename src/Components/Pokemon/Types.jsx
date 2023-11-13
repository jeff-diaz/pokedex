import React from "react";
import styled from "styled-components";
import IconType from "../Icons/IconType";
const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: center;
  color: white;
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`;

const Type = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #ffffff39;
  @media (max-width: 768px) {
    font-size: 10px;
  }
  font-weight: bold;
  display: grid;
  grid-template-columns: 15px auto;
  font-size: 11px;
  text-decoration: none;
  gap: 5px;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 320px) {
    grid-template-columns: 0px auto;
  }

  @media (max-width: 375px) {
    grid-template-columns: 10px auto;
  }
`;

function Types({ types, noHeading }) {
  return (
    <TypesContainer>
      {/* {noHeading === true ? "" : <Heading>Type </Heading>} */}
      {types.map((type) => {
        return (
          <Type key={type.type.name}>
            <IconType type={type.type.name} />
            <span>{type.type.name}</span>
          </Type>
        );
      })}
    </TypesContainer>
  );
}

export default Types;
