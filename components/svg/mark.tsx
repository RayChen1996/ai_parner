import React from "react";

type SvgProps = JSX.IntrinsicElements["svg"];

function SvgComponent(props: SvgProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_622_872"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="40"
        height="40"
      >
        <rect width="40" height="40" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_622_872)">
        <path
          d="M17.0833 35V25.0833L8.49992 30.0417L5.58325 25L14.1666 20L5.58325 15.0417L8.49992 10L17.0833 14.9583V5H22.9166V14.9583L31.4999 10L34.4166 15.0417L25.8333 20L34.4166 25L31.4999 30.0417L22.9166 25.0833V35H17.0833Z"
          fill="black"
        />
      </g>
    </svg>
  );
}
export default SvgComponent;
