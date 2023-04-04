import React from 'react'
const Tw = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" {...props}>
    <g fillRule="evenodd">
      <path fill="#fe0000" d="M0 0h900v600H0z" />
      <path fill="#000095" d="M0 0h450v300H0z" />
    </g>
    <path
      fill="#fff"
      d="m225 37.5-56.25 209.928L322.428 93.75 112.5 150l209.928 56.25L168.75 52.572 225 262.5l56.25-209.928L127.572 206.25 337.5 150 127.572 93.75 281.25 247.428 225 37.5"
      paintOrder="markers fill stroke"
    />
    <circle
      cx={225}
      cy={150}
      r={60}
      fill="#fff"
      stroke="#000095"
      strokeWidth={7.5}
    />
  </svg>
);
export default Tw;
