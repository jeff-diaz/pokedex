import React from "react";

function Rock({ addColor, hex }) {
  return (
    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <g id="Layer_1-2">
        <polygon
          points="93.03 86.31 70.87 98.26 51.36 98.68 33.48 100 13.15 89.88 5.94 73.63 0 49.13 19.99 10.28 28.98 5.75 41 7.88 65.35 0 91.13 27.19 100 64.66 93.03 86.31"
          style={{
            fill: `${addColor === true ? hex : "#fff"}`,
          }}
        />
      </g>
    </svg>
  );
}

export default Rock;
