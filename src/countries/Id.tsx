import React from 'react'
const Id = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" {...props}>
    <path fill="#fff" d="M0 0h3v2H0z" />
    <path fill="red" d="M0 0h3v1H0z" />
  </svg>
);
export default Id;
