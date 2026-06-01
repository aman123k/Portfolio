import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, LayoutGrid, Terminal, Cpu, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardRefs.current;
    
    const ctx = gsap.context(() => {
      // Animate grids in on scroll with a stagger
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 size={24} color="var(--accent-primary)" />,
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Web Technologies',
      icon: <Cpu size={24} color="var(--accent-primary)" />,
      skills: ['React.js', 'Next.js', 'Remix.run', 'REST API', 'Node.js', 'Express.js'],
    },
    {
      title: 'Databases & ORM',
      icon: <Database size={24} color="var(--accent-primary)" />,
      skills: ['SQL DB (PostgreSQL / MySQL)', 'MongoDB', 'Prisma ORM', 'Mongoose', 'Directus CMS'],
    },
    {
      title: 'State Management',
      icon: <LayoutGrid size={24} color="var(--accent-primary)" />,
      skills: ['Zustand', 'Context API', 'Custom Hooks'],
    },
    {
      title: 'AI & Large Language Models',
      icon: <Sparkles size={24} color="var(--accent-primary)" />,
      skills: ['LangChain', 'Gemini & OpenAI APIs', 'Vector Stores'],
    },
    {
      title: 'Tools & Workflows',
      icon: <Terminal size={24} color="var(--accent-primary)" />,
      skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Figma', 'Framer Motion', 'Mantine UI'],
    },
  ];

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
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', marginBottom: '16px' }}>
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '16px', lineHeight: 1.6 }}>
          My development ecosystem. Featuring modern frontend libraries, backend databases, AI frameworks, and project deployment tools.
        </p>
      </div>

      {/* Grid container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            ref={(el) => {
              if (el) cardRefs.current[idx] = el;
            }}
            className="glass-panel"
            style={{
              padding: '30px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              height: '100%',
              backgroundColor: 'var(--bg-card)',
              border: '1.5px solid var(--border-color)',
              transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color-hover)';
              e.currentTarget.style.boxShadow = 'var(--shadow-neon)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.boxShadow = '0 4px 20px 0 rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            {/* Header category */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '20px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                paddingBottom: '12px',
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  padding: '8px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {category.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-highlight)' }}>
                {category.title}
              </h3>
            </div>

            {/* Chips skills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
              }}
            >
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.01)',
                    border: '1.5px solid rgba(255, 255, 255, 0.05)',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    color: 'var(--text-main)',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.25s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.color = 'var(--text-highlight)';
                    const indicator = e.currentTarget.querySelector('.skill-indicator') as HTMLElement;
                    if (indicator) {
                      indicator.style.boxShadow = '0 0 8px var(--accent-primary)';
                      indicator.style.transform = 'scale(1.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.color = 'var(--text-main)';
                    const indicator = e.currentTarget.querySelector('.skill-indicator') as HTMLElement;
                    if (indicator) {
                      indicator.style.boxShadow = 'none';
                      indicator.style.transform = 'none';
                    }
                  }}
                >
                  <span
                    className="skill-indicator"
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-primary)',
                      display: 'inline-block',
                      transition: 'all 0.2s ease',
                    }}
                  />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

