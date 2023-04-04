import React from 'react'
const Pa = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" {...props}>
    <path fill="#fff" d="M0 0h900v600H0z" />
    <path fill="#002855" d="M0 300h450v300H0z" />
    <path fill="#A6192E" d="M450 0h450v300H450z" />
    <path
      fill="#A6192E"
      fillRule="evenodd"
      d="m675 375 16.84 51.822 54.49.002-44.082 32.03 16.836 51.823L675 478.65l-44.084 32.027 16.836-51.823-44.081-32.03 54.489-.002z"
    />
    <path
      fill="#002855"
      fillRule="evenodd"
      d="m225 75 16.84 51.822 54.49.002-44.082 32.03 16.836 51.823L225 178.65l-44.084 32.027 16.836-51.823-44.081-32.03 54.489-.002z"
    />
  </svg>
);
export default Pa;
