import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Timeline drawing animation on scroll
    const ctx = gsap.context(() => {
      // Progress line fill animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 30%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      );

      // Fade timeline items in one by one as they enter the screen
      itemRefs.current.forEach((item) => {
        const marker = item.querySelector('.timeline-marker');
        const content = item.querySelector('.timeline-content');
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });

        tl.fromTo(
          marker,
          { scale: 0, backgroundColor: 'rgba(255,255,255,0.1)' },
          { scale: 1, backgroundColor: 'var(--accent-cyan)', duration: 0.5, ease: 'back.out(2)' }
        ).fromTo(
          content,
          { opacity: 0, x: item.classList.contains('left') ? -50 : 50 },
          { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const jobs = [
    {
      company: 'Golden Technologies',
      role: 'Full Stack Developer',
      period: 'December 2025 - Present',
      location: 'Delhi, India',
      align: 'right',
      borderColor: 'var(--accent-purple)',
      glowShadow: 'var(--shadow-neon-purple)',
      details: [
        'Built modern Next.js SaaS applications and landing platforms, leveraging TypeScript, Framer Motion, Zustand state management, and Lenis scroll smoothing.',
        'Engineered responsive interface structures and custom CMS clients managing website content, maximizing page speeds and lighthouse scores.',
        'Collaborated on developing multi-tenant SaaS applications, integrating event scheduling boards and responsive inventory frameworks.',
      ],
    },
    {
      company: 'Quvor',
      role: 'Frontend Engineer',
      period: 'June 2025 - December 2025',
      location: 'Remote, India',
      align: 'left',
      borderColor: 'var(--accent-cyan)',
      glowShadow: 'var(--shadow-neon-cyan)',
      details: [
        'Developed and optimized complex cart and wishlist flows, including dynamic product handling for both logged-in and guest users using Directus.',
        'Built responsive, modular UIs (Landing Pages, Product Listings, Plan Comparison, Modals) using Remix.run, Zustand, and Mantine UI, improving user experience across devices.',
        'Refactored business-critical logic into reusable custom hooks, implemented caching strategies, and collaborated on feature specs to align with company architecture and revenue models.',
      ],
    },
    {
      company: 'DU Buddy',
      role: 'Frontend Engineer',
      period: 'February 2025 - June 2025',
      location: 'Delhi, India',
      align: 'right',
      borderColor: 'var(--accent-purple)',
      glowShadow: 'var(--shadow-neon-purple)',
      details: [
        'Created a flexible promotional feature system with customizable discount coupons for educational courses, supporting time-limited offers that increased course purchases and user conversion rates.',
        'Integrated dynamic video components and interactive sliders on the company\'s main website, showcasing educational content and promotional offers that increased visitor engagement by 40%.',
        'Revamped the payment screen interface with enhanced visual elements and streamlined checkout flow, resulting in a 25% reduction in cart abandonment and significantly improved user satisfaction metrics.',
      ],
    },
    {
      company: 'Lean Platform Technologies',
      role: 'Frontend Engineer',
      period: 'March 2024 - January 2025',
      location: 'Delhi, India',
      align: 'left',
      borderColor: 'var(--accent-cyan)',
      glowShadow: 'var(--shadow-neon-cyan)',
      details: [
        'Built a dynamic website builder, allowing users to create multi-page websites with custom themes, dynamic routing, lead forms, and lazy loading, boosting page speed by 34%.',
        'Integrated SEO functionalities and third-party tools like Crisp, Clarity, Facebook, and LinkedIn, improving user engagement by 22%.',
        'Optimized platform performance by implementing state management techniques and using modern asset formats (WebP, AVIF), reducing loading time by 8%.',
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
        overflow: 'hidden',
      }}
      className="section"
    >
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', marginBottom: '16px' }}>
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '17px', lineHeight: 1.6 }}>
          My professional track record as a Full Stack and Frontend Engineer, building scalable, high-performance production applications.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="timeline-wrapper">
        {/* Progress Line */}
        <div className="timeline-line">
          <div ref={lineRef} className="timeline-line-progress" />
        </div>

        {/* Timeline Items */}
        {jobs.map((job, idx) => (
          <div
            key={idx}
            ref={(el) => {
              if (el) itemRefs.current[idx] = el;
            }}
            className={`timeline-item ${job.align}`}
          >
            {/* Timeline center node/dot */}
            <div className="timeline-marker" />

            {/* Timeline block details */}
            <div className="timeline-content">
              <div
                className="glass-panel"
                style={{
                  padding: '35px',
                  textAlign: 'left',
                  border: `1.5px solid ${job.borderColor}33`,
                  backgroundColor: 'var(--bg-card)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = job.borderColor;
                  e.currentTarget.style.boxShadow = job.glowShadow;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${job.borderColor}33`;
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.6)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: job.borderColor }}>
                  <Briefcase size={16} />
                  <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-mono)' }}>{job.role}</span>
                </div>
                
                <h3 style={{ fontSize: '23px', marginBottom: '14px', color: 'var(--text-highlight)', fontWeight: 800 }}>
                  {job.company}
                </h3>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '15px',
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    marginBottom: '20px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingBottom: '14px',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={14} />
                    <span>{job.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>
                </div>

                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {job.details.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

