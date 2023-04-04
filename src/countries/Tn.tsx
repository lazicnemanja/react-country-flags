import React from 'react'
const Tn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -40 120 80" {...props}>
    <g fill="#E70013">
      <path d="M-60-40H60v80H-60z" />
      <circle r={20} fill="#FFF" />
      <circle r={15} />
      <circle cx={4} r={12} fill="#FFF" />
      <path d="m-5 0 16.281-5.29L1.22 8.56V-8.56L11.28 5.29z" />
    </g>
  </svg>
);
export default Tn;
