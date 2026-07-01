import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SkillItem {
  name: string;
  proficiency: number;
  color: string;
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fillRefs = useRef<HTMLDivElement[]>([]);

  const skillsList: SkillItem[] = [
    {
      name: 'Laravel',
      proficiency: 90,
      color: '#ff2d20',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M22 6.556v10.888C22 19.387 20.354 21 18.326 21H5.674C3.646 21 2 19.387 2 17.444V6.556C2 4.613 3.646 3 5.674 3h12.652C20.354 3 22 4.613 22 6.556zm-11.83 5.485v2.859H8.487v-2.859H7.135v-1.127h4.084v1.127H10.17zm3.87 2.859H12.75V9.458h1.289zm5.275-2.859h-2.146V9.458H14.12v5.427h1.258v-1.428h2.146v1.428h1.26v-5.427h-1.26z" />
        </svg>
      ),
    },
    {
      name: 'Framer Motion',
      proficiency: 85,
      color: '#bc00dd',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M0 0h12v12H0V0zm12 12h12v12H12V12zm0-12l12 12H12V0zM0 12h12v12L0 12z" />
        </svg>
      ),
    },
    {
      name: 'Vue.js',
      proficiency: 80,
      color: '#41b883',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M24,1.61H17.89L12,11.81,6.11,1.61H0L12,22.39Z" fill="#41b883" />
          <path d="M17.89,1.61H13.68L12,4.52,10.32,1.61H6.11L12,11.81Z" fill="#35495e" />
        </svg>
      ),
    },
    {
      name: 'React.js',
      proficiency: 95,
      color: '#61dafb',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30, 12, 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90, 12, 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150, 12, 12)" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      proficiency: 92,
      color: '#38bdf8',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 6.036c-2.286 0-3.428 1.143-3.428 3.428 0 2.286 1.142 3.429 3.428 3.429h2.286c1.143 0 1.714.571 1.714 1.714 0 1.143-.571 1.715-1.714 1.715H9.714c-1.143 0-1.714-.572-1.714-1.715h-2.286c0 2.286 1.143 3.429 3.429 3.429 2.285 0 3.428-1.143 3.428-3.429 0-2.286-1.143-3.428-3.428-3.428H10.286c-1.143 0-1.715-.572-1.715-1.715 0-1.143.572-1.714 1.715-1.714h4.571c1.143 0 1.715.572 1.715 1.714h2.286c0-2.285-1.143-3.428-3.429-3.428H12z" />
        </svg>
      ),
    },
    {
      name: 'Firebase.js',
      proficiency: 82,
      color: '#f5820d',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M3.89 15.672L6.152 1.25c.08-.513.73-.687 1.055-.282l2.677 3.328 1.93-3.692c.245-.468.932-.437 1.134.05L20.21 15.67 12.564 20c-.352.2-.777.2-1.128 0l-7.545-4.328z" />
        </svg>
      ),
    },
    {
      name: 'Python',
      proficiency: 75,
      color: '#3776ab',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2c5.522 0 10 4.477 10 10s-4.478 10-10 10-10-4.477-10-10 4.478-10 10-10zm2 6H9c-.552 0-1 .448-1 1v1h2V9h4v2H9c-.552 0-1 .448-1 1v3c0 .552.448 1 1 1h5c.552 0 1-.448 1-1v-1h-2v1h-4v-2h5c.552 0 1-.448 1-1V9c0-.552-.448-1-1-1z" />
        </svg>
      ),
    },
    {
      name: 'Vite',
      proficiency: 88,
      color: '#bd34fe',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M19.89 2.5a.5.5 0 00-.775-.155L3.89 14.544a.5.5 0 00.387.848H12l-1.89 6.108a.5.5 0 00.775.155L20.11 9.456a.5.5 0 00-.387-.848H12z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // GSAP ScrollTrigger to animate progress fills
    const ctx = gsap.context(() => {
      fillRefs.current.forEach((fillEl, idx) => {
        if (!fillEl) return;
        const targetPercent = skillsList[idx].proficiency;
        
        gsap.fromTo(
          fillEl,
          { transform: 'scaleX(0)' },
          {
            transform: `scaleX(${targetPercent / 100})`,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
      className="section"
    >
      {/* Title Centered */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <h2
          style={{
            fontSize: 'clamp(32px, 4.5vw, 42px)',
            fontWeight: 900,
            marginBottom: '14px',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-1px',
          }}
        >
          My <span className="text-gradient">Skills</span>
        </h2>
        <p
          style={{
            color: 'var(--text-main)',
            maxWidth: '560px',
            margin: '0 auto',
            fontSize: '16px',
            lineHeight: 1.6,
            opacity: 0.85,
          }}
        >
          Technologies and tools I work with to create amazing web experiences.
        </p>
      </div>

      {/* Grid List matching mockup */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '24px',
        }}
        className="skills-grid"
      >
        {skillsList.map((skill, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              padding: '24px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '145px',
              border: '1.5px solid var(--border-color)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Tech Icon + Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div
                style={{
                  background: `${skill.color}15`, // Alpha transparency
                  color: skill.color,
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {skill.icon}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-highlight)' }}>
                {skill.name}
              </h3>
            </div>

            {/* Proficiency progress bar */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Proficiency
                </span>
                <span style={{ fontSize: '12px', fontWeight: 900, color: skill.color }}>
                  {skill.proficiency}%
                </span>
              </div>
              
              {/* Progress bar container */}
              <div className="skill-progress-bar">
                <div
                  ref={(el) => {
                    if (el) fillRefs.current[idx] = el;
                  }}
                  className="skill-progress-fill"
                  style={{
                    backgroundColor: skill.color,
                    backgroundImage: 'none', // Override gradient to match colored progress
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
