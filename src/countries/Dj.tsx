import React from 'react'
const Dj = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10" {...props}>
    <path fill="#6ab2e7" d="M0 0h15v10H0z" />
    <path fill="#12ad2b" d="M0 5h15v5H0z" />
    <path fill="#fff" d="M0 0v10l4.33-2.5L8.66 5 4.33 2.5 0 0z" />
    <path
      fill="#d7141a"
      d="m3.314 3.75.31.955H4.63l-.813.59.31.955-.812-.59-.812.59.31-.955L2 4.705h1.004l.31-.955z"
    />
  </svg>
);
export default Dj;
