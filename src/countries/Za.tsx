import React from 'react'
const Za = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 9 6"
    {...props}
  >
    <clipPath id="za_svg__c">
      <path id="za_svg__b" d="m0 0 4.5 3L0 6" />
    </clipPath>
    <clipPath id="za_svg__a">
      <path d="M0 0h9v6H0z" />
    </clipPath>
    <g clipPath="url(#za_svg__a)">
      <path fill="#001489" d="M0 0v6h9V0z" />
      <path fill="#e03c31" d="M0 0v3h9V0z" />
      <g stroke="#fff" strokeWidth={2}>
        <path id="za_svg__d" d="m0 0 4.5 3L0 6m4.5-3H9" />
        <use
          xlinkHref="#za_svg__b"
          stroke="#ffb81c"
          clipPath="url(#za_svg__c)"
        />
      </g>
      <use
        xlinkHref="#za_svg__d"
        fill="none"
        stroke="#007749"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);
export default Za;
