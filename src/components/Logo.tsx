import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer ring - Pantone colors */}
      <circle cx="24" cy="10" r="2" fill="#50B2C0" /> {/* Pantone 17-1755 Paradise Pink */}
      <circle cx="34" cy="14" r="2" fill="#50B2C0" /> {/* Pantone 18-0135 Mint */}
      <circle cx="38" cy="24" r="2" fill="#50B2C0" /> {/* Pantone 15-4715 Scuba Blue */}
      <circle cx="34" cy="34" r="2" fill="#50B2C0" /> {/* Pantone 17-2520 Rose Violet */}
      <circle cx="24" cy="38" r="2" fill="#50B2C0" /> {/* Pantone 16-1359 Fusion Coral */}
      <circle cx="14" cy="34" r="2" fill="#50B2C0" /> {/* Pantone 15-5217 Turquoise */}
      <circle cx="10" cy="24" r="2" fill="#FFB0A0" /> {/* Pantone 14-1323 Peach Pearl */}
      <circle cx="14" cy="14" r="2" fill="#FF7A5A" /> {/* Pantone 16-1546 Living Coral */}
      
      {/* Inner ring */}
      <circle cx="24" cy="16" r="3" fill="#50B2C0" /> {/* Pantone 2925 C */}
      <circle cx="31" cy="20" r="3" fill="#FC6B3F" /> {/* Pantone 17-1464 Orange Tiger */}
      <circle cx="32" cy="28" r="3" fill="#9747FF" /> {/* Pantone 18-3838 Ultra Violet */}
      <circle cx="24" cy="32" r="3" fill="#00A0B0" /> {/* Pantone 7466 C */}
      <circle cx="16" cy="28" r="3" fill="#FF4081" /> {/* Pantone 17-2036 Pink Yarrow */}
      <circle cx="17" cy="20" r="3" fill="#00BFB3" /> {/* Pantone 3385 C */}
      
      {/* Center dot */}
      <circle cx="24" cy="24" r="4" fill="#FF3EA5" /> {/* Pantone 17-2033 Hot Pink */}
    </svg>
  );
}