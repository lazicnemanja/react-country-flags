import React from 'react'
const Ck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 9600 4800"
    {...props}
  >
    <defs>
      <clipPath id="ck_svg__a">
        <path d="M0 0h12v6H0z" />
      </clipPath>
      <clipPath id="ck_svg__b">
        <path d="M0 0v1.5h8V4zm6 0H3v4h-5z" />
      </clipPath>
    </defs>
    <g
      fill="#012169"
      strokeWidth={0.6}
      clipPath="url(#ck_svg__a)"
      transform="scale(800)"
    >
      <path d="M0 0h12v6H0z" />
      <path stroke="#fff" d="m0 0 6 3M0 3l6-3" />
      <path
        stroke="#c8102e"
        strokeWidth={0.4}
        d="m0 0 6 3M0 3l6-3"
        clipPath="url(#ck_svg__b)"
      />
      <path stroke="#fff" strokeWidth={1} d="M3 0v4M0 1.5h7" />
      <path stroke="#c8102e" d="M3 0v4M0 1.5h7" />
      <path d="M0 3h6V0h6v6H0z" />
    </g>
    <g transform="translate(7200 2400)">
      <g id="ck_svg__d">
        <path
          id="ck_svg__c"
          fill="#fff"
          d="m0-1992 81 249h261l-211 153 81 249L0-1494l-212 153 81-249-211-153h261z"
        />
        <use xlinkHref="#ck_svg__c" transform="rotate(24)" />
        <use xlinkHref="#ck_svg__c" transform="rotate(48)" />
      </g>
      <use xlinkHref="#ck_svg__d" transform="rotate(72)" />
      <use xlinkHref="#ck_svg__d" transform="rotate(144)" />
      <use xlinkHref="#ck_svg__d" transform="rotate(216)" />
      <use xlinkHref="#ck_svg__d" transform="rotate(288)" />
    </g>
  </svg>
);
export default Ck;
