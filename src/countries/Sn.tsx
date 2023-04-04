import React from 'react'
const Sn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 900 600"
    {...props}
  >
    <path fill="#00853f" d="M0 0h300v600H0z" />
    <path fill="#fdef42" d="M300 0h300v600H300z" />
    <path fill="#e31b23" d="M600 0h300v600H600z" />
    <g fill="#00853f" transform="translate(450 300)">
      <g id="sn_svg__b">
        <path id="sn_svg__a" d="M0-100V0h50z" transform="rotate(18 0 -100)" />
        <use xlinkHref="#sn_svg__a" transform="scale(-1 1)" />
      </g>
      <use xlinkHref="#sn_svg__b" transform="rotate(72)" />
      <use xlinkHref="#sn_svg__b" transform="rotate(144)" />
      <use xlinkHref="#sn_svg__b" transform="rotate(216)" />
      <use xlinkHref="#sn_svg__b" transform="rotate(288)" />
    </g>
  </svg>
);
export default Sn;
