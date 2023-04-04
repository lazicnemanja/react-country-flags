import React from 'react'
const Pk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 80" {...props}>
    <path fill="#fff" d="M0 0h120v80H0z" />
    <path fill="#01411c" d="M30 0h90v80H30z" />
    <circle cx={75} cy={40} r={24} fill="#fff" />
    <circle cx={81.135} cy={34.547} r={22} fill="#01411c" />
    <path
      fill="#fff"
      d="m83.751 22.041 10.11 11.373L79 30.156l13.94-6.1-7.695 13.129z"
    />
  </svg>
);
export default Pk;
