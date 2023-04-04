import React from 'react'
const Jp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" {...props}>
    <path fill="#fff" d="M0 0h900v600H0z" />
    <circle cx={450} cy={300} r={180} fill="#bc002d" />
  </svg>
);
export default Jp;
