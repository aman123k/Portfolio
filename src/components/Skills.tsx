import React, { useRef } from 'react';

interface SkillItem {
  name: string;
  proficiency: number;
  color: string;
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const skillsList: SkillItem[] = [
    {
      name: 'JavaScript',
      proficiency: 95,
      color: '#f7df1e',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.268c-.175-1.017-.762-1.84-1.968-2.32-.497-.198-1.125-.342-1.687-.497-.58-.157-.79-.355-.79-.752 0-.282.257-.472.71-.472.507 0 .734.254.815.68h1.96c-.131-1.35-.998-2.24-2.734-2.24-1.69 0-2.82.856-2.82 2.36 0 1.44 1.109 2.09 2.503 2.48.637.18 1.454.34 1.955.513.56.19.81.472.81.916 0 .54-.422.868-1.22.868-.89 0-1.272-.375-1.382-1.03h-1.965c.162 1.637 1.145 2.27 3.37 2.27 2.24 0 3.225-1.094 3.225-2.653zm-11.758-.58c-.147-.946-.867-1.446-2.18-1.446-1.233 0-1.88.625-1.88 1.446v2.18c0 .822.647 1.447 1.88 1.447 1.313 0 2.033-.5 2.18-1.447h1.962c-.156 1.87-1.39 2.65-4.142 2.65-3.007 0-4.662-1.35-4.662-4.14v-2.18c0-2.79 1.655-4.14 4.662-4.14 2.753 0 3.986.78 4.142 2.65h-1.962z"/>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      proficiency: 92,
      color: '#3178c6',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm16.536 12.18h-2.152V18.5h-1.52v-6.32H10.71V10.8h5.826v1.38zm3.267.43c-.156-.814-.61-1.47-1.583-1.85-.4-.16-.9-.28-1.35-.4-.46-.12-.63-.28-.63-.6 0-.22.2-.38.57-.38.4 0 .58.2.65.54h1.56c-.1-1.08-.8-1.8-2.18-1.8-1.35 0-2.25.68-2.25 1.88 0 1.15.88 1.67 2 1.98.5.14 1.16.27 1.56.41.45.15.65.37.65.73 0 .43-.33.7-.97.7-.7 0-1.02-.3-1.1-1.02h-1.57c.13 1.3 1 2.25 2.7 2.25 1.8 0 2.58-.87 2.58-2.12z"/>
        </svg>
      ),
    },
    {
      name: 'React',
      proficiency: 95,
      color: '#61dafb',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#61dafb" strokeWidth="2">
          <circle cx="12" cy="12" r="2.5" fill="#61dafb" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30, 12, 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90, 12, 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150, 12, 12)" />
        </svg>
      ),
    },
    {
      name: 'Next',
      proficiency: 90,
      color: '#ffffff',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.7 18.2l-6.8-8.8v8.8H9.3V7.2h1.6l6.6 8.5V7.2h1.6v11z"/>
        </svg>
      ),
    },
    {
      name: 'Remix',
      proficiency: 80,
      color: '#e11d48',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 3.2L18.8 7 12 10.8 5.2 7 12 3.2zm-6.8 6.5l5.3 3v6.6l-5.3-3v-6.6zm8.3 9.6v-6.6l5.3-3v6.6l-5.3 3z"/>
        </svg>
      ),
    },
    {
      name: 'Tailwind',
      proficiency: 92,
      color: '#38bdf8',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 6.036c-2.286 0-3.428 1.143-3.428 3.428 0 2.286 1.142 3.429 3.428 3.429h2.286c1.143 0 1.714.571 1.714 1.714 0 1.143-.571 1.715-1.714 1.715H9.714c-1.143 0-1.714-.572-1.714-1.715h-2.286c0 2.286 1.143 3.429 3.429 3.429 2.285 0 3.428-1.143 3.428-3.429 0-2.286-1.143-3.428-3.428-3.428H10.286c-1.143 0-1.715-.572-1.715-1.715 0-1.143.572-1.714 1.715-1.714h4.571c1.143 0 1.715.572 1.715 1.714h2.286c0-2.285-1.143-3.428-3.429-3.428H12z" />
        </svg>
      ),
    },
    {
      name: 'Rest API',
      proficiency: 88,
      color: '#10b981',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4M8 11V9a4 4 0 0 1 8 0v2" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      proficiency: 90,
      color: '#339933',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2.1l7.8 4.5v9l-7.8 4.5-7.8-4.5v-9L12 2.1zm0-2.1L2.6 5.4v13.2L12 24l9.4-5.4V5.4L12 0z"/>
        </svg>
      ),
    },
    {
      name: 'Express.js',
      proficiency: 88,
      color: '#353535',
      icon: (
        <div style={{ fontWeight: 800, fontSize: "14px", fontFamily: "sans-serif", color: "#ffffff" }}>ex</div>
      ),
    },
    {
      name: 'MongoDB',
      proficiency: 87,
      color: '#47a248',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M17.15 11.23c-1.38-2.64-3.23-5.26-4.65-7.85-.2-.36-.8-.36-1 0-1.42 2.59-3.27 5.21-4.65 7.85-.6 1.15-.85 2.4-.85 3.65 0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5c0-1.25-.25-2.5-.85-3.65zm-5.15 8.1v-3.71c.56-.05 1.13-.2 1.63-.44v4.15H12zm0-5.83v-4.11c.91.46 1.68 1.16 2.19 2.05v2.06H12z"/>
        </svg>
      ),
    },
    {
      name: 'Mongoose',
      proficiency: 85,
      color: '#880000',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M4 12h16M7 7l10 10M17 7L7 17" />
        </svg>
      ),
    },
    {
      name: 'Supabase',
      proficiency: 83,
      color: '#3ecf8e',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2v10H6l6 10V12h6z"/>
        </svg>
      ),
    },
    {
      name: 'Cloudinary',
      proficiency: 82,
      color: '#3448c5',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10a6 6 0 0 0-12 0 6 6 0 0 0 0 12h12a4 4 0 0 0 0-8z" />
        </svg>
      ),
    },
    {
      name: 'Postgres SQL',
      proficiency: 85,
      color: '#336791',
      icon: (
        <svg viewBox="0 0 64 64" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M32 8c-12 0-20 8-20 20 0 6 3 11 8 15v10l6-6c2 1 4 1 6 1 12 0 20-8 20-20S44 8 32 8z" />
          <circle cx="24" cy="28" r="3" fill="currentColor" />
          <circle cx="40" cy="28" r="3" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'SQL',
      proficiency: 86,
      color: '#007acc',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
    },
    {
      name: 'Prisma',
      proficiency: 84,
      color: '#0c344b',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 19H5.5L12 6.5z"/>
        </svg>
      ),
    },
    {
      name: 'Zustand',
      proficiency: 81,
      color: '#5c4033',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      name: 'React Query',
      proficiency: 85,
      color: '#ff4154',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      name: 'Context API',
      proficiency: 88,
      color: '#805ad5',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M9 6h6M9 18h6M6 9v6M18 9v6" />
        </svg>
      ),
    },
    {
      name: 'Custom Hook',
      proficiency: 90,
      color: '#319795',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 3H6a3 3 0 0 0-3 3v6a5 5 0 0 0 10 0V9a3 3 0 0 1 6 0v9" />
          <circle cx="19" cy="21" r="2" />
        </svg>
      ),
    },
    {
      name: 'Git',
      proficiency: 88,
      color: '#f05032',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M6 9v6M9 15l-3-3M12 12a9 9 0 0 0-6-6" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      proficiency: 90,
      color: '#181717',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
    },
    {
      name: 'Postman',
      proficiency: 84,
      color: '#ff6c37',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      name: 'Vercel',
      proficiency: 89,
      color: '#000000',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M24 22.525H0L12 1.475z"/>
        </svg>
      ),
    },
    {
      name: 'Figma',
      proficiency: 80,
      color: '#f24e1e',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4zM4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4zm0-8c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4zm8-4c2.2 0 4 1.8 4 4v4h-4V0zm4 12c0 2.2-1.8 4-4 4h-4v-8h4c2.2 0 4 1.8 4 4z"/>
        </svg>
      ),
    },
    {
      name: 'Framer Motion',
      proficiency: 82,
      color: '#ea0250',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M0 0h12v12H0V0zm12 12h12v12H12V12zm0-12l12 12H12V0zM0 12h12v12L0 12z" />
        </svg>
      ),
    },
    {
      name: 'Mantine UI',
      proficiency: 81,
      color: '#339af0',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l10 5v10l-10 5-10-5V7l10-5zm0 4v12" />
        </svg>
      ),
    },
    {
      name: 'React Icons',
      proficiency: 88,
      color: '#e91e63',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ];

  const midIndex = Math.ceil(skillsList.length / 2);
  const row1 = skillsList.slice(0, midIndex);
  const row2 = skillsList.slice(midIndex);

  return (
    <section
      id="skills"
      ref={containerRef}
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
      className="section"
    >
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2
          style={{
            fontSize: 'clamp(32px, 4.5vw, 44px)',
            fontWeight: 900,
            fontFamily: 'var(--font-heading)',
            marginBottom: '12px',
            letterSpacing: '-1px',
          }}
        >
          My <span className="text-gradient">Skills</span>
        </h2>
        <p style={{ color: 'var(--text-main)', opacity: 0.8, fontSize: '15px' }}>
          Technologies and tools I work with to create amazing web experiences
        </p>
      </div>

      {/* Skills Marquee Container */}
      <div className="skills-marquee-container">
        {/* Row 1: Scrolls to the Left */}
        <div className="skills-marquee-track">
          <div className="skills-marquee-row scroll-left">
            {/* Unique list */}
            {row1.map((skill, idx) => (
              <div
                key={`r1-unique-${idx}`}
                className="glass-panel skill-card"
                style={{
                  padding: '24px',
                  border: '1.5px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  minWidth: '260px',
                  flexShrink: 0,
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = skill.color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 10px 20px -5px ${skill.color}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      color: skill.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `${skill.color}15`,
                      padding: '10px',
                      borderRadius: '10px',
                    }}
                  >
                    {skill.icon}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-highlight)' }}>
                      {skill.name}
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)' }}>
                    <span>Proficiency</span>
                    <span style={{ color: 'var(--text-highlight)' }}>{skill.proficiency}%</span>
                  </div>
                  <div
                    style={{
                      height: '6px',
                      background: 'var(--bg-tertiary)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        background: 'var(--accent-primary)',
                        borderRadius: '10px',
                        width: `${skill.proficiency}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicated list for seamless looping */}
            {row1.map((skill, idx) => (
              <div
                key={`r1-dup-${idx}`}
                className="glass-panel skill-card"
                style={{
                  padding: '24px',
                  border: '1.5px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  minWidth: '260px',
                  flexShrink: 0,
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = skill.color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 10px 20px -5px ${skill.color}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      color: skill.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `${skill.color}15`,
                      padding: '10px',
                      borderRadius: '10px',
                    }}
                  >
                    {skill.icon}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-highlight)' }}>
                      {skill.name}
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)' }}>
                    <span>Proficiency</span>
                    <span style={{ color: 'var(--text-highlight)' }}>{skill.proficiency}%</span>
                  </div>
                  <div
                    style={{
                      height: '6px',
                      background: 'var(--bg-tertiary)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        background: 'var(--accent-primary)',
                        borderRadius: '10px',
                        width: `${skill.proficiency}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls to the Right */}
        <div className="skills-marquee-track">
          <div className="skills-marquee-row scroll-right">
            {/* Unique list */}
            {row2.map((skill, idx) => (
              <div
                key={`r2-unique-${idx}`}
                className="glass-panel skill-card"
                style={{
                  padding: '24px',
                  border: '1.5px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  minWidth: '260px',
                  flexShrink: 0,
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = skill.color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 10px 20px -5px ${skill.color}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      color: skill.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `${skill.color}15`,
                      padding: '10px',
                      borderRadius: '10px',
                    }}
                  >
                    {skill.icon}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-highlight)' }}>
                      {skill.name}
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)' }}>
                    <span>Proficiency</span>
                    <span style={{ color: 'var(--text-highlight)' }}>{skill.proficiency}%</span>
                  </div>
                  <div
                    style={{
                      height: '6px',
                      background: 'var(--bg-tertiary)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        background: 'var(--accent-primary)',
                        borderRadius: '10px',
                        width: `${skill.proficiency}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicated list for seamless looping */}
            {row2.map((skill, idx) => (
              <div
                key={`r2-dup-${idx}`}
                className="glass-panel skill-card"
                style={{
                  padding: '24px',
                  border: '1.5px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  minWidth: '260px',
                  flexShrink: 0,
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = skill.color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 10px 20px -5px ${skill.color}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      color: skill.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `${skill.color}15`,
                      padding: '10px',
                      borderRadius: '10px',
                    }}
                  >
                    {skill.icon}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-highlight)' }}>
                      {skill.name}
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)' }}>
                    <span>Proficiency</span>
                    <span style={{ color: 'var(--text-highlight)' }}>{skill.proficiency}%</span>
                  </div>
                  <div
                    style={{
                      height: '6px',
                      background: 'var(--bg-tertiary)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        background: 'var(--accent-primary)',
                        borderRadius: '10px',
                        width: `${skill.proficiency}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styled custom animations and tracks for the marquee effect */}
      <style>{`
        .skills-marquee-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          overflow: hidden;
          padding: 10px 0;
        }
        
        .skills-marquee-track {
          display: flex;
          width: 100%;
          overflow: hidden;
        }

        .skills-marquee-row {
          display: flex;
          gap: 24px;
          width: max-content;
        }

        /* Continuous scrolling animations */
        .scroll-left {
          animation: scroll-left-kf 42s linear infinite;
        }

        .scroll-right {
          animation: scroll-right-kf 42s linear infinite;
        }

        /* Hover to pause scrolling */
        .skills-marquee-row:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-left-kf {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right-kf {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};
