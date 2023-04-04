import React from 'react'
const Hk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 900 600"
    {...props}
  >
    <path fill="#EE1C25" d="M0 0h900v600H0z" />
    <g id="hk_svg__a">
      <path
        fill="#fff"
        d="M449.964 299.913c-105.263-44.486-58.602-181.581 42.07-174.69-20.366 10.467-23.318 29.997-11.687 48.09 13.024 20.256-1.2 52.848-18.806 60.767-28.935 13.025-34.728 47.75-11.577 65.833z"
      />
      <path
        fill="#EE1C25"
        d="m444.272 200.92-5.92 9.294-2.144-10.815-10.679-2.759 9.625-5.39-.671-10.999 8.085 7.49 10.256-4.043-4.61 10.01 7.001 8.505zm6.288 97.839c-12.731-6.534-22.996-20.155-27.468-36.431-5.115-18.67-2.173-38.743 8.083-55.038l-2.208-1.394c-10.64 16.929-13.693 37.743-8.386 57.12 4.728 17.221 15.214 31.097 28.787 38.064z"
      />
    </g>
    <use xlinkHref="#hk_svg__a" transform="rotate(72 450 300)" />
    <use xlinkHref="#hk_svg__a" transform="rotate(144 450 300)" />
    <use xlinkHref="#hk_svg__a" transform="rotate(216 450 300)" />
    <use xlinkHref="#hk_svg__a" transform="rotate(288 450 300)" />
  </svg>
);
export default Hk;
