import React from 'react'
const Hn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1260 630"
    {...props}
  >
    <path fill="#0d3b99" d="M1260 0H0v630h1260z" />
    <path fill="#fff" d="M1260 210H0v210h1260z" />
    <path
      id="hn_svg__a"
      fill="#0d3b99"
      d="m630 280 20.572 63.315-53.859-39.131h66.573l-53.859 39.131z"
    />
    <g id="hn_svg__b">
      <use xlinkHref="#hn_svg__a" transform="translate(-175 -52.465)" />
      <use xlinkHref="#hn_svg__a" transform="translate(-175 52.534)" />
    </g>
    <use xlinkHref="#hn_svg__b" transform="translate(350)" />
  </svg>
);
export default Hn;
