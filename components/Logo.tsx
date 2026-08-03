export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 172 40"
      className={className}
      role="img"
      aria-label="TrendIQ Platform"
    >
      <rect x="0" y="3" width="4" height="30" rx="1" fill="#dc2626" />

      <path
        d="M78 14 L100 3"
        stroke="#dc2626"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <polygon points="100,3 91,4 97,11" fill="#dc2626" />

      <text
        x="14"
        y="24"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="20"
        letterSpacing="-0.3"
        fill="#18181b"
      >
        Trend
      </text>
      <text
        x="76"
        y="24"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="20"
        letterSpacing="-0.3"
        fill="#dc2626"
      >
        IQ
      </text>

      <text
        x="14"
        y="35"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="7"
        letterSpacing="2.5"
        fill="#71717a"
      >
        PLATFORM
      </text>
    </svg>
  );
}
