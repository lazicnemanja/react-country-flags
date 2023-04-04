import React from 'react'
const Tv = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" {...props}>
    <clipPath id="tv_svg__a">
      <path d="M0 0h650v350H0z" />
    </clipPath>
    <clipPath id="tv_svg__b">
      <path d="M0 0v150h650v150h-50zm0 300v50h300V0h300z" />
    </clipPath>
    <path fill="#012169" d="M0 0h1200v600H0z" />
    <path
      stroke="#fff"
      strokeWidth={60}
      d="m0 0 600 300m0-300L0 300"
      clipPath="url(#tv_svg__a)"
    />
    <path
      stroke="#c8102e"
      strokeWidth={40}
      d="m0 0 600 300m0-300L0 300"
      clipPath="url(#tv_svg__b)"
    />
    <path stroke="#fff" strokeWidth={100} d="M0 150h650M300 0v350" />
    <path stroke="#c8102e" strokeWidth={60} d="M0 150h650M300 0v350" />
    <path fill="#009cde" d="M0 300h600V0h600v600H0z" />
    <path
      fill="#fedd00"
      d="m645.34 490.913 29.436 90.597-77.066-55.992h95.26l-77.067 55.993zM817.462 464l-29.436 90.597L758.589 464l77.066 55.992h-95.26zm0-121.984-29.436 90.597-29.437-90.597 77.066 55.992-95.26.001zm126.005 91.152-29.437 90.597-29.436-90.597 77.066 55.992-95.26.001zm0-265.413-29.437 90.597-29.436-90.597 77.066 55.992H866.4zm52.975 172.21 29.436 90.597-77.066-55.992h95.26l-77.067 55.993zm52.923-208.404-29.437 90.597-29.437-90.597 77.067 55.992-95.26.001zm53.471 139.913 29.437 90.597-77.067-55.992h95.26l-77.067 55.993zm0-234.069 29.437 90.597-77.067-55.992h95.26l-77.067 55.993z"
    />
  </svg>
);
export default Tv;
