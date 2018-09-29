import React from 'react'

export default () => (
  <svg
    width="396px"
    height="100%"
    viewBox="0 0 396 396"
    margin="0 auto"
    version="1.1"
    display="flex"
    style={{
      margin: '0 auto'
    }}
  >
    <defs>
      <circle id="path-1" cx="198" cy="198" r="198" />
      <mask
        id="mask-2"
        maskContentUnits="userSpaceOnUse"
        maskUnits="objectBoundingBox"
        x="0"
        y="0"
        width="396"
        height="396"
        fill="white"
      >
        <use xlinkHref="#path-1" />
      </mask>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="LocationMarker">
        <circle id="Oval-4" fill="white" cx="198.5" cy="198.5" r="8.5" />
        <circle
          id="Oval-3"
          stroke="white"
          strokeWidth="2"
          cx="198"
          cy="198"
          r="25"
        />
        <circle
          id="Oval-2"
          fillOpacity="0.1"
          fill="#D8D8D8"
          cx="198"
          cy="198"
          r="119"
        />
        <path
          d="M144.5,143.5 L163.168155,162.168155"
          id="Line"
          stroke="#fff"
          strokeLinecap="square"
        />
        <path
          d="M231.5,230.5 L250.168155,249.168155"
          id="Line"
          stroke="#fff"
          strokeLinecap="square"
        />
        <path
          d="M250.473924,143.862385 L232.168155,162.168155"
          id="Line"
          stroke="#fff"
          strokeLinecap="square"
        />
        <path
          d="M162.473924,230.862385 L144.168155,249.168155"
          id="Line"
          stroke="#fff"
          strokeLinecap="square"
        />
        <use
          id="Oval"
          stroke="#979797"
          mask="url(#mask-2)"
          strokeWidth="10"
          strokeDasharray="3,12"
          xlinkHref="#path-1"
        />
      </g>
    </g>
  </svg>
)
