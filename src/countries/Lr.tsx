import React from 'react'
const Lr = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 209 110"
    {...props}
  >
    <path fill="#bf0a30" d="M0 0h209v110H0z" />
    <path
      stroke="#fff"
      strokeWidth={10}
      d="M0 15h209M0 35h209M0 55h209M0 75h209M0 95h209"
    />
    <path fill="#002868" d="M0 0h50v50H0z" />
    <g transform="matrix(15 0 0 15 25 25)">
      <g id="lr_svg__b">
        <path
          id="lr_svg__a"
          fill="#fff"
          d="M0 0v1h.5z"
          transform="rotate(18 3.157 -.5)"
        />
        <use xlinkHref="#lr_svg__a" transform="scale(-1 1)" />
      </g>
      <use xlinkHref="#lr_svg__b" transform="rotate(72)" />
      <use xlinkHref="#lr_svg__b" transform="rotate(-72)" />
      <use xlinkHref="#lr_svg__b" transform="rotate(144)" />
      <use xlinkHref="#lr_svg__b" transform="rotate(-144)" />
    </g>
  </svg>
);
export default Lr;
