import React from 'react'
const Mm = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 18 12"
    {...props}
  >
    <path fill="#FECB00" d="M0 0h18v6H0z" />
    <path fill="#EA2839" d="M0 6h18v6H0z" />
    <path fill="#34B233" d="M0 4h18v4H0z" />
    <g transform="translate(9 6.422) scale(4.422)">
      <path id="mm_svg__a" fill="#FFF" d="M-.325 0 0-1l.325 1z" />
      <use xlinkHref="#mm_svg__a" transform="rotate(-144)" />
      <use xlinkHref="#mm_svg__a" transform="rotate(-72)" />
      <use xlinkHref="#mm_svg__a" transform="rotate(72)" />
      <use xlinkHref="#mm_svg__a" transform="rotate(144)" />
    </g>
  </svg>
);
export default Mm;
