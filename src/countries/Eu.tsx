import React from 'react'
const Eu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 810 540"
    {...props}
  >
    <defs>
      <g id="eu_svg__d">
        <g id="eu_svg__b">
          <path
            id="eu_svg__a"
            d="M0 0v1h.5z"
            transform="rotate(18 3.157 -.5)"
          />
          <use xlinkHref="#eu_svg__a" transform="scale(-1 1)" />
        </g>
        <g id="eu_svg__c">
          <use xlinkHref="#eu_svg__b" transform="rotate(72)" />
          <use xlinkHref="#eu_svg__b" transform="rotate(144)" />
        </g>
        <use xlinkHref="#eu_svg__c" transform="scale(-1 1)" />
      </g>
    </defs>
    <path fill="#039" d="M0 0h810v540H0z" />
    <g fill="#fc0" transform="matrix(30 0 0 30 405 270)">
      <use xlinkHref="#eu_svg__d" y={-6} />
      <use xlinkHref="#eu_svg__d" y={6} />
      <g id="eu_svg__e">
        <use xlinkHref="#eu_svg__d" x={-6} />
        <use xlinkHref="#eu_svg__d" transform="rotate(-144 -2.344 -2.11)" />
        <use xlinkHref="#eu_svg__d" transform="rotate(144 -2.11 -2.344)" />
        <use xlinkHref="#eu_svg__d" transform="rotate(72 -4.663 -2.076)" />
        <use xlinkHref="#eu_svg__d" transform="rotate(72 -5.076 .534)" />
      </g>
      <use xlinkHref="#eu_svg__e" transform="scale(-1 1)" />
    </g>
  </svg>
);
export default Eu;
