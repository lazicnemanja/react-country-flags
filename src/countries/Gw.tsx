import React from 'react'
const Gw = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-2 -3 12 6"
    {...props}
  >
    <path fill="#ce1126" d="M-2-3h4v6h-4z" />
    <path fill="#fcd116" d="M2-3h8v3H2z" />
    <path fill="#009e49" d="M2 0h8v3H2z" />
    <g id="gw_svg__b">
      <path
        id="gw_svg__a"
        fill="#000"
        d="M0-1v1h.5"
        transform="rotate(18 0 -1)"
      />
      <use xlinkHref="#gw_svg__a" transform="scale(-1 1)" />
    </g>
    <use xlinkHref="#gw_svg__b" transform="rotate(72)" />
    <use xlinkHref="#gw_svg__b" transform="rotate(144)" />
    <use xlinkHref="#gw_svg__b" transform="rotate(216)" />
    <use xlinkHref="#gw_svg__b" transform="rotate(288)" />
  </svg>
);
export default Gw;
