import React from 'react'
const Ba = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 16 8"
    {...props}
  >
    <defs>
      <clipPath id="ba_svg__a">
        <path d="M0 0h16v8H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#ba_svg__a)">
      <path fill="#002395" d="M0 0h16v8H0z" />
      <path fill="#fecb00" d="M4.24 0h8v8z" />
      <g id="ba_svg__c">
        <path
          id="ba_svg__b"
          fill="#fff"
          d="M2.353.525 2.8-.85 3.247.525l-1.17-.85h1.446z"
        />
        <use xlinkHref="#ba_svg__b" x={1} y={1} />
        <use xlinkHref="#ba_svg__b" x={2} y={2} />
      </g>
      <use xlinkHref="#ba_svg__c" x={3} y={3} />
      <use xlinkHref="#ba_svg__c" x={6} y={6} />
    </g>
  </svg>
);
export default Ba;
