import React from "react";

// Common SVG filters and gradients to keep illustrations premium and consistent
export const SvgDef: React.FC = () => {
  return (
    <svg
      style={{ position: "absolute", width: 0, height: 0 }}
      aria-hidden="true"
    >
      <defs>
        {/* Soft shadow filter for layers */}
        <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow
            dx="0"
            dy="6"
            stdDeviation="5"
            floodColor="#000"
            floodOpacity="0.08"
          />
        </filter>
        <filter id="badge-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="6"
            floodColor="#ff7a00"
            floodOpacity="0.15"
          />
        </filter>

        {/* Character Skin Gradients */}
        <linearGradient id="skin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd8be" />
          <stop offset="100%" stopColor="#f5b38d" />
        </linearGradient>

        {/* Hair Gradients */}
        <linearGradient id="hair-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2D3748" />
          <stop offset="100%" stopColor="#1A202C" />
        </linearGradient>

        {/* Orange Hoodie Gradients */}
        <linearGradient
          id="hoodie-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff9a44" />
          <stop offset="50%" stopColor="#ff7a00" />
          <stop offset="100%" stopColor="#e05300" />
        </linearGradient>
        <linearGradient id="hoodie-shade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e05300" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#801a00" stopOpacity="0.4" />
        </linearGradient>

        {/* Laptop Gradients */}
        <linearGradient
          id="laptop-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <linearGradient id="screen-glow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffddc1" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ff7a00" stopOpacity="0.1" />
        </linearGradient>

        {/* Floating Badges */}
        <linearGradient id="badge-react" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#61dafb" />
          <stop offset="100%" stopColor="#2188ff" />
        </linearGradient>
        <linearGradient id="badge-js" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7df1e" />
          <stop offset="100%" stopColor="#dca810" />
        </linearGradient>
        <linearGradient id="badge-python" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3776ab" />
          <stop offset="100%" stopColor="#ffd43b" />
        </linearGradient>
        <linearGradient id="badge-html" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e44d26" />
          <stop offset="100%" stopColor="#f16529" />
        </linearGradient>
        <linearGradient id="badge-node" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6cc24a" />
          <stop offset="100%" stopColor="#3e8624" />
        </linearGradient>
        <linearGradient id="badge-speech" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff7a00" />
          <stop offset="100%" stopColor="#ff5500" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// 1. Hero Male Avatar: Holding Laptop, Smiling, Orbiting badges
export const HeroAvatar: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SvgDef />
      <svg
        viewBox="0 0 500 500"
        style={{
          width: "100%",
          height: "100%",
          filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.06))",
        }}
      >
        {/* Soft Background Radial Light */}
        <circle
          cx="250"
          cy="230"
          r="170"
          fill="url(#screen-glow)"
          opacity="0.45"
        />
        {/* ORBITING BADGES WITH FLOATING ANIMATION */}
        <g style={{ animation: "float 6s ease-in-out infinite" }}>
          {/* Badge: JS */}
          <g transform="translate(70, 100)" filter="url(#soft-shadow)">
            <circle cx="28" cy="28" r="28" fill="url(#badge-js)" />
            <rect x="18" y="18" width="20" height="20" rx="3" fill="#000000" />
            <text
              x="21"
              y="33"
              fill="#f7df1e"
              fontSize="11"
              fontWeight="bold"
              fontFamily="system-ui"
            >
              JS
            </text>
          </g>

          {/* Badge: React */}
          <g
            transform="translate(400, 160)"
            filter="url(#soft-shadow)"
            style={{ animation: "float 5s ease-in-out infinite alternate" }}
          >
            <circle cx="30" cy="30" r="30" fill="url(#badge-react)" />
            <ellipse
              cx="30"
              cy="30"
              rx="20"
              ry="7"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              transform="rotate(30, 30, 30)"
            />
            <ellipse
              cx="30"
              cy="30"
              rx="20"
              ry="7"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              transform="rotate(90, 30, 30)"
            />
            <ellipse
              cx="30"
              cy="30"
              rx="20"
              ry="7"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              transform="rotate(150, 30, 30)"
            />
            <circle cx="30" cy="30" r="4" fill="#fff" />
          </g>

          {/* Badge: Python */}
          <g
            transform="translate(410, 290)"
            filter="url(#soft-shadow)"
            style={{ animation: "float 7s ease-in-out infinite" }}
          >
            <circle cx="28" cy="28" r="28" fill="url(#badge-python)" />
            <path
              d="M28,12 C21.5,12 20.5,14 20.5,17 L20.5,20 L28,20 L28,21 L17,21 C14.5,21 13,22 13,27 C13,32 15.5,33 18,33 L20,33 L20,31.5 C20,29 22.5,27 25,27 L31,27 C33.5,27 35,25.5 35,23 L35,17 C35,14.5 33.5,12 28,12 Z M25,15.5 C25.8,15.5 26.5,16.2 26.5,17 C26.5,17.8 25.8,18.5 25,18.5 C24.2,18.5 23.5,17.8 23.5,17 C23.5,16.2 24.2,15.5 25,15.5 Z"
              fill="#3776ab"
            />
            <path
              d="M22,44 C28.5,44 29.5,42 29.5,39 L29.5,36 L22,36 L22,35 L33,35 C35.5,35 37,34 37,29 C37,24 34.5,23 32,23 L30,23 L30,24.5 C30,27 27.5,29 25,29 L19,29 C16.5,29 15,30.5 15,33 L15,39 C15,41.5 16.5,44 22,44 Z M25,40.5 C24.2,40.5 23.5,39.8 23.5,39 C23.5,38.2 24.2,37.5 25,37.5 C25.8,37.5 26.5,38.2 26.5,39 C26.5,39.8 25.8,40.5 25,40.5 Z"
              fill="#ffd43b"
            />
          </g>

          {/* Badge: Speech Bubble "Hi" */}
          <g
            transform="translate(60, 240)"
            filter="url(#soft-shadow)"
            style={{ animation: "float 4s ease-in-out infinite" }}
          >
            <path
              d="M15,10 H65 C73.3,10 80,16.7 80,25 C80,33.3 73.3,40 65,40 H35 L20,53 V40 H15 C6.7,40 0,33.3 0,25 C0,16.7 6.7,10 15,10 Z"
              fill="url(#badge-speech)"
            />
            <text
              x="40"
              y="32"
              fill="#ffffff"
              fontSize="16"
              fontWeight="bold"
              fontFamily="var(--font-heading)"
              textAnchor="middle"
            >
              Hi 👋
            </text>
          </g>
        </g>
        {/* CHARACTER ILLUSTRATION */}
        {/* Hoodie Body (Chest/Shoulders) */}
        <path
          d="M140,430 C140,330 180,310 250,310 C320,310 360,330 360,430 Z"
          fill="url(#hoodie-gradient)"
          filter="url(#soft-shadow)"
        />
        {/* Hoodie Zip Area */}
        <path
          d="M246,310 L254,310 L254,430 L246,430 Z"
          fill="#e05300"
          opacity="0.6"
        />
        <path d="M248,340 L252,340 L252,380 L248,380 Z" fill="#718096" />{" "}
        {/* zipper slider */}
        <circle cx="250" cy="380" r="5" fill="#a0aec0" />
        {/* Hoodie Collar/Strings */}
        <path
          d="M210,310 C210,310 230,340 250,340 C270,340 290,310 290,310 Z"
          fill="url(#skin-gradient)"
        />
        {/* Hoodie Hood Outline */}
        <path
          d="M185,190 C160,250 185,310 250,310 C315,310 340,250 315,190 Z"
          fill="none"
          stroke="url(#hoodie-gradient)"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
        {/* Neck */}
        <rect
          x="232"
          y="240"
          width="36"
          height="50"
          rx="10"
          fill="url(#skin-gradient)"
        />
        <path
          d="M232,275 C240,285 260,285 268,275 Z"
          fill="#dca07e"
          opacity="0.3"
        />{" "}
        {/* Neck shade */}
        {/* Face */}
        <rect
          x="180"
          y="140"
          width="140"
          height="135"
          rx="55"
          fill="url(#skin-gradient)"
          filter="url(#soft-shadow)"
        />
        {/* Hair */}
        {/* Hair Base */}
        <path
          d="M174,155 C170,120 200,90 250,90 C300,90 330,120 326,155 C332,170 324,195 324,195 C324,195 315,145 305,140 C295,135 250,135 230,140 C200,147 185,185 185,185 C185,185 174,170 174,155 Z"
          fill="url(#hair-gradient)"
        />
        {/* Hair Tuft/Volume */}
        <path
          d="M205,120 C220,80 280,75 300,105 C310,95 320,105 315,120 C290,105 235,100 205,120 Z"
          fill="url(#hair-gradient)"
        />
        {/* Ears */}
        <circle cx="178" cy="205" r="14" fill="url(#skin-gradient)" />
        <circle cx="178" cy="205" r="8" fill="#e8a37f" />
        <circle cx="322" cy="205" r="14" fill="url(#skin-gradient)" />
        <circle cx="322" cy="205" r="8" fill="#e8a37f" />
        {/* Eyes (Anime / Clay style large dots) */}
        <ellipse cx="218" cy="195" rx="6" ry="8" fill="#2c3e50" />
        <circle cx="216" cy="192" r="2.5" fill="#ffffff" />{" "}
        {/* Light reflection */}
        <ellipse cx="282" cy="195" rx="6" ry="8" fill="#2c3e50" />
        <circle cx="280" cy="192" r="2.5" fill="#ffffff" />{" "}
        {/* Light reflection */}
        {/* Eyebrows */}
        <path
          d="M204,180 Q218,175 230,183"
          fill="none"
          stroke="url(#hair-gradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M296,180 Q282,175 270,183"
          fill="none"
          stroke="url(#hair-gradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Eyeglasses (Modern thick round frame) */}
        <circle
          cx="218"
          cy="195"
          r="24"
          fill="none"
          stroke="#2c3e50"
          strokeWidth="4.5"
          filter="url(#soft-shadow)"
        />
        <circle
          cx="282"
          cy="195"
          r="24"
          fill="none"
          stroke="#2c3e50"
          strokeWidth="4.5"
          filter="url(#soft-shadow)"
        />
        <line
          x1="242"
          y1="195"
          x2="258"
          y2="195"
          stroke="#2c3e50"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        {/* Frame wings */}
        <line
          x1="194"
          y1="195"
          x2="175"
          y2="190"
          stroke="#2c3e50"
          strokeWidth="3.5"
        />
        <line
          x1="306"
          y1="195"
          x2="325"
          y2="190"
          stroke="#2c3e50"
          strokeWidth="3.5"
        />
        {/* Nose */}
        <path
          d="M246,210 Q250,215 254,210"
          fill="none"
          stroke="#dca07e"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Mouth (Happy Smile) */}
        <path
          d="M225,230 Q250,250 275,230"
          fill="none"
          stroke="#a04030"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Cheek Blush */}
        <circle cx="195" cy="220" r="7" fill="#ff7675" opacity="0.35" />
        <circle cx="305" cy="220" r="7" fill="#ff7675" opacity="0.35" />
        {/* Hands holding Laptop */}
        {/* Left hand sleeve */}
        <path d="M120,430 L160,370 L180,390 Z" fill="url(#hoodie-gradient)" />
        <circle cx="185" cy="385" r="12" fill="url(#skin-gradient)" />
        {/* Right hand sleeve */}
        <path d="M380,430 L340,370 L320,390 Z" fill="url(#hoodie-gradient)" />
        <circle cx="315" cy="385" r="12" fill="url(#skin-gradient)" />
        {/* LAPTOP (3D open laptop) */}
        <g filter="url(#soft-shadow)" transform="translate(145, 340)">
          {/* Screen Backlight projection path */}
          <polygon
            points="10,0 200,0 180,-120 30,-120"
            fill="url(#screen-glow)"
            opacity="0.25"
          />

          {/* Laptop Screen (angled back) */}
          <polygon
            points="25,-90 185,-90 195,5 15,5"
            fill="#475569"
            stroke="#94a3b8"
            strokeWidth="2.5"
          />
          <polygon points="30,-85 180,-85 188,0 22,0" fill="#0f172a" />
          {/* Screen Content code layout */}
          <rect
            x="40"
            y="-70"
            width="40"
            height="6"
            rx="2"
            fill="var(--accent-primary)"
            opacity="0.8"
          />
          <rect x="85" y="-70" width="30" height="6" rx="2" fill="#3b82f6" />
          <rect x="40" y="-55" width="80" height="6" rx="2" fill="#10b981" />
          <rect x="40" y="-40" width="60" height="6" rx="2" fill="#eab308" />

          {/* Laptop Body / Keyboard Base */}
          <polygon
            points="15,5 195,5 210,35 -10,35"
            fill="url(#laptop-gradient)"
          />
          {/* Trackpad */}
          <polygon
            points="85,25 125,25 128,32 82,32"
            fill="#cbd5e1"
            opacity="0.8"
          />
          {/* Keyboard outline */}
          <polygon
            points="10,8 200,8 192,23 18,23"
            fill="#334155"
            opacity="0.6"
          />
        </g>
      </svg>
    </div>
  );
};

// 2. About Male Avatar: Toolbelt, standing before a Star, holding Tablet
export const AboutAvatar: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SvgDef />
      <svg
        viewBox="0 0 500 500"
        style={{
          width: "100%",
          height: "100%",
          filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.06))",
        }}
      >
        {/* Floating Background Star Illustration */}
        <g
          transform="translate(250, 200) scale(1.15)"
          filter="url(#badge-shadow)"
        >
          <path
            d="M0,-140 L41,-45 L143,-41 L67,27 L93,128 L0,74 L-93,128 L-67,27 L-143,-41 L-41,-45 Z"
            fill="var(--accent-light)"
            stroke="var(--accent-primary)"
            strokeWidth="3.5"
            strokeDasharray="8,6"
            opacity="0.85"
            style={{
              transformOrigin: "center",
              animation: "float 8s ease-in-out infinite alternate",
            }}
          />
        </g>
        {/* Orbiting Icons near the Star points */}
        <g style={{ animation: "float 5s ease-in-out infinite" }}>
          {/* Floating React */}
          <g transform="translate(100, 110)" filter="url(#soft-shadow)">
            <circle cx="20" cy="20" r="20" fill="#e0f2fe" />
            <ellipse
              cx="20"
              cy="20"
              rx="14"
              ry="5"
              fill="none"
              stroke="#0284c7"
              strokeWidth="1.5"
              transform="rotate(30, 20, 20)"
            />
            <ellipse
              cx="20"
              cy="20"
              rx="14"
              ry="5"
              fill="none"
              stroke="#0284c7"
              strokeWidth="1.5"
              transform="rotate(90, 20, 20)"
            />
            <ellipse
              cx="20"
              cy="20"
              rx="14"
              ry="5"
              fill="none"
              stroke="#0284c7"
              strokeWidth="1.5"
              transform="rotate(150, 20, 20)"
            />
            <circle cx="20" cy="20" r="2.5" fill="#0284c7" />
          </g>

          {/* Floating JS */}
          <g transform="translate(360, 150)" filter="url(#soft-shadow)">
            <circle cx="20" cy="20" r="20" fill="#fef9c3" />
            <text
              x="20"
              y="25"
              fill="#a16207"
              fontSize="12"
              fontWeight="bold"
              fontFamily="var(--font-heading)"
              textAnchor="middle"
            >
              JS
            </text>
          </g>

          {/* Floating Palette */}
          <g transform="translate(120, 290)" filter="url(#soft-shadow)">
            <circle cx="22" cy="22" r="22" fill="#fae8ff" />
            <path
              d="M22,12 C16.5,12 12,16.5 12,22 C12,27.5 16.5,32 22,32 C23.1,32 24,31.1 24,30 C24,29.5 23.8,29 23.5,28.6 C23.2,28.2 23,27.7 23,27.1 C23,26 23.9,25.1 25,25.1 H27.1 C29.8,25.1 32,22.9 32,20.2 C32,15.7 27.5,12 22,12 Z M16.5,22 C15.7,22 15,21.3 15,20.5 C15,19.7 15.7,19 16.5,19 C17.3,19 18,19.7 18,20.5 C18,21.3 17.3,22 16.5,22 Z M20.5,18 C19.7,18 19,17.3 19,16.5 C19,15.7 19.7,15 20.5,15 C21.3,15 22,15.7 22,16.5 C22,17.3 21.3,18 20.5,18 Z"
              fill="#a21caf"
            />
          </g>
        </g>
        {/* CHARACTER STOOD (About) */}
        {/* Legs/Pants */}
        <path d="M200,410 L205,480 L235,480 L230,410 Z" fill="#334155" />
        <path d="M300,410 L295,480 L265,480 L270,410 Z" fill="#334155" />
        {/* Shoes */}
        <path
          d="M205,480 C190,480 190,490 205,492 L235,492 C240,492 240,480 235,480 Z"
          fill="#1e293b"
        />
        <path
          d="M265,480 C260,480 260,492 265,492 L295,492 C310,492 310,480 295,480 Z"
          fill="#1e293b"
        />
        {/* Hoodie Body (Torso) */}
        <path
          d="M170,300 C170,250 200,240 250,240 C300,240 330,250 330,300 L320,410 C320,420 310,425 300,425 L200,425 C190,425 180,420 180,410 Z"
          fill="url(#hoodie-gradient)"
          filter="url(#soft-shadow)"
        />
        {/* Tool Belt */}
        <rect x="180" y="405" width="140" height="15" rx="4" fill="#5c4033" />
        {/* Tool pouches / details on belt */}
        <rect x="200" y="415" width="22" height="20" rx="3" fill="#8b5a2b" />
        <rect x="278" y="415" width="22" height="20" rx="3" fill="#8b5a2b" />
        <path d="M228,415 L234,415 L234,435 L228,435 Z" fill="#718096" />{" "}
        {/* Hammer loop */}
        {/* Neck */}
        <rect
          x="232"
          y="195"
          width="36"
          height="50"
          rx="10"
          fill="url(#skin-gradient)"
        />
        {/* Face */}
        <rect
          x="180"
          y="90"
          width="140"
          height="130"
          rx="55"
          fill="url(#skin-gradient)"
          filter="url(#soft-shadow)"
        />
        {/* Hair */}
        <path
          d="M174,105 C170,70 200,40 250,40 C300,40 330,70 326,105 C332,120 324,145 324,145 C324,145 315,95 305,90 C295,85 250,85 230,90 C200,97 185,135 185,135 C185,135 174,120 174,105 Z"
          fill="url(#hair-gradient)"
        />
        <path
          d="M205,70 C220,30 280,25 300,55 C310,45 320,55 315,70 C290,55 235,50 205,70 Z"
          fill="url(#hair-gradient)"
        />
        {/* Ears */}
        <circle cx="178" cy="155" r="12" fill="url(#skin-gradient)" />
        <circle cx="322" cy="155" r="12" fill="url(#skin-gradient)" />
        {/* Eyeglasses */}
        <circle
          cx="218"
          cy="145"
          r="22"
          fill="none"
          stroke="#2c3e50"
          strokeWidth="4.5"
        />
        <circle
          cx="282"
          cy="145"
          r="22"
          fill="none"
          stroke="#2c3e50"
          strokeWidth="4.5"
        />
        <line
          x1="240"
          y1="145"
          x2="260"
          y2="145"
          stroke="#2c3e50"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <line
          x1="196"
          y1="145"
          x2="178"
          y2="141"
          stroke="#2c3e50"
          strokeWidth="3.5"
        />
        <line
          x1="304"
          y1="145"
          x2="322"
          y2="141"
          stroke="#2c3e50"
          strokeWidth="3.5"
        />
        {/* Eyes */}
        <ellipse cx="218" cy="145" rx="5" ry="7" fill="#2c3e50" />
        <circle cx="216" cy="142" r="2" fill="#ffffff" />
        <ellipse cx="282" cy="145" rx="5" ry="7" fill="#2c3e50" />
        <circle cx="280" cy="142" r="2" fill="#ffffff" />
        {/* Nose & Mouth */}
        <path
          d="M246,160 Q250,164 254,160"
          fill="none"
          stroke="#dca07e"
          strokeWidth="2.5"
        />
        <path
          d="M228,178 Q250,195 272,178"
          fill="none"
          stroke="#a04030"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="195" cy="170" r="6" fill="#ff7675" opacity="0.3" />
        <circle cx="305" cy="170" r="6" fill="#ff7675" opacity="0.3" />
        {/* Arms holding Tablet */}
        {/* Left sleeve & hand */}
        <path
          d="M180,300 L135,320 L155,360 L185,340 Z"
          fill="url(#hoodie-gradient)"
        />
        <circle cx="130" cy="325" r="10" fill="url(#skin-gradient)" />
        {/* Right sleeve & hand */}
        <path
          d="M320,300 L365,320 L345,360 L315,340 Z"
          fill="url(#hoodie-gradient)"
        />
        <circle cx="370" cy="325" r="10" fill="url(#skin-gradient)" />
        {/* TABLET */}
        <g filter="url(#soft-shadow)" transform="translate(160, 310)">
          {/* Tablet Body */}
          <rect
            x="0"
            y="0"
            width="180"
            height="90"
            rx="10"
            fill="#475569"
            stroke="#94a3b8"
            strokeWidth="3"
          />
          <rect x="8" y="8" width="164" height="74" rx="6" fill="#0f172a" />
          {/* Glowing Content (Charts / UI Design) */}
          <path
            d="M18,65 L50,30 L80,50 L120,20 L150,55 L150,70 L18,70 Z"
            fill="url(#screen-glow)"
            opacity="0.5"
          />
          <path
            d="M18,65 L50,30 L80,50 L120,20 L150,55"
            fill="none"
            stroke="var(--accent-primary)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle
            cx="50"
            cy="30"
            r="5"
            fill="#ffffff"
            stroke="var(--accent-primary)"
            strokeWidth="2.5"
          />
          <circle
            cx="120"
            cy="20"
            r="5"
            fill="#ffffff"
            stroke="var(--accent-primary)"
            strokeWidth="2.5"
          />
          <circle
            cx="80"
            cy="50"
            r="5"
            fill="#ffffff"
            stroke="var(--accent-primary)"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
};

// 3. Contact Male Avatar: Talking on phone, with floating mail envelope
export const ContactAvatar: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SvgDef />
      <svg
        viewBox="0 0 500 500"
        style={{
          width: "100%",
          height: "100%",
          filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.06))",
        }}
      >
        {/* Glowing Background Radial Light */}
        <circle
          cx="250"
          cy="230"
          r="160"
          fill="url(#screen-glow)"
          opacity="0.4"
        />

        {/* Floating Mail Envelope Icon */}
        <g
          transform="translate(360, 110)"
          filter="url(#soft-shadow)"
          style={{ animation: "float 5s ease-in-out infinite" }}
        >
          {/* Notification bubble */}
          <circle cx="65" cy="5" r="12" fill="#ef4444" />
          <text
            x="65"
            y="9"
            fill="#ffffff"
            fontSize="11"
            fontWeight="bold"
            fontFamily="var(--font-heading)"
            textAnchor="middle"
          >
            1
          </text>

          {/* Envelope Body */}
          <rect
            x="0"
            y="0"
            width="70"
            height="46"
            rx="8"
            fill="#ffffff"
            stroke="var(--accent-primary)"
            strokeWidth="2.5"
          />
          <polygon
            points="4,4 35,26 66,4"
            fill="none"
            stroke="var(--accent-primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon
            points="4,42 28,22"
            fill="none"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <polygon
            points="66,42 42,22"
            fill="none"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* CHARACTER ILLUSTRATION */}
        {/* Hoodie Body (Chest/Shoulders) */}
        <path
          d="M140,430 C140,330 180,310 250,310 C320,310 360,330 360,430 Z"
          fill="url(#hoodie-gradient)"
          filter="url(#soft-shadow)"
        />
        {/* Hoodie Collar */}
        <path
          d="M210,310 C210,310 230,340 250,340 C270,340 290,310 290,310 Z"
          fill="url(#skin-gradient)"
        />
        <path
          d="M185,190 C160,250 185,310 250,310 C315,310 340,250 315,190 Z"
          fill="none"
          stroke="url(#hoodie-gradient)"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />

        {/* Neck */}
        <rect
          x="232"
          y="240"
          width="36"
          height="50"
          rx="10"
          fill="url(#skin-gradient)"
        />

        {/* Face */}
        <rect
          x="180"
          y="140"
          width="140"
          height="135"
          rx="55"
          fill="url(#skin-gradient)"
          filter="url(#soft-shadow)"
        />

        {/* Hair */}
        <path
          d="M174,155 C170,120 200,90 250,90 C300,90 330,120 326,155 C332,170 324,195 324,195 C324,195 315,145 305,140 C295,135 250,135 230,140 C200,147 185,185 185,185 C185,185 174,170 174,155 Z"
          fill="url(#hair-gradient)"
        />
        <path
          d="M205,120 C220,80 280,75 300,105 C310,95 320,105 315,120 C290,105 235,100 205,120 Z"
          fill="url(#hair-gradient)"
        />

        {/* Ears */}
        <circle cx="178" cy="205" r="14" fill="url(#skin-gradient)" />
        <circle cx="322" cy="205" r="14" fill="url(#skin-gradient)" />

        {/* Eyeglasses */}
        <circle
          cx="218"
          cy="195"
          r="24"
          fill="none"
          stroke="#2c3e50"
          strokeWidth="4.5"
        />
        <circle
          cx="282"
          cy="195"
          r="24"
          fill="none"
          stroke="#2c3e50"
          strokeWidth="4.5"
        />
        <line
          x1="242"
          y1="195"
          x2="258"
          y2="195"
          stroke="#2c3e50"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <line
          x1="194"
          y1="195"
          x2="175"
          y2="190"
          stroke="#2c3e50"
          strokeWidth="3.5"
        />
        <line
          x1="306"
          y1="195"
          x2="325"
          y2="190"
          stroke="#2c3e50"
          strokeWidth="3.5"
        />

        {/* Eyes */}
        {/* Looking slightly right towards the phone/mail */}
        <ellipse cx="221" cy="195" rx="6" ry="8" fill="#2c3e50" />
        <circle cx="220" cy="192" r="2.5" fill="#ffffff" />

        <ellipse cx="285" cy="195" rx="6" ry="8" fill="#2c3e50" />
        <circle cx="284" cy="192" r="2.5" fill="#ffffff" />

        {/* Eyebrows */}
        <path
          d="M204,180 Q218,175 230,183"
          fill="none"
          stroke="url(#hair-gradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M296,180 Q282,175 270,183"
          fill="none"
          stroke="url(#hair-gradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Nose & Mouth */}
        <path
          d="M246,210 Q250,215 254,210"
          fill="none"
          stroke="#dca07e"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M225,232 Q250,252 275,232"
          fill="none"
          stroke="#a04030"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="195" cy="220" r="7" fill="#ff7675" opacity="0.35" />
        <circle cx="305" cy="220" r="7" fill="#ff7675" opacity="0.35" />

        {/* RIGHT ARM TALKING ON PHONE */}
        {/* Phone Body */}
        <rect
          x="306"
          y="190"
          width="16"
          height="34"
          rx="4"
          fill="#1e293b"
          transform="rotate(-15, 314, 207)"
          filter="url(#soft-shadow)"
        />
        {/* Phone screen glow */}
        <rect
          x="309"
          y="193"
          width="10"
          height="28"
          rx="2"
          fill="#38bdf8"
          opacity="0.3"
          transform="rotate(-15, 314, 207)"
        />

        {/* Right sleeve & hand holding phone */}
        <path d="M380,430 L340,320 L310,340 Z" fill="url(#hoodie-gradient)" />
        <circle
          cx="318"
          cy="225"
          r="12"
          fill="url(#skin-gradient)"
          filter="url(#soft-shadow)"
        />
        {/* fingers details */}
        <circle cx="310" cy="216" r="4.5" fill="url(#skin-gradient)" />
        <circle cx="312" cy="225" r="4.5" fill="url(#skin-gradient)" />
        <circle cx="316" cy="233" r="4.5" fill="url(#skin-gradient)" />

        {/* Left arm resting at bottom */}
        <path d="M120,430 L160,390 L180,410 Z" fill="url(#hoodie-gradient)" />
        <circle cx="185" cy="405" r="12" fill="url(#skin-gradient)" />
      </svg>
    </div>
  );
};
