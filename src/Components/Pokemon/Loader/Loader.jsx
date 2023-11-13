import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 300px;
  svg {
    animation: 0.25s infinite spin;
    animation-timing-function: ease-in;
    max-width: 100px;
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

function Loader() {
  return (
    <Wrapper>
      <svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <g id="Layer_1-2">
          <path
            d="m0,50C0,22.39,22.39,0,50,0s50,22.39,50,50"
            style={{ fill: "#e32326", strokeWidth: "0px" }}
          />
          <path
            d="m50,7c23.71,0,43,19.29,43,43s-19.29,43-43,43S7,73.71,7,50,26.29,7,50,7m0-7C22.39,0,0,22.39,0,50s22.39,50,50,50,50-22.39,50-50S77.61,0,50,0h0Z"
            style={{ fill: "#231f20", strokeWidth: "0px" }}
          />
          <line
            x1="5"
            y1="50"
            x2="95"
            y2="50"
            style={{
              fill: "none",
              stroke: "#231f20",
              strokeMiterlimit: "10",
              strokeWidth: "7px",
            }}
          />
          <circle
            cx="50"
            cy="50"
            r="14"
            style={{ fill: "#fff", strokeWidth: "0px" }}
          />
          <path
            d="m50,39.5c5.79,0,10.5,4.71,10.5,10.5s-4.71,10.5-10.5,10.5-10.5-4.71-10.5-10.5,4.71-10.5,10.5-10.5m0-7c-9.66,0-17.5,7.84-17.5,17.5s7.84,17.5,17.5,17.5,17.5-7.84,17.5-17.5-7.84-17.5-17.5-17.5h0Z"
            style={{ fill: "#231f20", strokeWidth: "0px" }}
          />
        </g>
      </svg>
    </Wrapper>
  );
}

export default Loader;
