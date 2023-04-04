import React from 'react'
const Tk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1800 900"
    {...props}
  >
    <defs>
      <g id="tk_svg__b">
        <g id="tk_svg__a">
          <path d="M1-.325H0v.5z" />
          <path d="M1-.325.19.263l-.293-.405z" />
        </g>
        <use xlinkHref="#tk_svg__a" transform="rotate(72)" />
        <use xlinkHref="#tk_svg__a" transform="rotate(144)" />
        <use xlinkHref="#tk_svg__a" transform="rotate(216)" />
        <use xlinkHref="#tk_svg__a" transform="rotate(288)" />
      </g>
    </defs>
    <path fill="#012169" d="M0 0h1800v900H0z" />
    <path
      fill="#ffd100"
      d="M329.376 777.265c-17.934-.15 168.624-99.431 324.77-226.6C858.788 384 1299.54 117.157 1429.115 73.796c13.543-4.532-27.776 23.073-33.14 32.016-138.341 163.74-27.925 472.724 144.973 628.048 51.99 39.763 49.327 41.85 145.707 45.746v9l-1357.28-11.34zm-11.251 18.06S304.962 804.727 305 811.73c.043 7.772 14.766 18.047 14.766 18.047l1338.745 14.765 24.609-16.406-34.453-21.328-1330.542-11.484z"
    />
    <g fill="#fff">
      <use
        xlinkHref="#tk_svg__b"
        transform="matrix(45 0 0 45 342.957 112.581)"
      />
      <use
        xlinkHref="#tk_svg__b"
        transform="matrix(37.5 0 0 37.5 521.205 267.53)"
      />
      <use xlinkHref="#tk_svg__b" transform="matrix(45 0 0 45 135 321.808)" />
      <use
        xlinkHref="#tk_svg__b"
        transform="matrix(52.5 0 0 52.5 342.957 652.581)"
      />
    </g>
  </svg>
);
export default Tk;
