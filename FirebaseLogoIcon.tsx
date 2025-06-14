
import React from 'react';

const FirebaseLogoIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 125" // Adjusted viewBox for typical flame proportions
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simplified Flame shape inspired by Firebase logo */}
      {/* Bottom part - Reddish Orange */}
      <path
        d="M20 110 C20 90, 30 70, 50 60 C70 70, 80 90, 80 110 L65 115 C60 100, 40 100, 35 115 Z"
        fill="#F57C00" 
      />
      {/* Middle part - Orange */}
      <path
        d="M28 80 C30 65, 40 50, 50 42 C60 50, 70 65, 72 80 L60 88 C55 78, 45 78, 40 88 Z"
        fill="#FFA000"
      />
      {/* Top part - Yellow */}
      <path
        d="M38 55 C40 45, 45 38, 50 35 C55 38, 60 45, 62 55 L55 60 C53 53, 47 53, 45 60 Z"
        fill="#FFCA28"
      />
    </svg>
  );
};

export default FirebaseLogoIcon;
