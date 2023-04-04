import React from 'react'
const Gr = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 18" {...props}>
    <path fill="#0D5EAF" d="M0 0h27v18H0z" />
    <path
      fill="none"
      stroke="#FFF"
      strokeWidth={2}
      d="M5 0v11M0 5h10m0-2h17M10 7h17M0 11h27M0 15h27"
    />
  </svg>
);
export default Gr;
