import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Cpu, Terminal, Award, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade timeline items in one by one
      itemRefs.current.forEach((item) => {
        const marker = item.querySelector('.timeline-marker');
        const content = item.querySelector('.timeline-content');
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        tl.fromTo(
          marker,
          { scale: 0 },
          { scale: 1, duration: 0.5, ease: 'back.out(2)' }
        ).fromTo(
          content,
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const jobs = [
    {
      company: 'The Gold Technologies',
      role: 'Full Stack Engineer',
      period: 'Feb 2026 - Present',
      location: 'Delhi, India',
      borderColor: '#a855f7', // purple
      glowShadow: '0 0 20px rgba(168, 85, 247, 0.45)',
      icon: <Cpu size={16} />,
      details: [
        'Developed a multi-tenant Inventory Management SaaS platform with RBAC, super admin controls, subscription management, trial onboarding, and billing automation.',
        'Developed real-time features including live Chat Support, Announcement broadcasting, and a System Log tracking user admin actions using Socket.io.',
        'Built Email Campaign management with Markdown processing, React Query, template image upload, automated scheduling, and Google OAuth integration.',
        'Built and delivered CMS-driven websites (TGT, Seven Stars, Ownix, ARCOS, Encotech) with Cloudinary image management, SEO optimization, and live Instagram feed integration using Meta Graph & Instagram APIs in Next.js.',
      ],
    },
    {
      company: 'Quvor',
      role: 'Frontend Engineer',
      period: 'Jun 2025 - Dec 2025',
      location: 'Delhi, India',
      borderColor: '#06b6d4', // cyan
      glowShadow: '0 0 20px rgba(6, 182, 212, 0.45)',
      icon: <Terminal size={16} />,
      details: [
        'Developed complex cart and wishlist flows, including dynamic product handling for both logged-in and guest users using Directus.',
        'Built responsive, modular UIs (Landing Pages, Product Listings, Plan Comparison, Modals) using Remix.run, Zustand, and Mantine UI, improving user experience across devices.',
        'Optimized client-side performance and page load times by implementing lazy loading, component memoization, and bundle size reduction techniques in Remix.run.',
        'Collaborated with product designers to implement a custom utility-first token-based styling framework, standardizing spacing, fonts, and dark mode transitions.',
      ],
    },
    {
      company: 'DU Buddy',
      role: 'Frontend Engineer',
      period: 'Feb 2025 - Jun 2025',
      location: 'Delhi, India',
      borderColor: '#eab308', // gold/yellow
      glowShadow: '0 0 20px rgba(234, 179, 8, 0.45)',
      icon: <Award size={16} />,
      details: [
        'Created a flexible promotional feature system with customizable discount coupons for educational courses, supporting time-limited offers that increased course purchases and user conversion rates.',
        'Integrated dynamic video components and interactive sliders on the company\'s main website, showcasing educational content and promotional offers that increased visitor engagement by 40%.',
        'Streamlined user checkout flows and integrated third-party payment gateways, resolving transition layout issues and decreasing transaction drop-off rate by 18%.',
        'Refactored the core state architecture to utilize Context API and custom React hooks, reducing component coupling and improving codebase maintainability.',
      ],
    },
    {
      company: 'Lean Platform Technologies',
      role: 'Frontend Engineer',
      period: 'Mar 2024 - Jan 2025',
      location: 'Delhi, India',
      borderColor: '#3b82f6', // blue
      glowShadow: '0 0 20px rgba(59, 130, 246, 0.45)',
      icon: <Sparkles size={16} />,
      details: [
        'Built a dynamic website builder, allowing users to create multi-page websites with custom themes, dynamic routing, lead forms, and lazy loading, boosting page speed by 34%.',
        'Integrated SEO functionalities and third-party tools like Crisp, Clarity, Facebook, and LinkedIn, improving user engagement by 22%.',
        'Developed custom form builders with schema validation using Zod and React Hook Form, enabling non-technical clients to design lead-generation forms with zero code.',
        'Collaborated with backend engineers to consume REST APIs dynamically, maintaining absolute type safety with TypeScript across front-end models and API clients.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
      className="section"
    >
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', marginBottom: '16px' }}>
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '17px', lineHeight: 1.6 }}>
          My professional track record as a Full Stack and Frontend Engineer, building scalable, high-performance production applications.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="experience-layout">
        {/* Left Column: Timeline */}
        <div className="timeline-wrapper">
          {/* Timeline Items */}
          {jobs.map((job, idx) => (
            <div
              key={idx}
              ref={(el) => {
                if (el) itemRefs.current[idx] = el;
              }}
              className="timeline-item"
            >
              {/* Glowing Timeline Marker with Custom Icon */}
              <div
                className="timeline-marker"
                style={{
                  border: `2px solid ${job.borderColor}`,
                  boxShadow: job.glowShadow,
                  color: job.borderColor,
                }}
              >
                {job.icon}
              </div>

              {/* Timeline Card */}
              <div className="timeline-content">
                <div
                  className="glass-panel"
                  style={{
                    padding: '30px',
                    textAlign: 'left',
                    border: `1.5px solid ${job.borderColor}25`,
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: '16px',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = job.borderColor;
                    e.currentTarget.style.boxShadow = job.glowShadow;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${job.borderColor}25`;
                    e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: job.borderColor }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-mono)' }}>
                      {job.role}
                    </span>
                  </div>
                  
                  <h3 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--text-highlight)', fontWeight: 800 }}>
                    {job.company}
                  </h3>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      marginBottom: '16px',
                      borderBottom: '1px solid var(--border-color)',
                      paddingBottom: '12px',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} />
                      <span>{job.period}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px', margin: 0 }}>
                    {job.details.map((bullet, bIdx) => (
                      <li key={bIdx} style={{ fontSize: '14.5px', color: 'var(--text-main)', lineHeight: 1.6 }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Sticky Sidebar with 3D Avatar and Stats */}
        <div className="experience-sidebar">
          {/* Avatar Container with Radial Glow */}
          <div className="sidebar-avatar-frame glass-panel">
            <div className="sidebar-avatar-glow" />
            <img
              src="/hero_avatar_man.png"
              alt="Sudeesh Kumar - Developer 3D Avatar"
              className="sidebar-avatar-img"
            />
          </div>

          {/* Stats Card */}
          <div className="sidebar-stats-card glass-panel">
            <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '14px', color: 'var(--text-highlight)' }}>
              Core Qualifications
            </h4>
            <div className="sidebar-stats-list">
              <div className="sidebar-stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
              <div className="sidebar-stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Tech Companies</span>
              </div>
              <div className="sidebar-stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '16px', borderTop: '1px solid var(--border-color)', paddingTop: '14px', textAlign: 'left' }}>
              Specialized in engineering full-stack products with rich visuals, interactive animations, and optimized load times.
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Responsive Styles */}
      <style>{`
        .experience-layout {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr;
          gap: 48px;
          margin-top: 20px;
        }

        .timeline-wrapper {
          position: relative;
          padding-left: 20px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 48px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: 17px;
          top: 36px;
          transform: translate(-50%, -50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .timeline-content {
          padding-left: 48px;
        }

        .experience-sidebar {
          position: sticky;
          top: 110px;
          align-self: start;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .sidebar-avatar-frame {
          position: relative;
          width: 100%;
          height: 290px;
          background: var(--bg-secondary);
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-radius: 20px;
        }

        .sidebar-avatar-glow {
          position: absolute;
          width: 130%;
          height: 130%;
          background: radial-gradient(circle, var(--accent-light) 0%, transparent 65%);
          z-index: 1;
          animation: float-pulse 6s ease-in-out infinite alternate;
        }

        .sidebar-avatar-img {
          width: 75%;
          height: auto;
          object-fit: contain;
          z-index: 2;
          animation: float-avatar 5s ease-in-out infinite;
        }

        .sidebar-stats-card {
          padding: 28px;
          background: var(--bg-secondary);
          border-radius: 20px;
          text-align: left;
        }

        .sidebar-stats-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .sidebar-stat-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 900;
          color: var(--accent-primary);
          min-width: 50px;
        }

        .stat-label {
          font-size: 14px;
          color: var(--text-main);
          font-weight: 500;
        }

        @keyframes float-avatar {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }

        @keyframes float-pulse {
          0% { transform: scale(0.9); opacity: 0.7; }
          100% { transform: scale(1.1); opacity: 0.9; }
        }

        @media (max-width: 968px) {
          .experience-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .experience-sidebar {
            position: static !important;
            order: -1;
            align-items: center;
          }
          .sidebar-avatar-frame {
            height: 280px !important;
            max-width: 320px;
          }
          .sidebar-stats-card {
            width: 100%;
            max-width: 480px;
          }
        }
      `}</style>
    </section>
  );
};
