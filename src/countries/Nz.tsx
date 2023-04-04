import React from 'react'
const Nz = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1200 600"
    {...props}
  >
    <defs>
      <clipPath id="nz_svg__b">
        <path d="M0 0h600v300H0z" />
      </clipPath>
      <clipPath id="nz_svg__c">
        <path d="m0 0 300 150H0zm300 0h300L300 150zm0 150h300v150zm0 0v150H0z" />
      </clipPath>
      <g id="nz_svg__d">
        <g id="nz_svg__a">
          <path d="M0-.325v.5l1-.5z" />
          <path d="m.19.263-.293-.405L1-.325z" />
        </g>
        <use xlinkHref="#nz_svg__a" transform="scale(-1 1)" />
        <use xlinkHref="#nz_svg__a" transform="rotate(72 0 0)" />
        <use xlinkHref="#nz_svg__a" transform="rotate(-72 0 0)" />
        <use xlinkHref="#nz_svg__a" transform="scale(-1 1) rotate(72)" />
      </g>
    </defs>
    <path fill="#012169" d="M0 0h1200v600H0z" />
    <path
      stroke="#FFF"
      strokeWidth={60}
      d="m0 0 600 300M0 300 600 0"
      clipPath="url(#nz_svg__b)"
    />
    <path
      stroke="#C8102E"
      strokeWidth={40}
      d="m0 0 600 300M0 300 600 0"
      clipPath="url(#nz_svg__c)"
    />
    <path
      stroke="#FFF"
      strokeWidth={100}
      d="M300 0v300M0 150h600"
      clipPath="url(#nz_svg__b)"
    />
    <path
      stroke="#C8102E"
      strokeWidth={60}
      d="M300 0v300M0 150h600"
      clipPath="url(#nz_svg__b)"
    />
    <use
      xlinkHref="#nz_svg__d"
      fill="#FFF"
      transform="matrix(45.4 0 0 45.4 900 120)"
    />
    <use
      xlinkHref="#nz_svg__d"
      fill="#C8102E"
      transform="matrix(30 0 0 30 900 120)"
    />
    <g transform="rotate(82 900 240)">
      <use
        xlinkHref="#nz_svg__d"
        fill="#FFF"
        transform="rotate(-82 519.022 -457.666) scale(40.4)"
      />
      <use
        xlinkHref="#nz_svg__d"
        fill="#C8102E"
        transform="rotate(-82 519.022 -457.666) scale(25)"
      />
    </g>
    <g transform="rotate(82 900 240)">
      <use
        xlinkHref="#nz_svg__d"
        fill="#FFF"
        transform="rotate(-82 668.57 -327.666) scale(45.4)"
      />
      <use
        xlinkHref="#nz_svg__d"
        fill="#C8102E"
        transform="rotate(-82 668.57 -327.666) scale(30)"
      />
    </g>
    <use
      xlinkHref="#nz_svg__d"
      fill="#FFF"
      transform="matrix(50.4 0 0 50.4 900 480)"
    />
    <use
      xlinkHref="#nz_svg__d"
      fill="#C8102E"
      transform="matrix(35 0 0 35 900 480)"
    />
  </svg>
);
export default Nz;
