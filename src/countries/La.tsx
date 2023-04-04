import React from 'react'
const La = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 4" {...props}>
    <path fill="#ce1126" d="M0 0h6v4H0z" />
    <path fill="#002868" d="M0 1h6v2H0z" />
    <circle cx={3} cy={2} r={0.8} fill="#fff" />
  </svg>
);
export default La;
