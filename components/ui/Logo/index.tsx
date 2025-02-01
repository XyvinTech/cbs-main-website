"use client";

interface LogoProps {
  color?: "dark" | "light";
}

export default function Logo({ color = "dark" }: LogoProps) {
  const textColor = color === "dark" ? "#1A2B4B" : "#FFFFFF";
  const mutedColor = color === "dark" ? "#64748B" : "#A3AED0";

  return (
    <svg width="200" height="40" viewBox="0 0 200 40" fill="none">
      {/* Infinity/Continuity Symbol */}
      <path
        d="M16 20C16 23.3137 13.3137 26 10 26C6.68629 26 4 23.3137 4 20C4 16.6863 6.68629 14 10 14C11.5913 14 13.0174 14.6321 14.0711 15.6569"
        stroke="#C8102E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M14 20C14 16.6863 16.6863 14 20 14C23.3137 14 26 16.6863 26 20C26 23.3137 23.3137 26 20 26C18.4087 26 16.9826 25.3679 15.9289 24.3431"
        stroke="#007236"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Company Name */}
      <path d="M40 12H160" stroke={textColor} strokeWidth="0.5" />
      <text
        x="40"
        y="24"
        fill={textColor}
        fontFamily="Manrope"
        fontWeight="600"
        fontSize="18"
      >
        CONTINUITY
      </text>
      <path d="M40 28H160" stroke={textColor} strokeWidth="0.5" />

      {/* Tagline */}
      <text
        x="40"
        y="38"
        fill={mutedColor}
        fontFamily="Manrope"
        fontWeight="500"
        fontSize="10"
      >
        BUSINESS SOLUTIONS
      </text>
    </svg>
  );
}
