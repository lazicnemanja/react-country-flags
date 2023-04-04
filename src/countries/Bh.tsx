import React from 'react'
const Bh = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 900" {...props}>
    <path fill="#fff" d="M0 0h1500v900H0" />
    <path
      fill="#ce1126"
      d="M1500 0H375l225 90-225 90 225 90-225 90 225 90-225 90 225 90-225 90 225 90-225 90h1125"
    />
  </svg>
);
export default Bh;
