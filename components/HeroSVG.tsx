'use client';

export function HeroSVG() {
  return (
    <svg
      viewBox="0 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hero-svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="sailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Horizon line - subtle and refined */}
      <line
        x1="0"
        y1="300"
        x2="1200"
        y2="300"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.1"
        className="horizon-line"
      />

      {/* Water ripples - minimal and elegant */}
      <path
        d="M0 320 Q300 315 600 320 T1200 320"
        stroke="url(#waterGradient)"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        className="water-ripple"
      >
        <animate
          attributeName="d"
          dur="8s"
          repeatCount="indefinite"
          values="
            M0 320 Q300 315 600 320 T1200 320;
            M0 320 Q300 325 600 320 T1200 320;
            M0 320 Q300 315 600 320 T1200 320"
        />
      </path>

      <path
        d="M0 340 Q300 335 600 340 T1200 340"
        stroke="url(#waterGradient)"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
        className="water-ripple"
      >
        <animate
          attributeName="d"
          dur="10s"
          repeatCount="indefinite"
          values="
            M0 340 Q300 335 600 340 T1200 340;
            M0 340 Q300 345 600 340 T1200 340;
            M0 340 Q300 335 600 340 T1200 340"
        />
      </path>

      {/* Sailboat - minimalist and iconic */}
      <g className="sailboat" transform="translate(600, 250)">
        {/* Hull */}
        <path
          d="M-30 50 L-25 35 L25 35 L30 50 Z"
          fill="currentColor"
          opacity="0.12"
        />
        
        {/* Mast */}
        <line
          x1="0"
          y1="35"
          x2="0"
          y2="-50"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.15"
        />
        
        {/* Main sail */}
        <path
          d="M0 -50 L0 10 L-40 10 Z"
          fill="url(#sailGradient)"
          opacity="0.8"
        >
          <animate
            attributeName="d"
            dur="4s"
            repeatCount="indefinite"
            values="
              M0 -50 L0 10 L-40 10 Z;
              M0 -50 L0 10 L-38 10 Z;
              M0 -50 L0 10 L-40 10 Z"
          />
        </path>
        
        {/* Jib sail */}
        <path
          d="M0 -50 L0 15 L30 15 Z"
          fill="url(#sailGradient)"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            dur="4s"
            repeatCount="indefinite"
            values="
              M0 -50 L0 15 L30 15 Z;
              M0 -50 L0 15 L28 15 Z;
              M0 -50 L0 15 L30 15 Z"
          />
        </path>
      </g>

      {/* Compass rose - subtle background element */}
      <g className="compass" transform="translate(100, 100)" opacity="0.04">
        <circle cx="0" cy="0" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <line x1="0" y1="-40" x2="0" y2="-30" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="40" x2="0" y2="30" stroke="currentColor" strokeWidth="1" />
        <line x1="-40" y1="0" x2="-30" y2="0" stroke="currentColor" strokeWidth="1" />
        <line x1="40" y1="0" x2="30" y2="0" stroke="currentColor" strokeWidth="1" />
        <polygon points="0,-25 -5,-10 0,-12 5,-10" fill="currentColor" />
      </g>

      {/* Anchor icon - subtle watermark */}
      <g className="anchor" transform="translate(1100, 500)" opacity="0.03">
        <path
          d="M0 -20 L0 20 M-10 10 L0 20 L10 10 M-15 -10 Q-15 -15 -10 -15 L10 -15 Q15 -15 15 -10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="0" cy="-25" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      </g>
    </svg>
  );
}
