import React from 'react'
const Mw = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-225 -114 450 300"
    {...props}
  >
    <path d="M-225-114h450v300h-450z" />
    <g fill="#CE1126">
      <circle r={64.5} />
      <path d="M-225-14h450V86h-450z" />
      <g id="mw_svg__e">
        <g id="mw_svg__d">
          <g id="mw_svg__c">
            <g id="mw_svg__b">
              <path
                id="mw_svg__a"
                d="M0-102c-2.2 0-3 3.3-3 6.5 0 8 1 12 3 23.5 2.04-11.5 3-15.6 3-23.5 0-3.3-1-6.5-3-6.5"
              />
              <use xlinkHref="#mw_svg__a" transform="rotate(5)" />
            </g>
            <use xlinkHref="#mw_svg__b" transform="rotate(10)" />
          </g>
          <use xlinkHref="#mw_svg__c" transform="rotate(20)" />
        </g>
        <use xlinkHref="#mw_svg__d" transform="rotate(40)" />
      </g>
      <use xlinkHref="#mw_svg__e" transform="rotate(-80)" />
    </g>
    <path d="M-225-21.5h450v7.5h-450z" />
    <path fill="#339E35" d="M-225 86h450v100h-450z" />
  </svg>
);
export default Mw;
