interface LogoProps {
  className?: string;
  color?: "light" | "dark";
}

export function Logo({ className = "", color = "dark" }: LogoProps) {
  const fill = color === "light" ? "#FAFAF8" : "#1B2D45";
  const accent = "#D4923A";

  return (
    <svg
      viewBox="0 0 240 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Meade Warner Painting"
    >
      {/* Brush stroke accent above M */}
      <path
        d="M4 8 C8 4, 20 3, 32 6 C36 7, 38 8, 40 7"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Company name */}
      <text
        x="4"
        y="30"
        fontFamily="var(--font-dm-serif), Georgia, serif"
        fontSize="20"
        fontWeight="400"
        fill={fill}
        letterSpacing="0.5"
      >
        MEADE WARNER
      </text>
      <text
        x="4"
        y="44"
        fontFamily="var(--font-jakarta), system-ui, sans-serif"
        fontSize="11"
        fontWeight="500"
        fill={fill}
        letterSpacing="3"
      >
        PAINTING
      </text>
    </svg>
  );
}
