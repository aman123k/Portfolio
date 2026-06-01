import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // GSAP Intro animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          '.hero-word',
          { yPercent: 100 },
          { yPercent: 0, duration: 1, stagger: 0.12, ease: 'power4.out' },
          '-=0.6'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          imageContainerRef.current,
          { opacity: 0, scale: 0.8, rotate: -5 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: 'back.out(1.2)' },
          '-=1.2'
        );
    }, containerRef);

    // Interactive mouse movement parallax for the avatar
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageContainerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const moveX = (clientX - innerWidth / 2) / 25;
      const moveY = (clientY - innerHeight / 2) / 25;

      gsap.to(imageContainerRef.current, {
        x: moveX,
        y: moveY,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '100px',
        position: 'relative',
        zIndex: 10,
        gap: '40px',
      }}
      className="section"
    >
      {/* Left Column: Text Info */}
      <div
        style={{
          flex: 1.2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <div
          ref={subtitleRef}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 242, 254, 0.08)',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            padding: '6px 16px',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--accent-cyan)',
            marginBottom: '20px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-cyan)',
              display: 'inline-block',
              animation: 'pulse-glow 1.5s infinite',
            }}
          />
          Full Stack Developer
        </div>

        <h1
          ref={titleRef}
          style={{
            fontSize: 'clamp(40px, 6vw, 76px)',
            fontFamily: 'var(--font-heading)',
            lineHeight: 1.15,
            marginBottom: '24px',
            fontWeight: 800,
            letterSpacing: '-2px',
          }}
        >
          <span style={{ overflow: 'hidden', display: 'block' }}>
            <span className="hero-word" style={{ display: 'inline-block' }}>Hi, I am</span>
          </span>
          <span style={{ overflow: 'hidden', display: 'block' }}>
            <span className="hero-word text-gradient" style={{ display: 'inline-block' }}>Sudeesh Kumar</span>
          </span>
        </h1>

        <p
          ref={descRef}
          style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            maxWidth: '540px',
            marginBottom: '40px',
          }}
        >
          I am a Full Stack Developer with over 2 years of experience building modern web and mobile applications. Specializing in React, Next.js, React Native, TypeScript, Node.js, and MongoDB, I develop scalable, high-performance solutions.
        </p>

        {/* CTA buttons */}
        <div
          ref={ctaRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            width: '100%',
          }}
        >
          <a
            href="#projects"
            className="magnetic"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--accent-gradient)',
              color: '#000',
              fontWeight: 700,
              padding: '14px 28px',
              borderRadius: '10px',
              boxShadow: '0 4px 20px rgba(0, 242, 254, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 242, 254, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 242, 254, 0.3)';
            }}
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="/resume.pdf"
            download="Sudeesh_Kumar_Resume.pdf"
            className="magnetic"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-highlight)',
              fontWeight: 600,
              padding: '14px 28px',
              borderRadius: '10px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
          >
            Download Resume <Download size={18} />
          </a>
        </div>
      </div>

      {/* Right Column: Profile Image */}
      <div
        style={{
          flex: 0.9,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          ref={imageContainerRef}
          style={{
            position: 'relative',
            width: 'min(360px, 85vw)',
            height: 'min(460px, 110vw)',
          }}
        >
          {/* Decorative glowing gradient frame */}
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              right: '-10px',
              bottom: '-10px',
              background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-indigo) 100%)',
              borderRadius: '24px',
              opacity: 0.25,
              filter: 'blur(8px)',
              zIndex: 0,
            }}
          />

          {/* Actual Avatar Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1.5px solid var(--border-color)',
              boxShadow: 'var(--shadow-soft)',
              zIndex: 2,
            }}
          >
            <img
              src="/avatar.jpg"
              alt="Sudeesh Kumar Portfolio Illustration"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          #home {
            flex-direction: column-reverse;
            text-align: center;
            justify-content: center;
            padding-top: 140px;
            gap: 50px;
          }
          #home > div {
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
};
