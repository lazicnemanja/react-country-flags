import React from 'react'
const Ps = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" {...props}>
    <path fill="#007A3D" d="M0 0h6v3H0z" />
    <path fill="#FFF" d="M0 0h6v2H0z" />
    <path d="M0 0h6v1H0z" />
    <path fill="#CE1126" d="m0 0 2 1.5L0 3z" />
  </svg>
);
export default Ps;
