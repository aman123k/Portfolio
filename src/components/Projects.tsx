import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  desc: string;
  tech: string[];
  github: string;
  demo: string;
  gradient: string; // Dynamic visual block gradient
  mockType: 'chat' | 'inventory' | 'events' | 'pipeline' | 'pets';
}

export const Projects: React.FC = () => {
  const projectList: Project[] = [
    {
      title: 'Lingo AI Tutor',
      subtitle: 'Language Learning Platform',
      desc: 'An AI-powered conversational application offering roleplays, debates, and character discussions with personalized learning plans based on goals.',
      tech: ['Next.js', 'TypeScript', 'Gemini AI', 'OAuth'],
      github: 'https://github.com/aman123k/lingo-ai-tutor',
      demo: 'https://github.com/aman123k/lingo-ai-tutor',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      mockType: 'chat',
    },
    {
      title: 'SK Jewellers CMS',
      subtitle: 'Administrative Stock System',
      desc: 'A cloud-based stock and retail manager for jewellery shops, featuring super admin audits, branch stock catalogs, sales logs, and customer registries.',
      tech: ['Next.js', 'React', 'Zustand', 'Tailwind'],
      github: 'https://github.com/aman123k/jewellers-inventory',
      demo: 'https://github.com/aman123k/jewellers-inventory',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #5b21b6 100%)',
      mockType: 'inventory',
    },
    {
      title: 'Pub Club Dashboard',
      subtitle: 'Community-Driven Portal',
      desc: 'An interactive social guide and event dashboard built with Next.js 15, rich GSAP scroll trigger sequences, Lenis smooth scrolling, and global state management.',
      tech: ['Next.js 15', 'GSAP', 'Lenis', 'Zustand'],
      github: 'https://github.com/aman123k/pub-club',
      demo: 'https://github.com/aman123k/pub-club',
      gradient: 'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
      mockType: 'events',
    },
    {
      title: 'LeadFlux Manager',
      subtitle: 'Lead Management Platform',
      desc: 'A sales pipeline management dashboard featuring team boards, event calendar scheduling, visual card details editors, and contact registries.',
      tech: ['React', 'Next.js', 'Hook Form', 'Zod'],
      github: 'https://github.com/aman123k/lead-management',
      demo: 'https://github.com/aman123k/lead-management',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
      mockType: 'pipeline',
    },
    {
      title: 'PatGear Portal',
      subtitle: 'Pet Adoption Platform',
      desc: 'An ethical alternative platform designed to connect pets with loving homes and potential adopters. Includes filters and live chat support integration.',
      tech: ['React.js', 'Tawk.to', 'CSS Modules', 'Vercel'],
      github: 'https://github.com/aman123k/pet-cares',
      demo: 'https://pet-cares.vercel.app/',
      gradient: 'linear-gradient(135deg, #ff7a00 0%, #c2410c 100%)',
      mockType: 'pets',
    },
  ];

  // Helper to render high-fidelity premium visual mockup headers inside cards
  const renderMockup = (project: Project) => {
    return (
      <div
        style={{
          width: '100%',
          height: '160px',
          background: project.gradient,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          padding: '12px',
        }}
      >
        {/* IDE/Browser header dots */}
        <div style={{ display: 'flex', gap: '5px', marginBottom: '8px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
        </div>

        {/* Mock Application Interface UI components */}
        {project.mockType === 'chat' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', height: '100%', justifyContent: 'center' }}>
            <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.2)', padding: '5px 10px', borderRadius: '8px 8px 8px 0', fontSize: '9px', color: '#fff', maxWidth: '80%' }}>
              Hi, how do I speak French?
            </div>
            <div style={{ alignSelf: 'flex-end', background: 'rgba(255,255,255,0.15)', padding: '5px 10px', borderRadius: '8px 8px 0 8px', fontSize: '9px', color: '#fff', maxWidth: '80%' }}>
              Bonjour! Let's start with greetings...
            </div>
          </div>
        )}

        {project.mockType === 'inventory' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', height: '100%', alignItems: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', height: '70px', borderRadius: '6px', padding: '6px' }}>
              <div style={{ width: '50%', height: '5px', background: '#fff', borderRadius: '2px', marginBottom: '8px' }} />
              <div style={{ width: '80%', height: '14px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }} />
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', height: '70px', borderRadius: '6px', padding: '6px' }}>
              <div style={{ width: '40%', height: '5px', background: '#fff', borderRadius: '2px', marginBottom: '8px' }} />
              <div style={{ width: '70%', height: '14px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }} />
            </div>
          </div>
        )}

        {project.mockType === 'events' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center', height: '100%' }}>
            <div style={{ height: '30px', background: 'rgba(255,255,255,0.18)', borderRadius: '6px', display: 'flex', alignItems: 'center', padding: '0 8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fff', marginRight: '8px' }} />
              <div style={{ width: '40%', height: '6px', background: '#fff', borderRadius: '2px' }} />
            </div>
            <div style={{ height: '30px', background: 'rgba(255,255,255,0.18)', borderRadius: '6px', display: 'flex', alignItems: 'center', padding: '0 8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fff', marginRight: '8px' }} />
              <div style={{ width: '50%', height: '6px', background: '#fff', borderRadius: '2px' }} />
            </div>
          </div>
        )}

        {project.mockType === 'pipeline' && (
          <div style={{ display: 'flex', gap: '6px', height: '100%', alignItems: 'center' }}>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.12)', height: '80px', borderRadius: '6px', padding: '4px' }}>
              <div style={{ width: '100%', height: '16px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px', marginBottom: '4px' }} />
              <div style={{ width: '80%', height: '16px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }} />
            </div>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.12)', height: '80px', borderRadius: '6px', padding: '4px' }}>
              <div style={{ width: '90%', height: '16px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px', marginBottom: '4px' }} />
              <div style={{ width: '70%', height: '16px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }} />
            </div>
          </div>
        )}

        {project.mockType === 'pets' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', height: '100%', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>🐶</div>
              <div>
                <div style={{ width: '50px', height: '6px', background: '#fff', borderRadius: '2px', marginBottom: '4px' }} />
                <div style={{ width: '70px', height: '5px', background: 'rgba(255,255,255,0.6)', borderRadius: '2px' }} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      id="projects"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
      className="section"
    >
      {/* Title */}
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
          My <span className="text-gradient">Projects</span>
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
          A showcase of my recent work. Featuring scalable backends, interactive frontends, and dynamic dashboards.
        </p>
      </div>

      {/* Projects Grid Container matching mockup */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
          gap: '30px',
          marginBottom: '50px',
        }}
        className="projects-grid"
      >
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1.5px solid var(--border-color)',
              height: '100%',
            }}
          >
            {/* Visual Header Mockup */}
            {renderMockup(project)}

            {/* Content Container */}
            <div
              style={{
                padding: '24px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: 800,
                    color: 'var(--text-highlight)',
                    marginBottom: '4px',
                  }}
                >
                  {project.title}
                </h3>
                <h4
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {project.subtitle}
                </h4>
                <p
                  style={{
                    color: 'var(--text-main)',
                    fontSize: '13.5px',
                    lineHeight: 1.5,
                    marginBottom: '20px',
                    opacity: 0.9,
                  }}
                >
                  {project.desc}
                </p>

                {/* Tech Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '24px',
                  }}
                >
                  {project.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        background: 'var(--bg-tertiary)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    background: 'var(--bg-secondary)',
                    border: '1.5px solid var(--accent-primary)',
                    borderRadius: '100px',
                    padding: '8px 16px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--accent-light)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-secondary)';
                  }}
                >
                  <Code2 size={14} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    background: 'var(--accent-gradient)',
                    borderRadius: '100px',
                    padding: '8px 16px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#ffffff',
                    boxShadow: 'var(--shadow-accent)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 6px 12px rgba(255, 122, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'var(--shadow-accent)';
                  }}
                >
                  <ExternalLink size={14} /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a
          href="https://github.com/aman123k"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'var(--accent-gradient)',
            color: '#ffffff',
            fontWeight: 700,
            padding: '14px 32px',
            borderRadius: '100px',
            fontSize: '15px',
            boxShadow: 'var(--shadow-accent)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(255, 122, 0, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = 'var(--shadow-accent)';
          }}
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};
