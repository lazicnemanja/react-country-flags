import React from 'react'
const Sb = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 800 400"
    {...props}
  >
    <defs>
      <clipPath id="sb_svg__a">
        <path d="M0 0h800v400H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#sb_svg__a)">
      <path fill="#0051ba" d="M0 400V0h800z" />
      <path fill="#215b33" d="M0 400h800V0z" />
      <path stroke="#fcd116" strokeWidth={36} d="M0 400 800 0" />
      <g transform="translate(140 120)">
        <g id="sb_svg__e" fill="#fff">
          <g id="sb_svg__d">
            <g id="sb_svg__c">
              <path
                id="sb_svg__b"
                d="M0-40V0h20z"
                transform="rotate(18 0 -40)"
              />
              <use xlinkHref="#sb_svg__b" transform="scale(-1 1)" />
            </g>
            <use xlinkHref="#sb_svg__c" transform="rotate(72)" />
          </g>
          <use xlinkHref="#sb_svg__c" transform="rotate(-72)" />
          <use xlinkHref="#sb_svg__d" transform="rotate(144)" />
        </g>
        <g id="sb_svg__g" transform="rotate(40.6)">
          <use
            xlinkHref="#sb_svg__e"
            id="sb_svg__f"
            x={-104}
            transform="rotate(-40.6 -104 0)"
          />
          <use xlinkHref="#sb_svg__f" x={208} />
        </g>
        <use xlinkHref="#sb_svg__g" transform="scale(-1 1)" />
      </g>
    </g>
  </svg>
);
export default Sb;
