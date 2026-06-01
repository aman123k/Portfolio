import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Zap, ShoppingCart, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardRefs.current;
    
    // Animate stats cards on scroll
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
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

  const stats = [
    {
      icon: <Award size={28} color="var(--accent-primary)" />,
      value: '2+ Years',
      label: 'Professional Experience',
      desc: 'Developing scalable web apps using React, Next.js, and TypeScript.',
    },
    {
      icon: <Zap size={28} color="var(--accent-primary)" />,
      value: '34% Boost',
      label: 'Performance Speed',
      desc: 'Implemented dynamic routing, caching, and lazy loading.',
    },
    {
      icon: <ShoppingCart size={28} color="var(--accent-primary)" />,
      value: '25% Reduction',
      label: 'Cart Abandonment',
      desc: 'Revamped checkout screens and product loading components.',
    },
    {
      icon: <ShieldCheck size={28} color="var(--accent-primary)" />,
      value: '40% Reach',
      label: 'User Engagement Boost',
      desc: 'Built custom sliders, video libraries, and promo managers.',
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
      }}
      className="section"
    >
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', marginBottom: '12px' }}>
          About <span className="text-gradient">Myself</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto', fontSize: '16px' }}>
          A brief overview of my professional focus and accomplishments.
        </p>
      </div>

      {/* Intro Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1.8fr',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '50px',
        }}
        className="about-grid-content"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '22px', lineHeight: 1.3, fontWeight: 800 }}>
            Clean Code Meets <br />
            <span style={{ color: 'var(--accent-primary)' }}>Full Stack Architecture</span>
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '8px' }}>
            I am a Full Stack Developer with over 2 years of experience building modern web and mobile applications. My expertise includes React.js, Next.js, React Native, TypeScript, Node.js, and MongoDB, enabling me to develop scalable, high-performance solutions across multiple platforms.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6 }}>
            Currently, I work at Golden Technologies, where I contribute to the development of SaaS products, CRM systems, CMS platforms, and lead management applications. Throughout my career, I have focused on creating intuitive user experiences, optimizing application performance, and delivering reliable, maintainable code.
          </p>
        </div>
        <div
          className="glass-panel"
          style={{
            padding: '30px',
            textAlign: 'left',
          }}
        >
          <h4 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--text-highlight)', fontWeight: 800 }}>
            Passion & Vision
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>
            I am passionate about solving real-world problems through technology, continuously learning new tools and frameworks, and building products that create meaningful value for users and businesses alike.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(0, 229, 255, 0.05)', padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: 'var(--accent-primary)' }}>React Native</span>
            <span style={{ background: 'rgba(0, 229, 255, 0.05)', padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: 'var(--accent-primary)' }}>Node.js</span>
            <span style={{ background: 'rgba(0, 229, 255, 0.05)', padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: 'var(--accent-primary)' }}>MongoDB</span>
            <span style={{ background: 'rgba(0, 229, 255, 0.05)', padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: 'var(--accent-primary)' }}>Next.js</span>
          </div>
        </div>
      </div>

      {/* Accomplishments Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
        }}
      >
        {stats.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => {
              if (el) cardRefs.current[idx] = el;
            }}
            className="glass-panel"
            style={{
              padding: '24px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '240px',
            }}
          >
            <div>
              <div style={{ marginBottom: '16px' }}>{item.icon}</div>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  marginBottom: '4px',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {item.value}
              </h3>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-highlight)', marginBottom: '8px' }}>
                {item.label}
              </h4>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.5 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 850px) {
          .about-grid-content {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};
