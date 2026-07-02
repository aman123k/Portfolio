import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  subtitle: string;
  desc: string;
  tech: string[];
  github: string;
  demo: string;
  image: string; // Homepage screenshot path
  category: "personal" | "company";
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "personal" | "company">("all");
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Stagger fade-in when filter changes
    gsap.fromTo(
      '.project-card-container',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
    );
  }, [filter]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });

      tl.fromTo(
        ['h2', 'p', 'button'],
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
      )
      .fromTo(
        '.projects-grid',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const projectList: Project[] = [
    {
      title: "Lingo AI Tutor",
      subtitle: "Personal Project",
      desc: "An AI-powered conversational application offering roleplays, debates, and character discussions with personalized learning plans based on goals.",
      tech: ["Next.js", "TypeScript", "Gemini AI", "Tailwind"],
      github: "https://github.com/aman123k/Lingo",
      demo: "https://lingo-six-roan.vercel.app/",
      image: "/lingo.png",
      category: "personal",
    },
    {
      title: "Pet Cares Portal",
      subtitle: "Personal Project",
      desc: "An ethical alternative platform designed to connect pets with loving homes and potential adopters. Includes filters and live chat support integration.",
      tech: ["React.js", "Tawk.to", "CSS Modules", "Vercel"],
      github: "https://github.com/aman123k/petCares",
      demo: "https://pet-cares.vercel.app/",
      image: "/petcares.png",
      category: "personal",
    },
    {
      title: "Bills Splitter",
      subtitle: "Personal Project",
      desc: "A convenient utility app designed to easily divide bills and track group expenses with real-time balance calculations.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      github: "https://github.com/aman123k",
      demo: "https://bills-splitter-frontend.vercel.app/",
      image: "/billssplitter.png",
      category: "personal",
    },
    {
      title: "Recipe App",
      subtitle: "Personal Project",
      desc: "A beautiful web application to explore, search, add, and save favorite culinary recipes with dynamic UI grids.",
      tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      github: "https://github.com/aman123k/recipe",
      demo: "https://recipe-cyan.vercel.app/",
      image: "/recipe.png",
      category: "personal",
    },
    {
      title: "Pub Club",
      subtitle: "Company Project",
      desc: "An interactive social guide and event dashboard built with Next.js 15, rich GSAP scroll trigger sequences, Lenis smooth scrolling, and global state management.",
      tech: ["Next.js 15", "GSAP", "Lenis", "Zustand"],
      github: "https://github.com/the-gold-technologies/seven-star-landing-page",
      demo: "https://pub-club-mu.vercel.app/",
      image: "/pubclub.png",
      category: "company",
    },
    {
      title: "Arcos Capacitors",
      subtitle: "Company Project",
      desc: "A premium corporate catalog and landing platform built for an industrial manufacturer, showcasing heavy machinery capacitors with dynamic data tables.",
      tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/the-gold-technologies/arcos-capacitors",
      demo: "https://arcos-capacitors.vercel.app/",
      image: "/arcos.png",
      category: "company",
    },
    {
      title: "TGT Partner Page",
      subtitle: "Company Project",
      desc: "A premium partner landing page and onboarding portal designed to convert leads into active tech partnerships with animated CTA sections.",
      tech: ["Next.js", "TypeScript", "CSS modules", "Vercel"],
      github: "https://github.com/Ayushkush1/TGT-LandingPage",
      demo: "https://tgt-landing-page-jade.vercel.app/",
      image: "/tgt.png",
      category: "company",
    },
    {
      title: "Pub Club CMS",
      subtitle: "Company Project",
      desc: "A CMS-driven business website with Cloudinary image management, SEO optimization, and live social integration using Meta API.",
      tech: ["Next.js", "Zustand", "Cloudinary", "Meta API"],
      github: "https://github.com/the-gold-technologies/cms-seven-star",
      demo: "https://cms-seven-star.vercel.app/",
      image: "/sevenstar.png",
      category: "company",
    },
    {
      title: "SK Jewellers Portal",
      subtitle: "Company Project",
      desc: "A full-stack business stock catalog portal serving stock catalogs, Branch retail allocations, and super admin operations logs.",
      tech: ["React", "Zustand", "Tailwind", "Directus"],
      github: "https://github.com/the-gold-technologies/jewellers-inventory",
      demo: "https://skjewellers.tgtpartner.com/",
      image: "/skjewellers.png",
      category: "company",
    },
    {
      title: "Jewellery Landing Page",
      subtitle: "Company Project",
      desc: "A highly aesthetic, premium product landing page showing dynamic showcase galleries, gold rate calculators, and appointment booking forms.",
      tech: ["Next.js", "React", "Framer Motion", "Tailwind"],
      github: "https://github.com/the-gold-technologies/karatrix-landing-page",
      demo: "https://jewellery-landing-page-eta.vercel.app/",
      image: "/jewellery.png",
      category: "company",
    },
    {
      title: "Encotech Page",
      subtitle: "Company Project",
      desc: "A modern engineering corporate showcase site presenting product datasheets, structural project galleries, and contact pipelines.",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "Framer Motion"],
      github: "https://github.com/the-gold-technologies/encotech",
      demo: "https://encotech-six.vercel.app/",
      image: "/encotech.png",
      category: "company",
    },
  ];

  // Filter projects list based on active tab
  const filteredProjects = projectList.filter(
    (project) => filter === "all" || project.category === filter
  );

  // Helper to render high-fidelity premium visual mockup headers with screenshot image
  const renderMockup = (project: Project) => {
    return (
      <div
        style={{
          width: "100%",
          height: "180px",
          position: "relative",
          overflow: "hidden",
          background: "var(--bg-secondary)",
          borderBottom: "1.5px solid var(--border-color)",
        }}
        className="project-mockup-wrapper"
      >
        {/* Browser Top Bar */}
        <div
          style={{
            height: "28px",
            background: "var(--bg-tertiary)",
            display: "flex",
            alignItems: "center",
            padding: "0 14px",
            gap: "6px",
            borderBottom: "1.5px solid var(--border-color)",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f56" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffbd2e" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27c93f" }} />
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              background: "var(--bg-secondary)",
              fontSize: "10px",
              color: "var(--text-muted)",
              padding: "2px 24px",
              borderRadius: "4px",
              border: "1px solid var(--border-color)",
              maxWidth: "180px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {project.demo.replace("https://", "").replace("http://", "")}
          </div>
        </div>

        {/* Screenshot Container */}
        <div style={{ width: "100%", height: "calc(100% - 28px)", overflow: "hidden", position: "relative" }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
            className="project-screenshot"
          />
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
      className="section"
    >
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "clamp(32px, 4.5vw, 42px)",
            fontWeight: 900,
            marginBottom: "14px",
            fontFamily: "var(--font-heading)",
            letterSpacing: "-1px",
          }}
        >
          My <span className="text-gradient">Projects</span>
        </h2>
        <p
          style={{
            color: "var(--text-main)",
            maxWidth: "560px",
            margin: "0 auto",
            fontSize: "16px",
            lineHeight: 1.6,
            opacity: 0.85,
          }}
        >
          Hand-picked projects built in production. Covering multi-tenant SaaS, CMS-driven business sites, and AI-powered apps shipped at real scale.
        </p>
      </div>

      {/* Category Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "40px",
        }}
      >
        {[
          { id: "all", label: "All Projects" },
          { id: "personal", label: "Personal Projects" },
          { id: "company", label: "Company Work" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            style={{
              padding: "10px 22px",
              borderRadius: "100px",
              border: "1.5px solid var(--border-color)",
              background: filter === tab.id ? "var(--accent-gradient)" : "var(--bg-secondary)",
              color: filter === tab.id ? "#ffffff" : "var(--text-main)",
              fontWeight: 700,
              fontSize: "13.5px",
              cursor: "pointer",
              boxShadow: filter === tab.id ? "var(--shadow-accent)" : "var(--shadow-soft)",
              transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid Container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
          gap: "30px",
          marginBottom: "50px",
        }}
        className="projects-grid"
      >
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="glass-panel project-card-container"
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "28px", // a little more rounded card
              overflow: "hidden",
              border: "1.5px solid var(--border-color)",
              height: "100%",
            }}
          >
            {/* Visual Header Mockup */}
            {renderMockup(project)}

            {/* Content Container */}
            <div
              style={{
                padding: "24px",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "19px",
                    fontWeight: 800,
                    color: "var(--text-highlight)",
                    marginBottom: "4px",
                  }}
                >
                  {project.title}
                </h3>
                <h4
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {project.subtitle}
                </h4>
                <p
                  style={{
                    color: "var(--text-main)",
                    fontSize: "13.5px",
                    lineHeight: 1.5,
                    marginBottom: "20px",
                    opacity: 0.9,
                  }}
                >
                  {project.desc}
                </p>

                {/* Tech Badges */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "24px",
                  }}
                >
                  {project.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        background: "var(--bg-tertiary)",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--text-main)",
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
                  display: "flex",
                  gap: "12px",
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    background: "var(--bg-secondary)",
                    border: "1.5px solid var(--accent-primary)",
                    borderRadius: "100px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "var(--accent-primary)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--accent-light)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--bg-secondary)";
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
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    background: "var(--accent-gradient)",
                    borderRadius: "100px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#ffffff",
                    boxShadow: "var(--shadow-accent)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 6px 12px rgba(255, 122, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "var(--shadow-accent)";
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href="https://github.com/aman123k"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "var(--accent-gradient)",
            color: "#ffffff",
            fontWeight: 700,
            padding: "14px 32px",
            borderRadius: "100px",
            fontSize: "15px",
            boxShadow: "var(--shadow-accent)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 12px 24px rgba(255, 122, 0, 0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "var(--shadow-accent)";
          }}
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};
