import React from 'react'
const Ly = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" {...props}>
    <path fill="#239e46" d="M0 0h960v480H0z" />
    <path d="M0 0h960v360H0z" />
    <path fill="#e70013" d="M0 0h960v120H0z" />
    <circle cx={480} cy={240} r={60} fill="#fff" />
    <circle cx={492.132} cy={240} r={52.132} />
    <path
      fill="#fff"
      d="m509.175 240 80.7-26.221L540 282.426v-84.852l49.875 68.647z"
    />
  </svg>
);
export default Ly;
