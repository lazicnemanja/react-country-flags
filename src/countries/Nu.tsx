import React from 'react'
const Nu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 120 60"
    {...props}
  >
    <clipPath id="nu_svg__a">
      <path d="M0 0v15h70v15H60zm0 30v10h30V0h30z" />
    </clipPath>
    <path fill="#012169" d="M0 0h120v60H0z" />
    <g stroke="#c8102e" strokeWidth={6}>
      <path stroke="#fff" d="m0 0 60 30m0-30L0 30" />
      <path
        strokeWidth={4}
        d="m0 0 60 30m0-30L0 30"
        clipPath="url(#nu_svg__a)"
      />
      <path stroke="#fff" strokeWidth={10} d="M30 0v40M0 15h70" />
      <path d="M30 0v40M0 15h70" />
    </g>
    <path fill="#fedd00" d="M60 0h60v60H0V30h60z" />
    <g transform="translate(30 15)">
      <g transform="scale(5.1039)">
        <circle r={1} fill="#012169" />
        <path
          id="nu_svg__b"
          fill="#fedd00"
          d="m0-513674 301930 929245-790463-574305h977066l-790463 574305"
          transform="scale(0)"
        />
      </g>
      <use xlinkHref="#nu_svg__b" transform="matrix(3 0 0 3 -17.5 .29)" />
      <use xlinkHref="#nu_svg__b" transform="matrix(3 0 0 3 17.5 .29)" />
      <use xlinkHref="#nu_svg__b" transform="matrix(3 0 0 3 0 10.29)" />
      <use xlinkHref="#nu_svg__b" transform="matrix(3 0 0 3 0 -9.71)" />
    </g>
  </svg>
);
export default Nu;
