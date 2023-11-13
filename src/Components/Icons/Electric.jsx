import React from "react";

const electric = `#ffd726`;

function Electric({ addColor, height }) {
  return (
    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <g id="Layer_1-2">
        <path
          d="m132.96,432.17c-59.86-38.59-99.6-105.8-99.6-182.17,0-119.46,97.19-216.65,216.65-216.65,3.53,0,7.04.1,10.54.27l25.19-31.03c-11.68-1.68-23.6-2.59-35.73-2.59C112.15,0,0,112.15,0,250c0,92.26,50.27,172.95,124.83,216.27l8.13-34.1Z"
          style={{
            height: `${height}px`,
            fill: `${addColor === true ? electric : "#fff"}`,
          }}
        />
        <path
          d="m374.67,33.44l-8.58,33.78c60.39,38.49,100.56,106.01,100.56,182.78,0,119.46-97.19,216.65-216.65,216.65-3.52,0-7.02-.1-10.5-.27l-25.1,31.04c11.64,1.67,23.51,2.58,35.6,2.58,137.85,0,250-112.15,250-250,0-92.47-50.5-173.31-125.33-216.56Z"
          style={{
            height: `${height}px`,
            fill: `${addColor === true ? electric : "#fff"}`,
          }}
        />
        <polygon
          points="344.73 0 111.94 286.67 206.4 286.67 155.56 500 388.06 212.5 290.76 212.5 344.73 0"
          style={{
            height: `${height}px`,
            fill: `${addColor === true ? electric : "#fff"}`,
          }}
        />
      </g>
    </svg>
    // <svg
    //   id="Layer_2"
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 55.23 100"
    // >
    //   <g id="Layer_1-2">
    //     <polygon
    //       points="46.56 0 0 57.33 18.89 57.33 8.73 100 55.23 42.5 35.77 42.5 46.56 0"
    //       style={{
    //         height: `${height}px`,
    //         fill: `${addColor === true ? electric : "#fff"}`,
    //       }}
    //     />
    //   </g>
    // </svg>
  );
}

export default Electric;
