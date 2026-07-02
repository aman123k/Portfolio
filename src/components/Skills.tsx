import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SkillItem {
  name: string;
  proficiency: number;
  color: string;
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {
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
        ["h2", "p"],
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
      ).fromTo(
        ".skills-marquee-container",
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Simple Icons CDN helper
  const si = (slug: string, hex: string) => (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${hex}`}
      alt={slug}
      width={24}
      height={24}
      style={{ display: "block" }}
    />
  );

  const skillsList: SkillItem[] = [
    {
      name: "JavaScript",
      proficiency: 95,
      color: "#f7df1e",
      icon: si("javascript", "f7df1e"),
    },
    {
      name: "TypeScript",
      proficiency: 92,
      color: "#3178c6",
      icon: si("typescript", "3178c6"),
    },
    {
      name: "React",
      proficiency: 95,
      color: "#61dafb",
      icon: si("react", "61dafb"),
    },
    {
      name: "Next.js",
      proficiency: 90,
      color: "#ffffff",
      icon: si("nextdotjs", "ffffff"),
    },
    {
      name: "Remix",
      proficiency: 80,
      color: "#e11d48",
      icon: si("remix", "e11d48"),
    },
    {
      name: "Tailwind CSS",
      proficiency: 92,
      color: "#38bdf8",
      icon: si("tailwindcss", "38bdf8"),
    },
    {
      name: "Node.js",
      proficiency: 90,
      color: "#339933",
      icon: si("nodedotjs", "339933"),
    },
    {
      name: "Express.js",
      proficiency: 88,
      color: "#ffffff",
      icon: si("express", "ffffff"),
    },
    {
      name: "MongoDB",
      proficiency: 87,
      color: "#47a248",
      icon: si("mongodb", "47a248"),
    },
    {
      name: "Mongoose",
      proficiency: 85,
      color: "#880000",
      icon: si("mongoose", "880000"),
    },
    {
      name: "Supabase",
      proficiency: 83,
      color: "#3ecf8e",
      icon: si("supabase", "3ecf8e"),
    },
    {
      name: "PostgreSQL",
      proficiency: 85,
      color: "#336791",
      icon: si("postgresql", "336791"),
    },
    {
      name: "Prisma",
      proficiency: 84,
      color: "#5a67d8",
      icon: si("prisma", "5a67d8"),
    },
    {
      name: "Zustand",
      proficiency: 81,
      color: "#cc7722",
      icon: si("zustand", "cc7722"),
    },
    {
      name: "React Query",
      proficiency: 85,
      color: "#ff4154",
      icon: si("reactquery", "ff4154"),
    },
    {
      name: "Socket.io",
      proficiency: 82,
      color: "#ffffff",
      icon: si("socketdotio", "ffffff"),
    },
    {
      name: "Cloudinary",
      proficiency: 82,
      color: "#3448c5",
      icon: si("cloudinary", "3448c5"),
    },
    {
      name: "Git",
      proficiency: 88,
      color: "#f05032",
      icon: si("git", "f05032"),
    },
    {
      name: "GitHub",
      proficiency: 90,
      color: "#ffffff",
      icon: si("github", "ffffff"),
    },
    {
      name: "Vercel",
      proficiency: 89,
      color: "#ffffff",
      icon: si("vercel", "ffffff"),
    },
    {
      name: "Postman",
      proficiency: 84,
      color: "#ff6c37",
      icon: si("postman", "ff6c37"),
    },
    {
      name: "Figma",
      proficiency: 80,
      color: "#f24e1e",
      icon: si("figma", "f24e1e"),
    },
    {
      name: "Framer Motion",
      proficiency: 82,
      color: "#ea0250",
      icon: si("framer", "ea0250"),
    },
    {
      name: "Mantine UI",
      proficiency: 81,
      color: "#339af0",
      icon: si("mantine", "339af0"),
    },
  ];

  const midIndex = Math.ceil(skillsList.length / 2);
  const row1 = skillsList.slice(0, midIndex);
  const row2 = skillsList.slice(midIndex);

  return (
    <section
      id="skills"
      ref={containerRef}
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        overflow: "hidden",
      }}
      className="section"
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 900,
            marginBottom: "12px",
            fontFamily: "var(--font-heading)",
            color: "var(--text-highlight)",
          }}
        >
          My <span className="text-gradient">Skills</span>
        </h2>
        <p
          style={{ color: "var(--text-main)", opacity: 0.85, fontSize: "15px" }}
        >
          Stack I've used in real production apps, from day-one startups to
          multi-client agencies.
        </p>
      </div>

      <div
        className="skills-marquee-container"
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        {/* Row 1 — scrolls left */}
        <SkillRow skills={row1} direction="left" />
        {/* Row 2 — scrolls right */}
        <SkillRow skills={row2} direction="right" />
      </div>
    </section>
  );
};

/* ── Marquee row ───────────────────────────────────────────────────── */
const SkillRow: React.FC<{
  skills: SkillItem[];
  direction: "left" | "right";
}> = ({ skills, direction }) => {
  const doubled = [...skills, ...skills]; // seamless loop

  return (
    <div
      style={{
        overflow: "hidden",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={`skills-track ${direction === "left" ? "track-left" : "track-right"}`}
        style={{ display: "flex", gap: "16px", width: "max-content" }}
      >
        {doubled.map((skill, idx) => (
          <SkillCard key={`${skill.name}-${idx}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

/* ── Individual skill card ─────────────────────────────────────────── */
const SkillCard: React.FC<{ skill: SkillItem }> = ({ skill }) => {
  return (
    <div
      className="glass-panel skill-card"
      style={{
        padding: "16px 20px",
        minWidth: "220px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        flexShrink: 0,
        cursor: "default",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            color: skill.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `${skill.color}1a`,
            padding: "8px",
            borderRadius: "10px",
            flexShrink: 0,
          }}
        >
          {skill.icon}
        </div>
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "var(--text-highlight)",
            letterSpacing: "-0.2px",
          }}
        >
          {skill.name}
        </h3>
      </div>

      {/* Proficiency */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.4px",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "var(--text-muted)" }}>Proficiency</span>
          <span
            style={{
              color: "var(--text-highlight)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {skill.proficiency}%
          </span>
        </div>
        <div
          className="skill-progress-bar"
          style={{
            height: "5px",
            borderRadius: "99px",
            background: "var(--bg-tertiary)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${skill.proficiency}%`,
              background: `linear-gradient(90deg, ${skill.color}bb, ${skill.color})`,
              borderRadius: "99px",
              boxShadow: `0 0 8px ${skill.color}55`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
