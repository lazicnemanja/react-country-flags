import React from 'react'
const GbNir = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" {...props}>
    <clipPath id="gb-nir_svg__a">
      <path d="M0 0v30h60V0z" />
    </clipPath>
    <clipPath id="gb-nir_svg__b">
      <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
    </clipPath>
    <g clipPath="url(#gb-nir_svg__a)">
      <path fill="#012169" d="M0 0v30h60V0z" />
      <path stroke="#fff" strokeWidth={6} d="m0 0 60 30m0-30L0 30" />
      <path
        stroke="#C8102E"
        strokeWidth={4}
        d="m0 0 60 30m0-30L0 30"
        clipPath="url(#gb-nir_svg__b)"
      />
      <path stroke="#fff" strokeWidth={10} d="M30 0v30M0 15h60" />
      <path stroke="#C8102E" strokeWidth={6} d="M30 0v30M0 15h60" />
    </g>
  </svg>
);
export default GbNir;
