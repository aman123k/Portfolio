import React from "react";
import { Download, Mail } from "lucide-react";

export const Hero: React.FC = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/aman_0124k/",
      bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/aman123k",
      bg: "#24292e",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sudeesh-kumar-a1a1b4260/",
      bg: "#0077b5",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "X",
      url: "https://x.com/Sudeesh76639641",
      bg: "#000000",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      ),
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/sudeesh123k/",
      bg: "#FFA116",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414 0-1.954l-2.396-2.392c-.742-.741-1.696-.639-2.443.088l-1.127 1.128c-.54.54-1.414.54-1.954 0-.54-.54-.54-1.414 0-1.954l1.127-1.128c1.373-1.373 3.407-1.745 5.22-.647 1.813 1.099 2.653 3.033 2.053 4.885-.599 1.852-2.305 3.097-4.223 3.097H8.537c-.752 0-1.363.611-1.363 1.364 0 .753.611 1.364 1.363 1.364h7.054c2.612 0 4.939-1.695 5.753-4.214.814-2.519-.102-5.32-2.285-6.848-2.183-1.528-5.051-1.554-7.265-.052l-.039-.038L14.444 1.35C14.855.776 14.364 0 13.483 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "110px",
        paddingBottom: "40px",
        position: "relative",
        zIndex: 10,
        gap: "40px",
      }}
      className="section"
    >
      {/* Left Column: Socials, Greeting, CTAs */}
      <div
        style={{
          flex: 1.1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        {/* Floating Social Media Icons */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            marginBottom: "28px",
          }}
          className="socials-container"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: social.bg,
                color: "#ffffff",
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--shadow-soft)",
                transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-4px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "var(--shadow-soft)";
              }}
              aria-label={`Follow on ${social.name}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Big Greeting */}
        <h1
          style={{
            fontSize: "clamp(44px, 6.5vw, 76px)",
            fontFamily: "var(--font-heading)",
            lineHeight: 1.1,
            marginBottom: "20px",
            fontWeight: 900,
            letterSpacing: "-1.5px",
          }}
        >
          Hi, I'm{" "}
          <span className="text-gradient" style={{ fontWeight: 900 }}>
            Sudeesh Kumar
          </span>
        </h1>

        {/* Short Bio Description */}
        <p
          style={{
            fontSize: "clamp(16px, 1.8vw, 18px)",
            color: "var(--text-main)",
            lineHeight: 1.7,
            maxWidth: "540px",
            marginBottom: "36px",
            opacity: 0.9,
          }}
        >
          I am a Full Stack Developer specializing in building modern,
          interactive, and high-performance web applications using React,
          Next.js, TypeScript, and Tailwind CSS.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            width: "100%",
          }}
        >
          <a
            href="/resume.pdf"
            download="Sudeesh_Kumar_Resume.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--accent-gradient)",
              color: "#ffffff",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "100px",
              boxShadow: "var(--shadow-accent)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(255, 122, 0, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "var(--shadow-accent)";
            }}
          >
            <Download size={18} /> Download CV
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--bg-secondary)",
              border: "1.5px solid var(--accent-primary)",
              color: "var(--accent-primary)",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "100px",
              boxShadow: "var(--shadow-soft)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-light)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--shadow-medium)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--bg-secondary)";
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "var(--shadow-soft)";
            }}
          >
            <Mail size={18} /> Contact Me
          </a>
        </div>
      </div>

      {/* Right Column: 3D Male Avatar Image with CSS floating developer badges */}
      <div
        style={{
          flex: 0.9,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "min(500px, 115vw)",
          width: "min(440px, 90vw)",
          position: "relative",
        }}
        className="hero-avatar-container"
      >
        {/* Main 3D Avatar Image */}
        <img
          src="/hero_avatar_man.png"
          alt="Sudeesh Kumar - Developer 3D Avatar"
          style={{
            width: "85%",
            height: "auto",
            objectFit: "contain",
            zIndex: 2,
          }}
        />

        {/* Floating Badge: Hi Speech Bubble */}
        <div
          className="floating-badge hi-bubble"
          style={{
            position: "absolute",
            top: "18%",
            left: "14%",
            background: "linear-gradient(135deg, #e05300 0%, #ff7a00 100%)",
            color: "#ffffff",
            padding: "8px 18px",
            borderRadius: "20px 20px 20px 0px",
            fontWeight: 800,
            fontSize: "14px",
            boxShadow: "0 10px 20px rgba(255, 122, 0, 0.25)",
            zIndex: 3,
          }}
        >
          Hi 👋
        </div>

        {/* Floating Badge: TypeScript (TS) - Placed directly above JavaScript */}
        <div
          className="floating-badge ts-badge"
          style={{
            position: "absolute",
            bottom: "40%",
            left: "6%",
            background: "#eff6ff",
            color: "#2563eb",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: "13px",
            boxShadow: "0 10px 15px rgba(37, 99, 235, 0.15)",
            zIndex: 3,
            border: "2px solid #ffffff",
          }}
        >
          TS
        </div>

        {/* Floating Badge: JavaScript (JS) - Placed on the bottom right */}
        <div
          className="floating-badge js-badge"
          style={{
            position: "absolute",
            bottom: "8%",
            right: "14%",
            background: "#fef9c3",
            color: "#a16207",
            width: "42px",
            height: "42px",
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

        {/* Floating Badge: Express - Placed on top of the avatar's head */}
        <div
          className="floating-badge express-badge"
          style={{
            position: "absolute",
            top: "-2%",
            left: "44%",
            background: "#f3f4f6",
            color: "#1f2937",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: "12px",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.08)",
            zIndex: 3,
            border: "2px solid #ffffff",
          }}
        >
          ex
        </div>

        {/* Floating Badge: MongoDB */}
        <div
          className="floating-badge mongodb-badge"
          style={{
            position: "absolute",
            top: "36%",
            right: "8%",
            background: "#f0fdf4",
            color: "#16a34a",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 15px rgba(22, 163, 74, 0.15)",
            zIndex: 3,
            border: "2px solid #ffffff",
          }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M17.15 11.23c-1.38-2.64-3.23-5.26-4.65-7.85-.2-.36-.8-.36-1 0-1.42 2.59-3.27 5.21-4.65 7.85-.6 1.15-.85 2.4-.85 3.65 0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5c0-1.25-.25-2.5-.85-3.65zm-5.15 8.1v-3.71c.56-.05 1.13-.2 1.63-.44v4.15H12zm0-5.83v-4.11c.91.46 1.68 1.16 2.19 2.05v2.06H12z" />
          </svg>
        </div>
      </div>

      {/* CSS Styles for Floating Badge animations */}
      <style>{`
        @keyframes float-badge-up {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        @keyframes float-badge-down {
          0% { transform: translateY(0); }
          50% { transform: translateY(8px); }
          100% { transform: translateY(0); }
        }
        .hi-bubble {
          animation: float-badge-up 4s ease-in-out infinite;
        }
        .ts-badge {
          animation: float-badge-up 5.5s ease-in-out 0.7s infinite;
        }
        .js-badge {
          animation: float-badge-up 3.8s ease-in-out 0.2s infinite;
        }
        .express-badge {
          animation: float-badge-down 3.9s ease-in-out 0.9s infinite;
        }
        .mongodb-badge {
          animation: float-badge-down 4.6s ease-in-out 0.6s infinite;
        }

        @media (max-width: 991px) {
          #home {
            flex-direction: column;
            text-align: center;
            justify-content: center;
            padding-top: 130px;
            gap: 40px;
          }
          #home > div {
            align-items: center !important;
            text-align: center !important;
          }
          .socials-container {
            justify-content: center;
            width: 100%;
          }
          .hero-avatar-container {
            height: 380px !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
