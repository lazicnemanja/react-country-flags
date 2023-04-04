import React from 'react'
const GbSct = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" {...props}>
    <defs>
      <clipPath id="gb-sct_svg__a">
        <path d="M0 0h5v3H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#gb-sct_svg__a)">
      <rect width="100%" height="100%" fill="#005EB8" />
      <path stroke="#fff" strokeWidth={0.6} d="m0 0 5 3M0 3l5-3" />
    </g>
  </svg>
);
export default GbSct;
