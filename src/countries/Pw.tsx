import React from 'react'
const Pw = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" {...props}>
    <path fill="#09F" d="M0 0h16v10H0z" />
    <circle cx={7} cy={5} r={3} fill="#FF0" />
  </svg>
);
export default Pw;
