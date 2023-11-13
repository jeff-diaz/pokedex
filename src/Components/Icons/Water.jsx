import React from "react";

function Water({ type, addColor }) {
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1800 1800"
    >
      <g id="Layer_1-2">
        <path
          d="m387.5,1328.51c0,260.35,205.33,471.49,458.65,471.49s458.63-211.14,458.63-471.49c0-351.82-366.72-717.91-458.63-960.37-95.54,246.96-458.65,608.55-458.65,960.37Zm363.88,369.17c-133.15-36.61-236.92-148.49-266.09-288.76-7.7-42.2-8.96-85.23-5.69-127.52,10.95-104.66,56.54-213.09,115.12-319.4-21.87,96.83-55.91,282.22-20.58,429.73,59.6,248.96,186.17,307.35,186.17,307.35,0,0-3.26-.37-8.93-1.4Z"
          style={{ fill: `${addColor === true ? type : "#fff"}` }}
        />
        <path
          d="m428.15,505.26c0-164.21-171.17-335.09-214.07-448.26C169.48,172.27,0,341.04,0,505.26c0,121.52,95.84,220.07,214.08,220.07s214.07-98.55,214.07-220.07Zm-258.3,172.31c-62.15-17.09-110.59-69.31-124.2-134.78-3.59-19.7-4.18-39.78-2.65-59.52,5.11-48.85,26.39-99.46,53.73-149.08-10.21,45.2-26.1,131.73-9.61,200.58,27.82,116.2,86.89,143.46,86.89,143.46,0,0-1.52-.17-4.17-.65Z"
          style={{ fill: `${addColor === true ? type : "#fff"}` }}
        />
        <path
          d="m1571.95,0c-47.51,122.8-228.06,302.6-228.06,477.54,0,129.46,102.1,234.45,228.06,234.45s228.05-104.99,228.05-234.45c0-174.94-182.35-356.98-228.05-477.54Zm-47.12,661.11c-66.21-18.2-117.81-73.84-132.31-143.58-3.83-20.98-4.46-42.38-2.83-63.41,5.44-52.04,28.11-105.96,57.24-158.82-10.87,48.15-27.8,140.33-10.23,213.68,29.64,123.8,92.57,152.83,92.57,152.83,0,0-1.62-.18-4.44-.7Z"
          style={{ fill: `${addColor === true ? type : "#fff"}` }}
        />
      </g>
    </svg>
  );
}

export default Water;
