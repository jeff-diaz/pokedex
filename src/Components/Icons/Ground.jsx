import React from "react";

const water = "background: #539AE2";
const ice = "background: rgb(85, 195, 236);";
const bug = `#94BC4A`;
const grass = `#71C558`;
const electric = `#ffd726`;
const fire = "background: #EA7A3C";
const fairy = `#f7a3b2`;
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

function Ground({ color = "white", addColor, height }) {
  return (
    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <g id="Layer_1-2">
        <polygon
          points="93.03 86.31 70.87 98.26 51.36 98.68 33.48 100 13.15 89.88 5.94 73.63 0 49.13 19.99 10.28 28.98 5.75 41 7.88 65.35 0 91.13 27.19 100 64.66 93.03 86.31"
          style={{
            height: `${height}px`,
            fill: `${addColor === true ? ground : "#fff"}`,
          }}
        />
      </g>
    </svg>
    // <svg
    //   id="Layer_2"
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 100 70.36"
    // >
    //   <g id="Layer_1-2">
    //     <path
    //       d="m97.11,69.85c.05.15.08.33.11.51.93-.05,1.86-.18,2.78-.36-.03-.24-.07-.49-.12-.73-5.09-21.26-17.32-44.44-48.65-44.16-10.53.09-21.6-1.05-30.6-6.76,11.56,4.44,23.51,4.62,35.65,3.88,9.55-.58,17.93,2.8,25.16,9.02,1.56,1.34,3.07,2.75,5.99,5.38-11.1-19.27-25.43-30.92-46.44-29.79C26.54,7.63,12.81,7.48,0,0l6.07,15.87c15.28,32.74,40.6,43.75,74.02,31.98,2.33-.82,3.58-.03,5.07,1.25,6.41,5.53,9.54,12.92,11.95,20.75h0Z"
    //       style={{
    //         height: `${height}px`,
    //         fill: `${addColor === true ? fairy : "#fff"}`,
    //       }}
    //     />
    //   </g>
    // </svg>
  );
}

export default Ground;
