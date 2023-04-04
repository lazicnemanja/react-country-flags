import React from 'react'
const Is = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 18" {...props}>
    <path fill="#003087" d="M0 0h25v18H0z" />
    <path stroke="#FFF" strokeWidth={4} d="M0 9h25M9 0v18" />
    <path stroke="#D50032" strokeWidth={2} d="M0 9h25M9 0v18" />
  </svg>
);
export default Is;
