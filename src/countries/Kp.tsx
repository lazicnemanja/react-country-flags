import React from 'react'
const Kp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 72 36"
    {...props}
  >
    <path fill="#024FA2" d="M0 0h72v36H0z" />
    <path fill="#fff" d="M0 6h72v24H0z" />
    <path fill="#ED1C27" d="M0 7h72v22H0z" />
    <circle cx={24} cy={18} r={8} fill="#fff" />
    <g fill="#ED1C27" transform="matrix(7.75 0 0 7.75 24 18)">
      <g id="kp_svg__b">
        <path id="kp_svg__a" d="M0 0v1h.5z" transform="rotate(18 3.157 -.5)" />
        <use xlinkHref="#kp_svg__a" transform="scale(-1 1)" />
      </g>
      <use xlinkHref="#kp_svg__b" transform="rotate(72)" />
      <use xlinkHref="#kp_svg__b" transform="rotate(-72)" />
      <use xlinkHref="#kp_svg__b" transform="rotate(144)" />
      <use xlinkHref="#kp_svg__b" transform="rotate(-144)" />
    </g>
  </svg>
);
export default Kp;
