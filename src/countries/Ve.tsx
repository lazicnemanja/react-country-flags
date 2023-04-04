import React from 'react'
const Ve = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 180 120"
    {...props}
  >
    <defs>
      <g id="ve_svg__d" transform="translate(0 -36)">
        <g id="ve_svg__c">
          <g id="ve_svg__b">
            <path
              id="ve_svg__a"
              fill="#fff"
              d="M0-5v5h3z"
              transform="rotate(18 0 -5)"
            />
            <use xlinkHref="#ve_svg__a" transform="scale(-1 1)" />
          </g>
          <use xlinkHref="#ve_svg__b" transform="rotate(72)" />
        </g>
        <use xlinkHref="#ve_svg__b" transform="rotate(-72)" />
        <use xlinkHref="#ve_svg__c" transform="rotate(144)" />
      </g>
    </defs>
    <path fill="#cf142b" d="M0 0h180v120H0z" />
    <path fill="#00247d" d="M0 0h180v80H0z" />
    <path fill="#fc0" d="M0 0h180v40H0z" />
    <g transform="translate(90 84)">
      <g id="ve_svg__f">
        <g id="ve_svg__e">
          <use xlinkHref="#ve_svg__d" transform="rotate(10)" />
          <use xlinkHref="#ve_svg__d" transform="rotate(30)" />
        </g>
        <use xlinkHref="#ve_svg__e" transform="rotate(40)" />
      </g>
      <use xlinkHref="#ve_svg__f" transform="rotate(-80)" />
    </g>
  </svg>
);
export default Ve;
