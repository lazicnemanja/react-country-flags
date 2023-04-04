import React from 'react'
const Td = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" {...props}>
    <path fill="#C8102E" d="M0 0h3v2H0z" />
    <path fill="#FFCD00" d="M0 0h2v2H0z" />
    <path fill="#00205B" d="M0 0h1v2H0z" />
  </svg>
);
export default Td;
