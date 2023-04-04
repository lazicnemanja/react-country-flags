import React from 'react'
const Mv = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 480" {...props}>
    <path fill="#D21034" d="M0 0h720v480H0z" />
    <g fill="#007E3A">
      <path d="M120 120h480v240H120z" />
      <circle cx={390} cy={240} r={80} fill="#FFF" />
      <circle cx={420} cy={240} r={80} />
    </g>
  </svg>
);
export default Mv;
