import React from 'react'
const Ir = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 630 360"
    {...props}
  >
    <path fill="#da0000" d="M0 0h630v360H0z" />
    <path fill="#fff" d="M0 0h630v240H0z" />
    <path fill="#239f40" d="M0 0h630v120H0z" />
    <g transform="translate(8.4 100.4)">
      <g id="ir_svg__e">
        <g id="ir_svg__c" fill="none" stroke="#fff" strokeWidth={2}>
          <path
            id="ir_svg__b"
            d="M0 1h26M1 10V5h8v4h8V5h-5M4 9h2m20 0h-5V5h8m0-5v9h8V0m-4 0v9"
            transform="scale(1.4)"
          />
          <path id="ir_svg__a" d="M0 7h9m1 0h9" transform="scale(2.8)" />
          <use xlinkHref="#ir_svg__a" y={120} />
          <use xlinkHref="#ir_svg__b" y={145.2} />
        </g>
        <g id="ir_svg__d">
          <use xlinkHref="#ir_svg__c" x={56} />
          <use xlinkHref="#ir_svg__c" x={112} />
          <use xlinkHref="#ir_svg__c" x={168} />
        </g>
      </g>
      <use xlinkHref="#ir_svg__d" x={168} />
      <use xlinkHref="#ir_svg__e" x={392} />
    </g>
    <g fill="#da0000" transform="matrix(45 0 0 45 315 180)">
      <g id="ir_svg__f">
        <path d="M-.548.836A.912.912 0 0 0 .329-.722 1 1 0 0 1-.548.836" />
        <path d="M.618.661A.764.764 0 0 0 .422-.74 1 1 0 0 1 .618.661M0 1l-.05-1L0-.787a.31.31 0 0 0 .118.099V-.1l-.04.993zM-.02-.85 0-.831a.144.144 0 0 0 .252-.137A.136.136 0 0 1 0-.925" />
      </g>
      <use xlinkHref="#ir_svg__f" transform="scale(-1 1)" />
    </g>
  </svg>
);
export default Ir;
