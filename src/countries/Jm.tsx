import React from 'react'
const Jm = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6" {...props}>
    <defs>
      <clipPath id="jm_svg__a">
        <path d="M0 0h12v6H0z" />
      </clipPath>
    </defs>
    <path fill="#007749" d="M0 0h12v6H0z" />
    <path
      fill="#2d2926"
      stroke="#ffb81c"
      d="M-2-1v8l16-8v8z"
      clipPath="url(#jm_svg__a)"
    />
  </svg>
);
export default Jm;
