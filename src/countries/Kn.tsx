import React from 'react'
const Kn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 750 500"
    {...props}
  >
    <defs>
      <clipPath id="kn_svg__a">
        <path fill="none" d="M0 0h750v500H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#kn_svg__a)">
      <path fill="#009e49" d="M750 0H0v500" />
      <path fill="#ce1126" d="M0 500h750V0" />
      <path stroke="#fcd116" strokeWidth={210} d="M0 500 750 0" />
      <path stroke="#000" strokeWidth={150} d="M0 500 750 0" />
      <g id="kn_svg__d" fill="#fff" transform="rotate(-33.69 514.716 -777.095)">
        <g id="kn_svg__c">
          <path id="kn_svg__b" d="M0-70V0h35" transform="rotate(18 0 -70)" />
          <use xlinkHref="#kn_svg__b" transform="scale(-1 1)" />
        </g>
        <use xlinkHref="#kn_svg__c" transform="rotate(72)" />
        <use xlinkHref="#kn_svg__c" transform="rotate(144)" />
        <use xlinkHref="#kn_svg__c" transform="rotate(216)" />
        <use xlinkHref="#kn_svg__c" transform="rotate(288)" />
      </g>
      <use xlinkHref="#kn_svg__d" transform="translate(-285 190)" />
    </g>
  </svg>
);
export default Kn;
