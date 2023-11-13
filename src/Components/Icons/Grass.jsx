import React from "react";

const grass = `#71C558`;

function Grass({ addColor, height }) {
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 89.08 100"
    >
      <g id="Layer_1-2">
        <path
          d="m67.29,79.99c-5.09-9.56-10.88-18.69-16.77-27.77-3.61-5.57-7.3-11.1-11.77-17.25,6.42,6.43,10.31,10.38,14.01,14.78,9.32,11.09,13.71,18.7,20.01,29.73,3.47,6.08,5.82,10.31,9.41,18.73.26.6.56,1.19.83,1.79,2.04-.72,4.07-1.48,6.08-2.27-.12-.25-.25-.5-.41-.77-3.22-5.4-6.22-10.94-9.52-16.29-1.04-1.68-1.14-2.74,0-4.43,2.8-4.16,4.83-8.75,6.77-13.37,2.86-6.8,2.68-13.6.5-20.56-4.75-15.14-14.73-25.46-28.93-32.01C41.44,2.89,24.64-.73,6.95.12c-1.33.06-2.66.23-4,.32-1.19.08-2.95.48-2.95.48,0,0,.4,1.79.58,2.79,3.49,19.16,5.16,38.62,9.61,57.64,1.54,6.59,4.4,12.57,8.7,17.62,2.01,2.36,6.03,6.59,11.29,9.55,5.81,3.26,9.62,4.44,14.62,4.62,6.46.24,11.99-.4,19.47-3.93,5.63-2.66,5.86-3.86,3-9.23h0Z"
          style={{
            height: `${height}px`,
            fill: `${addColor === true ? grass : "#fff"}`,
          }}
        />
      </g>
    </svg>
  );
}

export default Grass;
