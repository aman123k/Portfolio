import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".about-avatar-container",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      ).fromTo(
        ["h2", "p", ".about-stats-row", "a"],
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=0.5",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      value: "5+",
      label: "Education",
      desc: "Certifications & Degrees",
    },
    {
      value: "2+ Years",
      label: "Experience",
      desc: "Full Stack Development",
    },
    {
      value: "10+",
      label: "Projects Completed",
      desc: "Production Applications",
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
      className="section"
    >
      {/* Redesigned grid container matching mockup */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "60px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left Column: 3D Male About Avatar with floating badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "min(440px, 100vw)",
            width: "100%",
            position: "relative",
          }}
          className="about-avatar-container"
        >
          {/* Main 3D Avatar Image */}
          <img
            src="/about_avatar_man.png"
            alt="Sudeesh Kumar - About 3D Avatar"
            style={{
              width: "90%",
              height: "auto",
              objectFit: "contain",
              zIndex: 2,
            }}
          />

          {/* Floating Badge: React */}
          <div
            className="floating-badge react-badge-about"
            style={{
              position: "absolute",
              top: "15%",
              left: "5%",
              background: "#e0f2fe",
              color: "#0284c7",
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 15px rgba(2, 132, 199, 0.15)",
              zIndex: 3,
              border: "2px solid #ffffff",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <ellipse
                cx="12"
                cy="12"
                rx="10"
                ry="3.8"
                transform="rotate(30 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="10"
                ry="3.8"
                transform="rotate(90 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="10"
                ry="3.8"
                transform="rotate(150 12 12)"
              />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
          </div>

          {/* Floating Badge: JS */}
          <div
            className="floating-badge js-badge-about"
            style={{
              position: "absolute",
              top: "40%",
              right: "2%",
              background: "#fef9c3",
              color: "#a16207",
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "13px",
              boxShadow: "0 10px 15px rgba(234, 179, 8, 0.2)",
              zIndex: 3,
              border: "2px solid #ffffff",
            }}
          >
            JS
          </div>
        </div>

        {/* Right Column: Title, Description, Stats & Button */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 4.5vw, 44px)",
              fontWeight: 900,
              fontFamily: "var(--font-heading)",
              marginBottom: "20px",
              letterSpacing: "-1px",
            }}
          >
            About <span className="text-gradient">Me</span>
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "var(--text-main)",
              lineHeight: 1.7,
              marginBottom: "20px",
              opacity: 0.95,
            }}
          >
            I am a Full Stack Engineer with over 2 years of experience building
            scalable SaaS applications, CMS platforms, e-commerce solutions, and
            real-time systems. Currently working at The Gold Technologies, where
            I build high-performance modern web architectures using React,
            Next.js, Remix, Node.js, and TypeScript.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "var(--text-main)",
              lineHeight: 1.7,
              marginBottom: "32px",
              opacity: 0.95,
            }}
          >
            I care deeply about clean code, fast page loads, and interfaces that
            feel alive. Whether it's a GSAP animation, a complex form wizard, or
            a real-time socket feature, I approach every problem the same way —
            ship it well or don't ship it.
          </p>

          {/* Stats Row */}
          <div
            style={{
              display: "flex",
              gap: "30px",
              width: "100%",
              marginBottom: "36px",
              flexWrap: "wrap",
            }}
            className="about-stats-row"
          >
            {stats.map((stat, idx) => (
              <div key={idx} style={{ flex: "1 1 120px" }}>
                <h3
                  style={{
                    fontSize: "clamp(28px, 4vw, 36px)",
                    fontWeight: 900,
                    color: "var(--accent-primary)",
                    marginBottom: "4px",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {stat.value}
                </h3>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--text-highlight)",
                    marginBottom: "2px",
                  }}
                >
                  {stat.label}
                </h4>
                <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Learn More Action Button */}
          <a
            href="#skills"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--bg-secondary)",
              border: "1.5px solid var(--accent-primary)",
              color: "var(--accent-primary)",
              fontWeight: 700,
              padding: "12px 24px",
              borderRadius: "100px",
              fontSize: "14px",
              boxShadow: "var(--shadow-soft)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-light)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--bg-secondary)";
              e.currentTarget.style.transform = "none";
            }}
          >
            Learn More <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Floating animations for about section */}
      <style>{`
        @keyframes float-badge-up-about {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        @keyframes float-badge-down-about {
          0% { transform: translateY(0); }
          50% { transform: translateY(6px); }
          100% { transform: translateY(0); }
        }
        .react-badge-about {
          animation: float-badge-up-about 4.5s ease-in-out infinite;
        }
        .js-badge-about {
          animation: float-badge-down-about 4s ease-in-out 0.5s infinite;
        }

        @media (max-width: 850px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-grid > div {
            align-items: center !important;
            text-align: center !important;
          }
          .about-avatar-container {
            height: 340px !important;
          }
          .about-stats-row {
            justify-content: center !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};
