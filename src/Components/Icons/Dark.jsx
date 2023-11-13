import React from "react";

const water = "background: #539AE2";
const ice = "background: rgb(85, 195, 236);";
const bug = `#94BC4A`;
const grass = `#71C558`;
const electric = `#ffd726`;
const fire = "background: #EA7A3C";
const fairy = `background: #f7a3b2`;
const ghost = `#846AB6`;
const psychic = `#a854a8;`;
const poison = `#B468B7;`;
const ground = `#CC9F4F`;
const rock = `#B2A061`;
const normal = `#AAB09F`;
const flying = `#7DA6DE`;
const dragon = `#6A7BAF`;
const dark = `#736C75`;
const fighting = `#CB5F48 `;
const steel = `#89A1B0`;

function Dark({ addColor, height }) {
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 97.93 100"
    >
      <g id="Layer_1-2">
        <path
          d="m25,93.29C1.09,79.49-7.1,48.91,6.71,25,20.51,1.09,51.09-7.1,75,6.71c3.47,2,6.6,4.36,9.39,6.99-12.23-2.71-25.32,2.63-31.91,14.05-8.14,14.1-3.31,32.14,10.79,40.28,11.42,6.6,25.43,4.68,34.66-3.79-1.1,3.68-2.64,7.29-4.64,10.75-13.8,23.91-44.38,32.1-68.29,18.3Z"
          style={{
            height: `${height}px`,
            fill: `${addColor === true ? dark : "#fff"}`,
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
    //         fill: `${addColor === true ? dark : "#fff"}`,
    //       }}
    //     />
    //   </g>
    // </svg>
  );
}

export default Dark;
