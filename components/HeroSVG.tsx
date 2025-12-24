'use client';

export function HeroSVG() {
  return (
    <svg
      viewBox="0 0 1400 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hero-svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Sophisticated gradients */}
        <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#2563eb" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.02" />
        </linearGradient>
        
        <linearGradient id="sailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.06" />
        </linearGradient>
        
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0" />
        </linearGradient>

        {/* Subtle blur for depth */}
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Sky gradient - atmospheric depth */}
      <rect width="1400" height="350" fill="url(#skyGradient)" />

      {/* Distant islands - layered depth */}
      <g opacity="0.03" className="islands">
        <ellipse cx="200" cy="340" rx="80" ry="15" fill="currentColor" />
        <ellipse cx="1100" cy="345" rx="120" ry="18" fill="currentColor" />
      </g>

      {/* Horizon line - crisp and refined */}
      <line
        x1="0"
        y1="350"
        x2="1400"
        y2="350"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.12"
      />

      {/* Water surface - multiple layers for realism */}
      <g className="water-surface">
        {/* Primary ripple */}
        <path
          d="M0 370 Q350 365 700 370 T1400 370"
          stroke="url(#waterGradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
              M0 370 Q350 365 700 370 T1400 370;
              M0 370 Q350 375 700 370 T1400 370;
              M0 370 Q350 365 700 370 T1400 370"
          />
        </path>

        {/* Secondary ripple */}
        <path
          d="M0 395 Q350 390 700 395 T1400 395"
          stroke="url(#waterGradient)"
          strokeWidth="1.2"
          fill="none"
          opacity="0.3"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
              M0 395 Q350 390 700 395 T1400 395;
              M0 395 Q350 400 700 395 T1400 395;
              M0 395 Q350 390 700 395 T1400 395"
          />
        </path>

        {/* Tertiary ripple */}
        <path
          d="M0 425 Q350 420 700 425 T1400 425"
          stroke="url(#waterGradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
        >
          <animate
            attributeName="d"
            dur="18s"
            repeatCount="indefinite"
            values="
              M0 425 Q350 420 700 425 T1400 425;
              M0 425 Q350 430 700 425 T1400 425;
              M0 425 Q350 420 700 425 T1400 425"
          />
        </path>
      </g>

      {/* Main sailboat - hero element */}
      <g className="sailboat-main" transform="translate(700, 300)">
        {/* Reflection in water */}
        <g opacity="0.06" transform="scale(1, -0.3) translate(0, -150)">
          <path d="M-35 50 L-30 35 L30 35 L35 50 Z" fill="currentColor" />
          <line x1="0" y1="35" x2="0" y2="-50" stroke="currentColor" strokeWidth="1.5" />
          <path d="M0 -50 L0 10 L-45 10 Z" fill="currentColor" />
        </g>

        {/* Hull - elegant yacht design */}
        <path
          d="M-35 50 Q-30 45 -25 35 L-20 30 L20 30 L25 35 Q30 45 35 50 Z"
          fill="currentColor"
          opacity="0.14"
        />
        
        {/* Deck line */}
        <line
          x1="-25"
          y1="35"
          x2="25"
          y2="35"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.1"
        />
        
        {/* Mast - tall and refined */}
        <line
          x1="0"
          y1="30"
          x2="0"
          y2="-80"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.16"
          strokeLinecap="round"
        />
        
        {/* Boom */}
        <line
          x1="0"
          y1="10"
          x2="-45"
          y2="10"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.12"
          strokeLinecap="round"
        />
        
        {/* Main sail - large and prominent */}
        <path
          d="M0 -80 L0 10 L-55 10 Q-50 0 -48 -10 Q-45 -30 -40 -50 Q-35 -65 -25 -75 Q-15 -80 0 -80 Z"
          fill="url(#sailGradient)"
          opacity="0.85"
          filter="url(#softGlow)"
        >
          <animate
            attributeName="d"
            dur="5s"
            repeatCount="indefinite"
            values="
              M0 -80 L0 10 L-55 10 Q-50 0 -48 -10 Q-45 -30 -40 -50 Q-35 -65 -25 -75 Q-15 -80 0 -80 Z;
              M0 -80 L0 10 L-52 10 Q-48 0 -46 -10 Q-43 -30 -38 -50 Q-33 -65 -23 -75 Q-13 -80 0 -80 Z;
              M0 -80 L0 10 L-55 10 Q-50 0 -48 -10 Q-45 -30 -40 -50 Q-35 -65 -25 -75 Q-15 -80 0 -80 Z"
          />
        </path>
        
        {/* Jib sail - forward sail */}
        <path
          d="M0 -80 L0 20 L40 20 Q38 10 36 0 Q33 -20 28 -40 Q23 -60 15 -72 Q8 -78 0 -80 Z"
          fill="url(#sailGradient)"
          opacity="0.7"
          filter="url(#softGlow)"
        >
          <animate
            attributeName="d"
            dur="5s"
            repeatCount="indefinite"
            values="
              M0 -80 L0 20 L40 20 Q38 10 36 0 Q33 -20 28 -40 Q23 -60 15 -72 Q8 -78 0 -80 Z;
              M0 -80 L0 20 L37 20 Q36 10 34 0 Q31 -20 26 -40 Q21 -60 13 -72 Q6 -78 0 -80 Z;
              M0 -80 L0 20 L40 20 Q38 10 36 0 Q33 -20 28 -40 Q23 -60 15 -72 Q8 -78 0 -80 Z"
          />
        </path>

        {/* Sail details - subtle lines */}
        <line x1="0" y1="-80" x2="-45" y2="5" stroke="currentColor" strokeWidth="0.3" opacity="0.08" />
        <line x1="0" y1="-60" x2="-42" y2="8" stroke="currentColor" strokeWidth="0.3" opacity="0.06" />
        <line x1="0" y1="-40" x2="-38" y2="9" stroke="currentColor" strokeWidth="0.3" opacity="0.06" />
      </g>

      {/* Distant sailboat - adds depth */}
      <g className="sailboat-distant" transform="translate(350, 330)" opacity="0.4">
        <path d="M-12 20 L-10 15 L10 15 L12 20 Z" fill="currentColor" opacity="0.08" />
        <line x1="0" y1="15" x2="0" y2="-25" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />
        <path d="M0 -25 L0 5 L-18 5 Z" fill="currentColor" opacity="0.12">
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="M0 -25 L0 5 L-18 5 Z; M0 -25 L0 5 L-16 5 Z; M0 -25 L0 5 L-18 5 Z"
          />
        </path>
      </g>

      {/* Compass rose - sophisticated navigation element */}
      <g className="compass" transform="translate(120, 120)" opacity="0.05">
        <circle cx="0" cy="0" r="50" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="0" cy="0" r="45" stroke="currentColor" strokeWidth="0.3" fill="none" />
        
        {/* Cardinal points */}
        <line x1="0" y1="-50" x2="0" y2="-38" stroke="currentColor" strokeWidth="1.5" />
        <line x1="0" y1="50" x2="0" y2="38" stroke="currentColor" strokeWidth="1" />
        <line x1="-50" y1="0" x2="-38" y2="0" stroke="currentColor" strokeWidth="1" />
        <line x1="50" y1="0" x2="38" y2="0" stroke="currentColor" strokeWidth="1" />
        
        {/* Intercardinal points */}
        <line x1="-35" y1="-35" x2="-28" y2="-28" stroke="currentColor" strokeWidth="0.5" />
        <line x1="35" y1="-35" x2="28" y2="-28" stroke="currentColor" strokeWidth="0.5" />
        <line x1="-35" y1="35" x2="-28" y2="28" stroke="currentColor" strokeWidth="0.5" />
        <line x1="35" y1="35" x2="28" y2="28" stroke="currentColor" strokeWidth="0.5" />
        
        {/* North pointer */}
        <polygon points="0,-32 -6,-15 0,-18 6,-15" fill="currentColor" />
        
        {/* Center */}
        <circle cx="0" cy="0" r="3" fill="currentColor" />
      </g>

      {/* Anchor - club symbol */}
      <g className="anchor-emblem" transform="translate(1250, 580)" opacity="0.04">
        <path
          d="M0 -30 L0 30 M-15 15 L0 30 L15 15 M-20 -15 Q-20 -22 -12 -22 L12 -22 Q20 -22 20 -15"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="0" cy="-36" r="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <line x1="-8" y1="-36" x2="8" y2="-36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Seagulls - subtle life */}
      <g className="seagulls" opacity="0.06">
        <path d="M250 180 Q255 175 260 180" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 100,-20; 200,-10"
            dur="25s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M900 150 Q905 145 910 150" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; -80,-15; -160,-5"
            dur="30s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Wave patterns - foreground detail */}
      <g className="wave-details" opacity="0.03">
        <path d="M0 500 Q50 495 100 500 T200 500" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M1200 520 Q1250 515 1300 520 T1400 520" stroke="currentColor" strokeWidth="0.5" fill="none" />
      </g>
    </svg>
  );
}
