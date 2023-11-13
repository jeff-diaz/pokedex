import React from "react";
import styled from "styled-components";

const AbilitiesContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
`;
const Ability = styled.span`
  text-align: left;
  border-radius: 10px;
  text-transform: capitalize;

  &::before {
    content: ", ";
  }
  &:first-child::before {
    content: "";
  }
`;

function Abilities({ data }) {
  let abilities = [];
  data.abilities.map((item) => {
    abilities = [...abilities, item.ability.name];
  });

  console.log(abilities);

  return (
    <>
      {abilities.map((ability) => {
        return <Ability>{`${ability.replace(/-/g, " ")}`}</Ability>;
      })}
    </>
  );
}

export default Abilities;
