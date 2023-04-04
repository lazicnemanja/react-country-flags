import React from 'react'
const Cd = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" {...props}>
    <path fill="#007fff" d="M0 0h800v600H0z" />
    <path
      fill="#f7d618"
      d="M36 120h84l26-84 26 84h84l-68 52 26 84-68-52-68 52 26-84-68-52zM750 0 0 450v150h50l750-450V0h-50"
    />
    <path fill="#ce1021" d="M800 0 0 480v120l800-480V0" />
  </svg>
);
export default Cd;
