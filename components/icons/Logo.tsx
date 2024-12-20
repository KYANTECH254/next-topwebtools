import React from 'react';

const Logo = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    { ...props }
  >
    {/* Full circle with white background */}
    <circle cx="16" cy="16" r="16" fill="#FFFFFF" />
    
    {/* Text in the center */}
    <text
      x="16"
      y="20"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontSize="13"
      fill="#000000"
      fontWeight="bold"
    >
      TWT
    </text>
  </svg>
);

export default Logo;
