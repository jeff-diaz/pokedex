import React from "react";

const poison = `#B468B7`;

function Poison({ addColor, height }) {
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60.42 65.05"
    >
      <g id="Layer_1-2">
        <path
          d="m30.21,0C13.53,0,0,12.91,0,28.83c0,10.11,5.45,18.99,13.69,24.14v9.31c0,1.53,1.24,2.76,2.76,2.76h3.78c1.53,0,2.76-1.24,2.76-2.76v-3.34c0-.71.57-1.28,1.28-1.28s1.28.57,1.28,1.28v3.34c0,1.53,1.24,2.76,2.76,2.76h3.78c1.53,0,2.76-1.24,2.76-2.76v-3.34c0-.71.57-1.28,1.28-1.28h0c.71,0,1.28.57,1.28,1.28v3.34c0,1.53,1.24,2.76,2.76,2.76h3.78c1.53,0,2.76-1.24,2.76-2.76v-9.31c8.24-5.15,13.69-14.04,13.69-24.14C60.42,12.91,46.89,0,30.21,0Zm-4.79,32.91c-2.41,9.24-11.01,12.52-14.38,2.44-.54-2.15.15-5.52,2.67-7.24,4.19-2.86,11.04-2.36,11.91.45.11.36.31,2.35-.21,4.35Zm4.3,13.92c-2.04,1.67-2.88-.33-2.72-2.6.13-1.82,2.64-5.59,2.72-5.62v8.22Zm1.81,0v-8.22c.08.03,2.59,3.8,2.72,5.62.16,2.26-.68,4.27-2.72,2.6Zm17.83-11.48c-3.36,10.08-11.96,6.8-14.38-2.44-.52-1.99-.32-3.98-.21-4.35.87-2.82,7.72-3.32,11.91-.45,2.52,1.72,3.21,5.09,2.67,7.24Z"
          style={{
            height: `${height}px`,
            fill: `${addColor === true ? poison : "#fff"}`,
          }}
        />
      </g>
    </svg>
  );
}

export default Poison;