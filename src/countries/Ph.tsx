import React from 'react'
const Ph = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 180 90"
    {...props}
  >
    <path fill="#0038a8" d="M0 0h180v90H0z" />
    <path fill="#ce1126" d="M0 45h180v45H0z" />
    <path fill="#fff" d="M77.942 45 0 90V0" />
    <g fill="#fcd116" transform="translate(28 45)">
      <circle r={9} />
      <g id="ph_svg__d">
        <g id="ph_svg__c">
          <g id="ph_svg__b">
            <path d="m-19 0 1.178 1.178L0 0l-17.822-1.178z" />
            <path
              id="ph_svg__a"
              d="m-.884.116.05.05L0 0z"
              transform="scale(19.2381)"
            />
            <use xlinkHref="#ph_svg__a" transform="scale(1 -1)" />
          </g>
          <use xlinkHref="#ph_svg__b" transform="rotate(45)" />
        </g>
        <use xlinkHref="#ph_svg__c" transform="rotate(90)" />
      </g>
      <use xlinkHref="#ph_svg__d" transform="rotate(180)" />
      <g transform="translate(-2.02)">
        <g id="ph_svg__f" transform="translate(37.962)">
          <path
            id="ph_svg__e"
            d="M5 0 1.618 1.176l-.073 3.58-2.163-2.854-3.427 1.037L-2 0z"
          />
          <use xlinkHref="#ph_svg__e" transform="scale(1 -1)" />
        </g>
        <use xlinkHref="#ph_svg__f" transform="rotate(120)" />
        <use xlinkHref="#ph_svg__f" transform="rotate(-120)" />
      </g>
    </g>
  </svg>
);
export default Ph;
