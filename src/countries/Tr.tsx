import React from 'react'
const Tr = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" {...props}>
    <path fill="#E30A17" d="M0 0h12v8H0z" />
    <circle cx={4.25} cy={4} r={2} fill="#fff" />
    <circle cx={4.75} cy={4} r={1.6} fill="#e30a17" />
    <path fill="#fff" d="m5.833 4 1.81.588-1.119-1.54v1.903l1.118-1.539z" />
  </svg>
);
export default Tr;
