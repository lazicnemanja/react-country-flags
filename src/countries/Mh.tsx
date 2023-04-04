import React from 'react'
const Mh = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 57 30"
    {...props}
  >
    <path fill="#003087" d="M0 0h57v30H0z" />
    <path fill="#fff" d="M0 29.52v-.72L57 3.5v8.74z" />
    <path fill="#E57200" d="M0 29.04v-.48L57 .48v5.88z" />
    <g fill="#fff" transform="translate(10.954 10.954)">
      <g id="mh_svg__b">
        <path d="M0-9.3.559 0H-.559z" />
        <path id="mh_svg__a" d="M0-6.659.682 0H-.682z" transform="rotate(15)" />
        <use xlinkHref="#mh_svg__a" transform="rotate(15)" />
        <use xlinkHref="#mh_svg__a" transform="rotate(30)" />
        <use xlinkHref="#mh_svg__a" transform="rotate(45)" />
        <use xlinkHref="#mh_svg__a" transform="rotate(60)" />
      </g>
      <use xlinkHref="#mh_svg__b" transform="rotate(90)" />
      <use xlinkHref="#mh_svg__b" transform="rotate(180)" />
      <use xlinkHref="#mh_svg__b" transform="rotate(270)" />
    </g>
  </svg>
);
export default Mh;
