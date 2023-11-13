import React from "react";
import styled from "styled-components";
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined";

const MovesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Move = styled.div`
  text-align: left;
  border-radius: 1px;
  text-transform: capitalize;
  color: black;
`;

function Moves({ moves }) {
  return (
    <div>
      {/* <h2>Moves</h2> */}
      <MovesContainer>
        {moves?.map((move, index) => {
          return index < 20 ? (
            <Move key={index}>{move["move"].name.replace(/-/g, " ")}</Move>
          ) : (
            ""
          );
        })}
      </MovesContainer>
    </div>
  );
}

export default Moves;
