import styled, { isStyledComponent } from "styled-components";
import Bar from "./Bar";

const StatsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 15px;
  color: #8e9298;
`;

const Label = styled.div`
  text-transform: capitalize;
`;

const Value = styled.div`
  font-weight: 500;
  color: black;
`;

const Percent = styled.span`
  font-size: 12px;
`;

function Stats({ stats, color }) {
  return (
    <StatsContainer>
      {stats.map((stat) => {
        let name = stat.stat.name;
        if (name === "hp") name = "HP";
        if (name === "defense") name = "def";
        if (name === "attack") name = "att";
        if (name === "speed") name = "speed";
        if (name === "special-attack") name = "sp att";
        if (name === "special-defense") name = "sp def";
        return (
          <>
            <Label>{name}:</Label>
            <Value>
              {Math.floor(stat.base_stat / 2)}
              <Percent>%</Percent>
            </Value>
            <Bar value={stat.base_stat / 2} color={color}>
              %
            </Bar>
          </>
        );
      })}
    </StatsContainer>
  );
}

export default Stats;
