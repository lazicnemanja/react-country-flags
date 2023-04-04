import React from 'react'
const Tz = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" {...props}>
    <defs>
      <clipPath id="tz_svg__a">
        <path d="M0 0h72v48H0z" />
      </clipPath>
    </defs>
    <path fill="#1eb53a" d="M0 48V0h72z" />
    <path fill="#00a3dd" d="M72 0v48H0z" />
    <g fill="none" clipPath="url(#tz_svg__a)">
      <path stroke="#fcd116" strokeWidth={19} d="M0 48 72 0" />
      <path stroke="#000" strokeWidth={13} d="M0 48 72 0" />
    </g>
  </svg>
);
export default Tz;
