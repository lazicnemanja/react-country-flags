import React from 'react'
const Lv = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" {...props}>
    <path fill="#9D2235" d="M0 0h6v3H0" />
    <path fill="#FFF" d="M0 1.2h6v.6H0" />
  </svg>
);
export default Lv;
