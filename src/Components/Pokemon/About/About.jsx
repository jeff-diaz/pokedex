import React from "react";
import Abilities from "./Abilities";
import styled from "styled-components";

const AboutContainer = styled.div`
  .lowerCase {
    text-transform: lowercase;
  }

  .lowerCase::first-letter {
    text-transform: uppercase;
  }
`;
const Table = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
`;
const Row = styled.div``;
const Label = styled.div`
  color: grey;
`;
const Value = styled.div`
  color: black;
`;

const TableHeading = styled.div`
  grid-column: span 2;
  margin-top: 15px;
  color: black;
  font-weight: bold;
`;

const Type = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #ffffff39;
  margin-right: 5px;
  font-size: 10px;
  font-weight: bold;
  display: inline-block;
  font-size: 11px;
`;

const Species = styled.span`
  text-transform: capitalize;

  &::before {
    content: ", ";
  }
  &:first-child::before {
    content: "";
  }
`;

function About({ data, types }) {
  return (
    <AboutContainer>
      <Table>
        <Label>Info: </Label>
        <Value className="lowerCase">{data.description}</Value>
        <Label>ID: </Label>
        <Value># {data.id}</Value>
        <Label>Species:</Label>
        <Value>
          {types.map((type) => {
            return <Species>{type.type.name}</Species>;
          })}
        </Value>
        <Label>Height:</Label>
        <Value>{((data.height / 10) * 3.28).toFixed(1)} ft</Value>
        <Label>Weight:</Label>
        <Value>{((data.weight / 10) * 2.2).toFixed(1)} lbs</Value>
        <Label>Abilities:</Label>
        <Value>
          <Abilities data={data} />
        </Value>
        <Label>Base Exp:</Label>
        <Value>{data.base_experience}</Value>
      </Table>
    </AboutContainer>
  );
}

export default About;
