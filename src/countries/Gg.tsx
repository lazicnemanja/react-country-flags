import React from 'react'
const Gg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-18 -12 36 24"
    {...props}
  >
    <path fill="#fff" d="M-18-12h36v24h-36z" />
    <path fill="none" stroke="#e8112d" strokeWidth={6} d="M0-12v24M-18 0h36" />
    <path id="gg_svg__a" fill="#f9dd16" d="m-9 2 1-1h9v-2h-9l-1-1z" />
    <use xlinkHref="#gg_svg__a" transform="rotate(90)" />
    <use xlinkHref="#gg_svg__a" transform="rotate(-90)" />
    <use xlinkHref="#gg_svg__a" transform="rotate(180)" />
  </svg>
);
export default Gg;
