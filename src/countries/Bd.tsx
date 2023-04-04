import React from 'react'
const Bd = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12" {...props}>
    <path fill="#006a4e" d="M0 0h20v12H0z" />
    <circle cx={9} cy={6} r={4} fill="#f42a41" />
  </svg>
);
export default Bd;
