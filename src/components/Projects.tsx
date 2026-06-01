import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, MessageSquare, ShoppingBag, Compass, Layers, Heart } from 'lucide-react';
import { GithubIcon } from './Icons';

gsap.registerPlugin(ScrollTrigger);

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);
  const projectRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const horizontalEl = horizontalRef.current;
      const containerEl = containerRef.current;

      if (!horizontalEl || !containerEl) return;

      // Desktop layout: pin section and scroll horizontally
      mm.add("(min-width: 769px)", () => {
        const scrollDistance = horizontalEl.scrollWidth - window.innerWidth + 120;
        
        gsap.to(horizontalEl, {
          x: -scrollDistance,
          ease: 'none',
          scrollTrigger: {
            trigger: containerEl,
            pin: true,
            scrub: 1,
            start: 'top 80px',
            end: () => `+=${scrollDistance}`,
            invalidateOnRefresh: true,
          },
        });

        // Animate cards fade-in when container comes into view
        gsap.fromTo(
          projectRefs.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerEl,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Mobile layout: simple vertical block list reveal
      mm.add("(max-width: 768px)", () => {
        gsap.fromTo(
          projectRefs.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerEl,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const projectList = [
    {
      title: 'Lingo',
      subtitle: 'Language Learning Platform',
      icon: <MessageSquare size={24} color="var(--accent-cyan)" />,
      desc: 'An AI-powered conversational application offering roleplays, debates, and character discussions with personalized learning plans based on goals.',
      tech: ['Next.js', 'TypeScript', 'Google OAuth', 'Gemini AI API', 'CSS Modules'],
      github: 'https://github.com/aman123k/lingo-ai-tutor',
      demo: '#',
      borderColor: 'rgba(0, 242, 254, 0.3)',
      hoverBorderColor: 'var(--accent-cyan)',
      glowShadow: 'var(--shadow-neon-cyan)',
    },
    {
      title: 'SK Jewellers CMS',
      subtitle: 'Administrative Management System',
      icon: <ShoppingBag size={24} color="var(--accent-purple)" />,
      desc: 'A cloud-based stock and retail manager for jewellery shops, featuring super admin audits, branch stock catalogs, sales logs, and customer registries.',
      tech: ['Next.js', 'React', 'Zustand Store', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/aman123k/jewellers-inventory',
      demo: '#',
      borderColor: 'rgba(189, 0, 255, 0.3)',
      hoverBorderColor: 'var(--accent-purple)',
      glowShadow: 'var(--shadow-neon-purple)',
    },
    {
      title: 'Pub Club',
      subtitle: 'Community-Driven Web Application',
      icon: <Compass size={24} color="var(--accent-neon-green)" />,
      desc: 'An interactive social guide and event dashboard built with Next.js 15, rich GSAP scroll trigger sequences, Lenis smooth scrolling, and global state management.',
      tech: ['Next.js 15', 'React 19', 'GSAP Animation', 'Lenis Scroll', 'Zustand'],
      github: 'https://github.com/aman123k/pub-club',
      demo: '#',
      borderColor: 'rgba(57, 255, 20, 0.3)',
      hoverBorderColor: 'var(--accent-neon-green)',
      glowShadow: 'var(--shadow-neon-green)',
    },
    {
      title: 'LeadFlux',
      subtitle: 'Lead Management Platform',
      icon: <Layers size={24} color="#ff007f" />,
      desc: 'A sales pipeline management dashboard featuring team boards, event calendar scheduling, visual card details editors, and contact registries.',
      tech: ['React', 'Next.js', 'React Hook Form', 'Zod Validation', 'Tailwind CSS'],
      github: 'https://github.com/aman123k/lead-management',
      demo: '#',
      borderColor: 'rgba(255, 0, 127, 0.3)',
      hoverBorderColor: 'var(--accent-pink)',
      glowShadow: '0 0 15px rgba(255, 0, 127, 0.35)',
    },
    {
      title: 'PatGear',
      subtitle: 'Pet Adoption Platform',
      icon: <Heart size={24} color="var(--accent-cyan)" />,
      desc: 'An ethical alternative platform designed to connect pets with loving homes and potential adopters. Includes filters and live chat support integration.',
      tech: ['React.js', 'Tawk.to Chat', 'CSS Modules', 'Vercel Deployment'],
      github: 'https://github.com/aman123k/pet-cares',
      demo: 'https://pet-cares.vercel.app/',
      borderColor: 'rgba(0, 242, 254, 0.3)',
      hoverBorderColor: 'var(--accent-cyan)',
      glowShadow: 'var(--shadow-neon-cyan)',
    },
  ];

  return (
    <section
      id="projects"
      ref={containerRef}
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        maxWidth: '100%',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        overflow: 'hidden',
      }}
      className="section"
    >
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', marginBottom: '16px' }}>
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '17px', lineHeight: 1.6 }}>
          A showcase of recent software projects, highlighting full stack capabilities, SaaS architectures, and interactive animations.
        </p>
      </div>

      {/* Projects Horizontal Slider Container */}
      <div style={{ overflow: 'visible', width: '100%' }}>
        <div
          ref={horizontalRef}
          className="horizontal-projects-container"
        >
          {projectList.map((project, idx) => (
            <div
              key={idx}
              ref={(el) => {
                if (el) projectRefs.current[idx] = el;
              }}
              className="project-card-wrapper"
            >
              <div
                className="glass-panel"
                style={{
                  padding: '35px',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '420px',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-card)',
                  border: `1.5px solid ${project.borderColor}`,
                  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = project.hoverBorderColor;
                  e.currentTarget.style.boxShadow = project.glowShadow;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = project.borderColor;
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.6)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {/* Background glowing circle on card hover */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${project.borderColor} 0%, transparent 70%)`,
                    pointerEvents: 'none',
                    zIndex: 0,
                    opacity: 0.5,
                  }}
                />

                <div style={{ zIndex: 1 }}>
                  {/* Header Icon + Title */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '12px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {project.icon}
                    </div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = project.hoverBorderColor)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                      >
                        <GithubIcon size={20} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = project.hoverBorderColor)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '22px', color: 'var(--text-highlight)', fontWeight: 800, marginBottom: '6px' }}>
                    {project.title}
                  </h3>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '18px' }}>
                    {project.subtitle}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                    {project.desc}
                  </p>
                </div>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', zIndex: 1 }}>
                  {project.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1.5px solid rgba(255, 255, 255, 0.06)',
                        padding: '4px 12px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

